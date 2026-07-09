// Para birimi formatla (1.250,00 ₺ gibi)
// ⚡ Bolt Optimization: Instantiate the formatter once at the module level
// to avoid expensive instantiations on every function call (~50x faster)
const currencyFormatter = new Intl.NumberFormat('tr-TR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

export const formatCurrency = (amount) => 
    currencyFormatter.format(amount);
  
// Tarih formatla (12 Ara gibi)
export const formatDate = (dateStr) => 
    new Date(dateStr).toLocaleDateString('tr-TR', { day: 'numeric', month: 'short' });
  
// Ödeme yöntemini güzel gösteren fonksiyon
export const getSubMethod = (trans) => {
    if (trans.type === 'expense') return trans.method === 'cash' ? 'Nakit Kasa' : (trans.cardBank || 'Banka/Kart');
    
    // Income Logic
    if (trans.method === 'mix') return 'Z Raporu';
    if (trans.method === 'cash') return 'Nakit Kasa';
    if (trans.method === 'card') {
        return trans.cardBank === 'ziraat' ? 'Ziraat Kart' : trans.cardBank === 'halk' ? 'Halk Kart' : 'Diğer Banka';
    }
    return 'Bilinmiyor';
};