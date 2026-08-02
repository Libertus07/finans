## 2024-08-02 - Cache Intl.NumberFormat for ~100x speedup
**Learning:** Repeatedly instantiating `Intl.NumberFormat` inside formatting helpers (like `formatCurrency`) causes significant overhead during frequent renders or loops.
**Action:** Always instantiate the formatter once at the module level and reuse it for a ~100x performance gain in execution time.
