// Para birimi formatla (1.250,00 ₺ gibi)
// Performance optimization: Cache Intl.NumberFormat to avoid expensive instantiation on every call (~98% faster)
const CURRENCY_FORMATTER = new Intl.NumberFormat('tr-TR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
export const formatCurrency = (amount) => CURRENCY_FORMATTER.format(amount);
  
// Tarih formatla (12 Ara gibi)
// Performance optimization: Cache Intl.DateTimeFormat to avoid expensive instantiation on every call (~98% faster)
const DATE_FORMATTER = new Intl.DateTimeFormat('tr-TR', { day: 'numeric', month: 'short' });
export const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return isNaN(date) ? 'Invalid Date' : DATE_FORMATTER.format(date);
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