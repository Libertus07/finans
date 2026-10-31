## 2024-05-18 - Caching Intl Formatters
**Learning:** Repeatedly instantiating `Intl.NumberFormat` or `Intl.DateTimeFormat` inside formatting functions is a significant performance bottleneck in React lists/charts.
**Action:** Extract and cache these formatters as module-level constants. Ensure to handle `Invalid Date` gracefully when refactoring `toLocaleDateString` to `Intl.DateTimeFormat.prototype.format`.
