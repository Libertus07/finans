## 2024-06-18 - Caching Intl Formatters
**Learning:** Repeatedly instantiating `Intl.NumberFormat` or `Intl.DateTimeFormat` inside formatting helpers (like `formatCurrency` or `formatDate`) causes significant overhead during frequent renders or loops.
**Action:** Always instantiate the formatter once at the module level and reuse it for a ~50x-100x performance gain in execution time. Ensure to explicitly handle invalid dates (e.g., checking `isNaN(date)`) when migrating native string formatting methods like `new Date().toLocaleDateString()` to a cached `Intl.DateTimeFormat.format()` instance.
