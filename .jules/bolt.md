## 2024-08-14 - Cache Intl Formatters for Performance
**Learning:** Repeatedly instantiating `Intl.NumberFormat` inside formatting helpers (like `formatCurrency`) causes significant overhead (~100x slower) during frequent renders or loops.
**Action:** Always instantiate the formatter once at the module level and reuse it for a ~100x performance gain in execution time.
