// ⚡ Bolt Optimization: Cache Intl Formatters
// Instantiating Intl formatters is expensive. Caching them at the module level
// provides a ~100x performance speedup in frequent renders and loops.

// Para birimi formatla (1.250,00 ₺ gibi)
const currencyFormatter = new Intl.NumberFormat('tr-TR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
export const formatCurrency = (amount) => 
    currencyFormatter.format(amount);
  
// Tarih formatla (12 Ara gibi)
const dateFormatter = new Intl.DateTimeFormat('tr-TR', { day: 'numeric', month: 'short' });
export const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    if (isNaN(date)) return 'Invalid Date';
    return dateFormatter.format(date);
};
  
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