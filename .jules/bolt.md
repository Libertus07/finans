## 2024-07-24 - Cache Intl formatters
**Learning:** Repeatedly instantiating `Intl.NumberFormat` and `Intl.DateTimeFormat` inside formatting helpers causes significant overhead during frequent renders or loops.
**Action:** Always instantiate the formatter once at the module level and reuse it for a ~100x performance gain in execution time.
