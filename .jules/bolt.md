## 2024-10-24 - [Intl.NumberFormat Caching]
**Learning:** Instantiating `Intl.NumberFormat` inside formatting helpers causes significant overhead during frequent renders or loops.
**Action:** Always instantiate the formatter once at the module level and reuse it for a ~100x performance gain in execution time.
