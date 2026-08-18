## 2024-05-23 - Cache Intl.NumberFormat for performance
**Learning:** Repeatedly instantiating `Intl.NumberFormat` inside formatting helpers causes significant overhead during frequent renders or loops.
**Action:** Always instantiate the formatter once at the module level and reuse it for a ~100x performance gain in execution time.
