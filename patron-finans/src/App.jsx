import React, { useState, useEffect, useMemo, lazy, Suspense } from 'react'; // lazy ve Suspense eklendi
import { signInAnonymously, onAuthStateChanged } from 'firebase/auth';
import { collection, doc, onSnapshot, query, orderBy, limit } from 'firebase/firestore';
import { Loader2, Menu, Coffee } from 'lucide-react';

import { auth, db, appId } from './services/firebase';
import { THEME, INITIAL_MARKET_RATES, INITIAL_MONTHLY_GOAL } from './utils/constants';

import Sidebar from './components/Sidebar';
import AuthScreen from './components/AuthScreen';

// --- SAYFALAR ARTIK DİNAMİK YÜKLENİYOR (LAZY LOADING) ---
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Transactions = lazy(() => import('./pages/Transactions'));
const Debts = lazy(() => import('./pages/Debts'));
const Products = lazy(() => import('./pages/Products'));
const Recipe = lazy(() => import('./pages/Recipe'));
const Investments = lazy(() => import('./pages/Investments'));
const Stats = lazy(() => import('./pages/Stats'));
const Assistant = lazy(() => import('./pages/Assistant'));
const Settings = lazy(() => import('./pages/Settings'));
const CashierPOS = lazy(() => import('./pages/CashierPOS'));
const Tables = lazy(() => import('./pages/Tables'));
const CashierSettings = lazy(() => import('./pages/CashierSettings'));
const ZReport = lazy(() => import('./pages/ZReport'));

export default function PatronFinancePro() {
  const [user, setUser] = useState(null);
  const [userRole, setUserRole] = useState(null);
  const [activeTab, setActiveTab] = useState('pos'); 
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  
  // Data States
  const [transactions, setTransactions] = useState([]);
  const [products, setProducts] = useState([]);
  const [investments, setInvestments] = useState([]);
  const [debts, setDebts] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [quickActions, setQuickActions] = useState([]);
  const [tables, setTables] = useState([]);
  
  const [fixedCosts, setFixedCosts] = useState({ rent: 0, staff: 0, bills: 0, other: 0 });
  const [monthlyGoal, setMonthlyGoal] = useState(INITIAL_MONTHLY_GOAL);
  const [marketRates, setMarketRates] = useState(INITIAL_MARKET_RATES);
  
  // 1. Auth
  useEffect(() => {
    if (userRole === null) { setLoading(false); return; }
    
    if (userRole === 'kasiyer') setActiveTab('pos');
    else setActiveTab('dashboard');

    const initAuth = async () => { try { await signInAnonymously(auth); } catch (e) { console.error(e); } };
    initAuth();
    return onAuthStateChanged(auth, (currentUser) => { setUser(currentUser); setLoading(false); });
  }, [userRole]);

  // 2. Veri Çekme
  useEffect(() => {
    if (!user || !db) return; 
    const uid = user.uid;
    const unsubscribers = []; 

    unsubscribers.push(onSnapshot(query(collection(db, 'artifacts', appId, 'users', uid, 'transactions'), orderBy('date', 'desc'), limit(500)), s => setTransactions(s.docs.map(d => ({id:d.id, ...d.data()})))));
    unsubscribers.push(onSnapshot(query(collection(db, 'artifacts', appId, 'users', uid, 'products'), orderBy('order', 'asc')), s => setProducts(s.docs.map(d => ({id:d.id, ...d.data()})))));
    unsubscribers.push(onSnapshot(collection(db, 'artifacts', appId, 'users', uid, 'investments'), s => setInvestments(s.docs.map(d => ({id:d.id, ...d.data()})))));
    unsubscribers.push(onSnapshot(collection(db, 'artifacts', appId, 'users', uid, 'debts'), s => setDebts(s.docs.map(d => ({id:d.id, ...d.data()})))));
    unsubscribers.push(onSnapshot(query(collection(db, 'artifacts', appId, 'users', uid, 'ingredients'), orderBy('order', 'asc')), s => setIngredients(s.docs.map(d => ({id:d.id, ...d.data()})))));
    unsubscribers.push(onSnapshot(query(collection(db, 'artifacts', appId, 'users', uid, 'quickActions'), orderBy('order', 'asc')), s => setQuickActions(s.docs.map(d => ({id:d.id, ...d.data()})))));
    unsubscribers.push(onSnapshot(query(collection(db, 'artifacts', appId, 'users', uid, 'tables'), orderBy('number', 'asc')), s => setTables(s.docs.map(d => ({id:d.id, ...d.data()})))));

    unsubscribers.push(onSnapshot(doc(db, 'artifacts', appId, 'users', uid, 'settings', 'fixedCosts'), (doc) => { if(doc.exists()) setFixedCosts(doc.data()); }));
    unsubscribers.push(onSnapshot(doc(db, 'artifacts', appId, 'users', uid, 'settings', 'monthlyGoal'), (doc) => { if(doc.exists()) setMonthlyGoal(doc.data().value); }));

    return () => unsubscribers.forEach(unsub => unsub());
  }, [user]);

  // 3. İstatistikler
  const stats = useMemo(() => {
    // Single pass optimization for transactions
    const today = new Date().toISOString().split('T')[0];
    const currentMonth = today.slice(0, 7);

    let totalIncome = 0;
    let totalExpense = 0;
    let dailyIncome = 0;
    let monthlyIncome = 0;
    
    const breakdown = { cash: { income: 0, expense: 0, balance: 0 }, ziraat: { income: 0, expense: 0, balance: 0 }, halk: { income: 0, expense: 0, balance: 0 }, iban: { income: 0, expense: 0, balance: 0 }, mix: { income: 0, expense: 0, balance: 0 } };

    transactions.forEach(t => {
      const val = Number(t.amount);

      // Income/Expense totals
      if (t.type === 'income') {
        totalIncome += val;
        if (t.date === today) dailyIncome += val;
        if (t.date.startsWith(currentMonth)) monthlyIncome += val;
      } else if (t.type === 'expense') {
        totalExpense += val;
      }

      // Breakdown logic
      let key = t.method === 'mix' ? 'mix' : (t.method === 'cash' ? 'cash' : (t.cardBank || 'iban'));
      if (!breakdown[key]) key = 'cash';

      if (t.type === 'income') {
        breakdown[key].income += val;
        breakdown[key].balance += val;
      } else {
        // Note: Original logic assumed 'else' is expense for breakdown purposes
        breakdown[key].expense += val;
        breakdown[key].balance -= val;
      }
    });

    const netProfit = totalIncome - totalExpense;
    const totalMonthlyFixedCosts = Object.values(fixedCosts).reduce((sum, val) => sum + Number(val || 0), 0);
    const netNetProfit = netProfit - totalMonthlyFixedCosts;

    // Single pass optimization for debts
    let totalDebt = 0;
    debts.forEach(d => {
       const val = Number(d.amount);
       if (d.type === 'debt') totalDebt += val;
       else if (d.type === 'payment') totalDebt -= val;
    });

    const investmentStats = investments.reduce((acc, inv) => {
      const currentPrice = inv.currentPrice || inv.buyPrice; 
      acc.totalCost += inv.quantity * inv.buyPrice;
      acc.currentValue += inv.quantity * currentPrice;
      acc.totalProfit += (inv.quantity * currentPrice) - (inv.quantity * inv.buyPrice);
      return acc;
    }, { totalCost: 0, currentValue: 0, totalProfit: 0 });

    const assets = { cash: breakdown.cash.balance, ziraat: breakdown.ziraat.balance, halk: breakdown.halk.balance, iban: breakdown.iban.balance, mix: breakdown.mix.balance, gold: investmentStats.currentValue };
    return { totalIncome, totalExpense, netProfit, netNetProfit, totalMonthlyFixedCosts, dailyIncome, monthlyIncome, breakdown, totalDebt, investmentStats, assets };
  }, [transactions, debts, investments, fixedCosts]);

  const calculateFutureCashflow = useMemo(() => {
      const avgDailyIncome = stats.monthlyIncome / (new Date().getDate() || 1); 
      const estimatedMonthlyIncome = avgDailyIncome * 30;
      const stockExpense = transactions.filter(t => t.type === 'expense' && t.category === 'Stok (Fatura)').reduce((sum, t) => sum + Number(t.amount), 0);
      const avgDailyStockExpense = stockExpense / (new Date().getDate() || 1);
      const estimatedNetProfit = estimatedMonthlyIncome - stats.totalMonthlyFixedCosts - (avgDailyStockExpense * 30);
      return { estimatedMonthlyIncome, totalFixedCosts: stats.totalMonthlyFixedCosts, estimatedMonthlyStockExpense: avgDailyStockExpense * 30, estimatedNetProfit };
  }, [stats.monthlyIncome, stats.totalMonthlyFixedCosts, transactions]);

  const getProfitabilityWarnings = () => {
      const minProfitMargin = 0.40;
      return products.map(p => {
          const margin = p.price > 0 ? (p.price - p.cost) / p.price : 0;
          let warning = null;
          if (margin < minProfitMargin) warning = `Marj Düşük (%${(margin * 100).toFixed(0)})`;
          return { ...p, warning };
      }).filter(p => p.warning !== null);
  };

  const renderContent = () => {
    // --- KASİYER YETKİ KONTROLÜ ---
    if (userRole === 'kasiyer') {
        const restrictedTabs = ['dashboard', 'recipe', 'investments', 'stats', 'assistant', 'zreport']; 
        
        if (restrictedTabs.includes(activeTab)) {
             return (
                <div className="flex flex-col items-center justify-center h-[50vh] text-slate-500 space-y-4">
                    <div className="p-4 bg-slate-800 rounded-full"><Coffee size={40} className="text-slate-600"/></div>
                    <p>Bu alana sadece Patron erişebilir.</p>
                    <button onClick={() => setActiveTab('pos')} className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">Satış Ekranına Dön</button>
                </div>
             );
        }
    }

    switch (activeTab) {
      case 'dashboard':
        return <Dashboard stats={stats} transactions={transactions} monthlyGoal={monthlyGoal} calculateFutureCashflow={calculateFutureCashflow} getProfitabilityWarnings={getProfitabilityWarnings} tables={tables}/>;
      
      case 'zreport':
        return <ZReport transactions={transactions} />;
      
      case 'pos': 
        // 👇 products ve ingredients eklendi
        return <CashierPOS products={products} ingredients={ingredients} />; 

      case 'tables':
        // 👇 products ve ingredients eklendi
        return <Tables tables={tables} products={products} ingredients={ingredients} />;

      case 'transactions':
        return <Transactions transactions={transactions} quickActions={quickActions} isPatron={userRole === 'patron'}/>;
      
      case 'debts':
        return <Debts debts={debts} stats={stats} />;

      case 'products':
          return <Products products={products} isPatron={userRole === 'patron'} />;

      case 'recipe':
          return <Recipe ingredients={ingredients} />;
          
      case 'investments':
          return <Investments investments={investments} marketRates={marketRates} />;
      
      case 'stats':
          return <Stats transactions={transactions} products={products} />;

      case 'assistant':
          return <Assistant stats={stats} />;

      case 'settings':
          if (userRole === 'patron') {
              return <Settings monthlyGoal={monthlyGoal} setMonthlyGoal={setMonthlyGoal} fixedCosts={fixedCosts} setFixedCosts={setFixedCosts} />;
          }
          return <CashierSettings />;

      default:
        return <div className="text-center py-20 text-slate-500">Sayfa Bulunamadı.</div>;
    }
  };

  if (loading) return <div className="min-h-screen bg-slate-950 flex items-center justify-center text-indigo-500"><Loader2 className="animate-spin" size={40}/></div>;
  if (userRole === null) return <AuthScreen setUserRole={setUserRole} />;

  return (
    <div className={`min-h-screen ${THEME.bg} text-slate-200 font-sans flex`}>
      <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden fixed top-4 left-4 z-50 p-2 bg-slate-800 rounded-lg text-white shadow-lg border border-slate-700"><Menu size={24} /></button>
      <div className={`fixed inset-0 bg-black/50 z-40 md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`} onClick={() => setIsMobileMenuOpen(false)}></div>
      
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} isMobile={!isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} userRole={userRole} />

      <main className={`flex-1 h-screen overflow-y-auto w-full relative ${isMobileMenuOpen ? 'overflow-hidden' : ''}`}>
        <div className="p-4 md:p-8 pb-24 md:pb-8 max-w-7xl mx-auto">
          {/* 👇 SUSPENSE İLE YÜKLEMEYİ BEKLE */}
          <Suspense fallback={<div className="text-center py-20 text-indigo-400"><Loader2 className="animate-spin inline-block mr-2"/> Sayfa Yükleniyor...</div>}>
            {renderContent()}
          </Suspense>
        </div>
      </main>
    </div>
  );
}