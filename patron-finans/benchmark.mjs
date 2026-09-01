const start1 = performance.now();
for (let i = 0; i < 100000; i++) {
  new Intl.NumberFormat('tr-TR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(1250.50);
}
const end1 = performance.now();
console.log(`Uncached formatCurrency: ${end1 - start1} ms`);

const CURRENCY_FORMATTER = new Intl.NumberFormat('tr-TR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const start2 = performance.now();
for (let i = 0; i < 100000; i++) {
  CURRENCY_FORMATTER.format(1250.50);
}
const end2 = performance.now();
console.log(`Cached formatCurrency: ${end2 - start2} ms`);

const start3 = performance.now();
for (let i = 0; i < 100000; i++) {
  new Date('2023-12-12').toLocaleDateString('tr-TR', { day: 'numeric', month: 'short' });
}
const end3 = performance.now();
console.log(`Uncached formatDate: ${end3 - start3} ms`);

const DATE_FORMATTER = new Intl.DateTimeFormat('tr-TR', { day: 'numeric', month: 'short' });
const start4 = performance.now();
for (let i = 0; i < 100000; i++) {
  const date = new Date('2023-12-12');
  if (!isNaN(date)) {
    DATE_FORMATTER.format(date);
  }
}
const end4 = performance.now();
console.log(`Cached formatDate: ${end4 - start4} ms`);
