
## 2024-07-14 - Cache Intl formatters for performance
**Learning:** Instantiating `Intl.NumberFormat` and `Intl.DateTimeFormat` dynamically inside formatting helpers (like `formatCurrency`) causes significant overhead during frequent renders or loops.
**Action:** Always instantiate the formatter once at the module level and reuse it for a ~50x - 100x performance gain in execution time. When migrating native date formatting to a cached `Intl.DateTimeFormat.format()` instance, explicitly handle invalid dates (e.g., checking `isNaN(date)`) to preserve fallback strings and avoid exceptions.
