## 2024-08-25 - Cache Intl formatters
**Learning:** Repeatedly instantiating `Intl.NumberFormat` and `Intl.DateTimeFormat` inside formatting helpers like `formatCurrency` causes significant overhead during frequent renders or loops in React applications.
**Action:** Always instantiate the formatter once at the module level and reuse it to improve execution time, and add `isNaN(date)` validity check when caching `Intl.DateTimeFormat` to avoid `RangeError: Invalid time value`.
