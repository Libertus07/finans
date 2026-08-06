## 2024-05-15 - Cached Intl Formatters
**Learning:** Repeatedly instantiating `Intl.NumberFormat` and `Intl.DateTimeFormat` inside formatting helpers causes significant overhead during frequent renders or loops. Also, caching `Intl.DateTimeFormat` requires a date validity check, as it throws an error on invalid dates unlike `toLocaleDateString`.
**Action:** Always instantiate formatters once at the module level and reuse them for a ~100x performance gain. Add an `isNaN(date)` check when formatting dates.
