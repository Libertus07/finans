const d = new Date();
const s1 = d.toLocaleDateString('tr-TR', { day: 'numeric', month: 'short' });
const formatter = new Intl.DateTimeFormat('tr-TR', { day: 'numeric', month: 'short' });
const s2 = formatter.format(d);
console.log("s1:", s1);
console.log("s2:", s2);
