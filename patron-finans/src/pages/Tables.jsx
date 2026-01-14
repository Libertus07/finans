import React, { useState, memo } from 'react';
import { LayoutGrid, Coffee, X, CheckCircle2, ShoppingBag, CreditCard, Banknote, Plus, Minus, Filter, Armchair, Sun, Cloud, Home, ArrowUp, Printer } from 'lucide-react'; // Printer eklendi
import { doc, updateDoc, addDoc, collection } from 'firebase/firestore';
import { db, appId, auth } from '../services/firebase';
import { formatCurrency } from '../utils/helpers';
import { CATEGORIES } from '../utils/constants';
import Receipt from '../components/Receipt'; // Fiş bileşeni eklendi

const Tables = memo(({ tables, products }) => {
    const [selectedTable, setSelectedTable] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState('Tümü');
    const [activeZone, setActiveZone] = useState('Tümü');
    const [processing, setProcessing] = useState(false);
    
    // 👇 YAZDIRMA İÇİN YENİ STATE
    const [printData, setPrintData] = useState(null);

    const zones = ['Tümü', ...new Set(tables.map(t => t.zone || 'Salon'))];
    const filteredTables = tables.filter(t => activeZone === 'Tümü' || t.zone === activeZone);
    const filteredProducts = products.filter(p => selectedCategory === 'Tümü' || p.category === selectedCategory);

    const stats = {
        total: tables.length,
        occupied: tables.filter(t => t.status === 'occupied').length,
        amount: tables.reduce((acc, t) => acc + (t.total || 0), 0)
    };

    // --- SİPARİŞ İŞLEMLERİ ---
    const handleAddToTable = async (product) => {
        if (!selectedTable) return;
        const currentOrders = selectedTable.orders || [];
        const existingItem = currentOrders.find(item => item.id === product.id);
        let newOrders;

        if (existingItem) {
            newOrders = currentOrders.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
        } else {
            newOrders = [...currentOrders, { ...product, quantity: 1 }];
        }
        await updateTableOrders(newOrders);
    };

    const handleUpdateQuantity = async (productId, delta) => {
        if (!selectedTable) return;
        const newOrders = selectedTable.orders.map(item => {
            if (item.id === productId) return { ...item, quantity: Math.max(0, item.quantity + delta) };
            return item;
        }).filter(item => item.quantity > 0);
        await updateTableOrders(newOrders);
    };

    const updateTableOrders = async (newOrders) => {
        const total = newOrders.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const status = newOrders.length > 0 ? 'occupied' : 'empty';
        setSelectedTable(prev => ({ ...prev, orders: newOrders, total, status })); 
        await updateDoc(doc(db, 'artifacts', appId, 'users', auth.currentUser.uid, 'tables', selectedTable.id), { orders: newOrders, total, status });
    };

    // --- HESAP KAPATMA ---
    const handleCloseTable = async (method) => {
        if (!selectedTable || selectedTable.total <= 0 || processing) return;
        if (!window.confirm(`${selectedTable.name} hesabı kapatılacak: ${formatCurrency(selectedTable.total)} ₺. Onaylıyor musunuz?`)) return;
        
        setProcessing(true);
        const user = auth.currentUser;

        try {
            await addDoc(collection(db, 'artifacts', appId, 'users', user.uid, 'transactions'), {
                date: new Date().toISOString().split('T')[0],
                type: 'income',
                amount: selectedTable.total,
                desc: `${selectedTable.name} (${selectedTable.zone}) Satışı`,
                method: method === 'cash' ? 'cash' : 'card',
                cardBank: method === 'card' ? 'ziraat' : null,
                category: 'Masa Satışı',
                subMethod: method === 'cash' ? 'Nakit' : 'Kart'
            });

            await updateDoc(doc(db, 'artifacts', appId, 'users', user.uid, 'tables', selectedTable.id), { orders: [], total: 0, status: 'empty' });
            setSelectedTable(null);
        } catch (error) {
            console.error(error);
            alert("Hata oluştu.");
        } finally {
            setProcessing(false);
        }
    };

    // 👇 YENİ: YAZDIRMA FONKSİYONU
    const handlePrintBill = () => {
        if (!selectedTable || selectedTable.orders.length === 0) return;
        
        // Fiş verisini hazırla
        setPrintData({
            title: selectedTable.name,
            type: 'Masa Hesabı',
            items: selectedTable.orders,
            total: selectedTable.total,
            date: new Date().toLocaleString('tr-TR')
        });

        // Veri state'e yazıldıktan hemen sonra yazdır
        setTimeout(() => {
            window.print();
        }, 100);
    };

    const getZoneIcon = (zoneName) => {
        if (zoneName.includes('Bahçe')) return <Sun size={16}/>;
        if (zoneName.includes('Teras')) return <Cloud size={16}/>;
        if (zoneName.includes('Üst')) return <ArrowUp size={16}/>;
        return <Home size={16}/>;
    };

    return (
        <div className="h-[calc(100vh-100px)] flex gap-6 animate-in fade-in duration-500">
            
            {/* SOL: MASA IZGARASI */}
            <div className={`flex-1 flex flex-col overflow-hidden ${selectedTable ? 'hidden xl:flex' : 'flex'}`}>
                <div className="grid grid-cols-3 gap-4 mb-4 shrink-0">
                    <div className="bg-slate-800 p-3 rounded-xl border border-slate-700 flex items-center justify-between"><span className="text-xs text-slate-400">Toplam Masa</span><span className="font-bold text-white text-lg">{stats.total}</span></div>
                    <div className="bg-slate-800 p-3 rounded-xl border border-emerald-500/30 flex items-center justify-between relative overflow-hidden"><div className="absolute left-0 top-0 w-1 h-full bg-emerald-500"></div><span className="text-xs text-slate-400 pl-2">Dolu Masa</span><span className="font-bold text-emerald-400 text-lg">{stats.occupied}</span></div>
                    <div className="bg-slate-800 p-3 rounded-xl border border-indigo-500/30 flex items-center justify-between"><span className="text-xs text-slate-400">Açık Hesap</span><span className="font-bold text-indigo-400 text-lg">{formatCurrency(stats.amount)} ₺</span></div>
                </div>

                <div className="flex gap-2 mb-4 overflow-x-auto pb-1 shrink-0 no-scrollbar">
                    {zones.map(zone => (
                        <button key={zone} onClick={() => setActiveZone(zone)} className={`flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-sm transition-all ${activeZone === zone ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/30' : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white'}`}>
                            {zone === 'Tümü' ? <LayoutGrid size={16}/> : getZoneIcon(zone)} {zone}
                        </button>
                    ))}
                </div>
                
                <div className="flex-1 overflow-y-auto custom-scrollbar pr-2">
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                        {filteredTables.map(table => (
                            <button key={table.id} onClick={() => setSelectedTable(table)} className={`relative p-4 rounded-2xl border transition-all active:scale-95 flex flex-col items-center justify-between h-32 group ${table.status === 'occupied' ? 'bg-gradient-to-br from-indigo-900/80 to-slate-900 border-indigo-500/50 shadow-[0_0_15px_rgba(99,102,241,0.3)]' : 'bg-slate-800 border-slate-700 hover:border-slate-500 hover:bg-slate-750'}`}>
                                <div className="w-full flex justify-between items-start"><span className={`text-xs font-bold px-2 py-0.5 rounded-full ${table.status === 'occupied' ? 'bg-indigo-500 text-white' : 'bg-slate-700 text-slate-400'}`}>{table.name}</span>{table.status === 'occupied' && <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>}</div>
                                {table.status === 'occupied' ? (<div className="text-center"><div className="text-xl font-extrabold text-white tracking-tight">{formatCurrency(table.total)}<span className="text-xs font-normal text-slate-400">₺</span></div><div className="text-[10px] text-indigo-300 mt-1">{table.orders.length} Ürün</div></div>) : (<div className="flex flex-col items-center text-slate-600 group-hover:text-slate-400 transition-colors"><Armchair size={28} strokeWidth={1.5}/><span className="text-xs font-medium mt-1 opacity-50">{table.zone}</span></div>)}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* SAĞ: SİPARİŞ DETAYI */}
            {selectedTable && (
                <div className="fixed inset-0 xl:static xl:inset-auto z-50 w-full xl:w-[500px] bg-slate-900 xl:bg-slate-800 xl:rounded-3xl border-l border-slate-700 flex flex-col shadow-2xl animate-in slide-in-from-right duration-300">
                    <div className="p-5 border-b border-slate-700 flex justify-between items-center bg-slate-800 rounded-t-3xl">
                        <div><h3 className="text-2xl font-bold text-white">{selectedTable.name}</h3><div className="flex items-center gap-1 text-xs text-indigo-400 font-bold uppercase tracking-wider">{getZoneIcon(selectedTable.zone)} {selectedTable.zone}</div></div>
                        <button onClick={() => setSelectedTable(null)} className="p-2 bg-slate-700 rounded-full text-slate-400 hover:text-white hover:bg-red-500 transition-colors"><X size={20}/></button>
                    </div>

                    <div className="p-3 bg-slate-900 border-b border-slate-800">
                        <div className="flex gap-2 overflow-x-auto no-scrollbar">
                            <button onClick={() => setSelectedCategory('Tümü')} className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-colors ${selectedCategory === 'Tümü' ? 'bg-white text-slate-900 shadow' : 'bg-slate-800 text-slate-400 border border-slate-700'}`}>Tümü</button>
                            {CATEGORIES.map(cat => (<button key={cat} onClick={() => setSelectedCategory(cat)} className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-colors ${selectedCategory === cat ? 'bg-white text-slate-900 shadow' : 'bg-slate-800 text-slate-400 border border-slate-700'}`}>{cat}</button>))}
                        </div>
                    </div>

                    <div className="flex-1 flex flex-col overflow-hidden">
                        <div className="h-1/2 shrink-0 overflow-y-auto custom-scrollbar p-3 bg-slate-900 border-b border-slate-800">
                            <div className="grid grid-cols-3 gap-2 content-start">
                                {filteredProducts.map(p => (
                                    <button key={p.id} onClick={() => handleAddToTable(p)} className="bg-slate-800 hover:bg-slate-700 p-3 rounded-xl flex flex-col justify-between border border-slate-700 hover:border-indigo-500/50 transition-all group active:scale-95 h-20">
                                        <div className="text-xs font-bold text-slate-300 group-hover:text-white w-full text-left line-clamp-2 leading-tight">{p.name}</div>
                                        <div className="text-sm text-emerald-400 font-extrabold w-full text-right">{formatCurrency(p.price)}</div>
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="flex-1 overflow-y-auto p-4 space-y-2 custom-scrollbar bg-slate-800/50">
                            <div className="text-xs text-slate-500 font-bold uppercase mb-2 pl-1">Sipariş Listesi</div>
                            {selectedTable.orders.length === 0 ? (<div className="h-20 flex flex-col items-center justify-center text-slate-500 opacity-50"><ShoppingBag size={24}/><p className="text-xs mt-1">Henüz ürün eklenmedi</p></div>) : (
                                selectedTable.orders.map(item => (
                                    <div key={item.id} className="flex justify-between items-center bg-slate-700/20 p-2 rounded-lg border border-slate-700/50 hover:bg-slate-700/40 transition-colors">
                                        <div className="flex-1"><div className="text-white font-bold text-sm">{item.name}</div><div className="text-slate-500 text-[10px]">{formatCurrency(item.price)} x {item.quantity}</div></div>
                                        <div className="flex items-center gap-2">
                                            <div className="flex items-center bg-slate-900 rounded-lg p-0.5 border border-slate-700">
                                                <button onClick={() => handleUpdateQuantity(item.id, -1)} className="w-6 h-6 flex items-center justify-center text-slate-400 hover:text-white hover:bg-red-500 rounded transition-colors"><Minus size={12}/></button>
                                                <span className="w-6 text-center text-sm font-bold text-white">{item.quantity}</span>
                                                <button onClick={() => handleUpdateQuantity(item.id, 1)} className="w-6 h-6 flex items-center justify-center text-slate-400 hover:text-white hover:bg-emerald-500 rounded transition-colors"><Plus size={12}/></button>
                                            </div>
                                            <div className="w-14 text-right font-bold text-white text-sm">{formatCurrency(item.price * item.quantity)}</div>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>

                    <div className="p-5 bg-slate-900 border-t border-slate-800">
                        <div className="flex justify-between items-end mb-4">
                            <span className="text-slate-400 text-sm mb-1 block">Toplam Tutar</span>
                            <span className="text-4xl font-extrabold text-white tracking-tight">{formatCurrency(selectedTable.total)} <span className="text-lg text-slate-500 font-normal">₺</span></span>
                        </div>
                        
                        {/* 👇 YENİ: YAZDIRMA BUTONU EKLENDİ */}
                        <button 
                            onClick={handlePrintBill} 
                            disabled={selectedTable.total <= 0}
                            className="w-full mb-3 py-3 bg-slate-700 hover:bg-slate-600 text-slate-200 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors border border-slate-600"
                        >
                            <Printer size={20}/> ADİSYON YAZDIR
                        </button>

                        <div className="grid grid-cols-2 gap-3">
                            <button onClick={() => handleCloseTable('cash')} disabled={selectedTable.total <= 0} className="py-3 bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-xl font-bold flex flex-col items-center justify-center gap-1 transition-all active:scale-[0.98]"><Banknote size={24}/> <span className="text-xs">NAKİT KAPAT</span></button>
                            <button onClick={() => handleCloseTable('card')} disabled={selectedTable.total <= 0} className="py-3 bg-blue-600 hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-xl font-bold flex flex-col items-center justify-center gap-1 transition-all active:scale-[0.98]"><CreditCard size={24}/> <span className="text-xs">KARTLA KAPAT</span></button>
                        </div>
                    </div>
                </div>
            )}

            {/* 👇 GİZLİ FİŞ BİLEŞENİ (Sadece Yazdırma Anında Görünür) */}
            <Receipt data={printData} />
        </div>
    );
});

export default Tables;