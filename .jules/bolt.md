## 2024-07-26 - Cache Intl.NumberFormat for ~50x speedup
**Learning:** Repeatedly instantiating `Intl.NumberFormat` inside formatting helpers (like `formatCurrency`) causes significant overhead during frequent renders or loops. Our benchmark showed a ~50x performance difference (667ms vs 13ms for 10k iterations).
**Action:** Always instantiate the formatter once at the module level and reuse it for a significant performance gain in execution time.
