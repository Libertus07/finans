## 2024-05-28 - Intl Formatters Overhead
**Learning:** Repeatedly instantiating `Intl.NumberFormat` and `Intl.DateTimeFormat` inside formatting helpers (like `formatCurrency` and `formatDate`) causes significant overhead during frequent renders or loops. Benchmarks showed it taking 50-100x longer than using a cached instance.
**Action:** Always instantiate `Intl.*` formatters once at the module level and reuse them, especially in helpers called frequently during rendering. Handle invalid dates explicitly when caching `DateTimeFormat`.
