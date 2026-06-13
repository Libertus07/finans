## 2024-06-13 - Caching Intl Formatters
**Learning:** Repeatedly instantiating `Intl.NumberFormat` or calling `toLocaleDateString` inside formatting helpers (like `formatCurrency` and `formatDate`) causes significant overhead (~1000ms for 10k iterations).
**Action:** Always instantiate `Intl.NumberFormat` and `Intl.DateTimeFormat` once at the module level and reuse them for a ~100x performance gain in execution time.
