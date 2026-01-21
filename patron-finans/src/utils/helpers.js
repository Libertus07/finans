// Cached formatters to prevent creating new instances on every render
const CURRENCY_FORMATTER = new Intl.NumberFormat('tr-TR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const DATE_FORMATTER = new Intl.DateTimeFormat('tr-TR', { day: 'numeric', month: 'short' });

// Para birimi formatla (1.250,00 ₺ gibi)
export const formatCurrency = (amount) => 
    CURRENCY_FORMATTER.format(amount);
  
// Tarih formatla (12 Ara gibi)
export const formatDate = (dateStr) => 
    DATE_FORMATTER.format(new Date(dateStr));
  
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