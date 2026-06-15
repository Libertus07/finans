## 2025-06-15 - Cache Intl Formatters
**Learning:** Repeatedly instantiating Intl.NumberFormat inside formatting helpers causes significant overhead during frequent renders or loops.
**Action:** Always instantiate the formatter once at the module level and reuse it for a ~100x performance gain in execution time.
