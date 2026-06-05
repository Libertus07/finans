## 2024-06-05 - Intl Object Instantiation Overhead
**Learning:** Repeatedly instantiating `Intl.NumberFormat` and `Intl.DateTimeFormat` inside formatting functions (like `formatCurrency` and `formatDate`) causes significant execution overhead (up to ~100x slower in benchmarks) because the instantiation is expensive.
**Action:** Always instantiate `Intl` formatting objects once at the module level and reuse them for formatting calls. Ensure invalid dates are handled safely with `.format()`.
