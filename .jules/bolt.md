## 2026-07-11 - Cache Intl formatters
**Learning:** Repeatedly instantiating `Intl.NumberFormat` or `Intl.DateTimeFormat` inside formatting helpers (like `formatCurrency`) causes significant overhead during frequent renders or loops.
**Action:** Always instantiate the formatter once at the module level and reuse it for a ~100x performance gain in execution time.
