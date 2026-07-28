## 2024-05-24 - Intl.NumberFormat Initialization Overhead
**Learning:** Repeatedly instantiating `Intl.NumberFormat` inside formatting helpers (like `formatCurrency`) causes significant overhead during frequent renders or loops.
**Action:** Always instantiate the formatter once at the module level and reuse it for a ~80x performance gain in execution time.
