## 2025-02-09 - Intl.NumberFormat Instantiation Overhead
**Learning:** Instantiating `Intl.NumberFormat` repeatedly inside formatting helpers (like `formatCurrency`) causes significant performance overhead (~100x slower) during frequent renders or loops.
**Action:** Always instantiate the formatter once at the module level and reuse it for formatting.
