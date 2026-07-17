## 2024-07-17 - Caching Intl instances for formatters
**Learning:** Repeatedly instantiating `Intl.NumberFormat` and `Intl.DateTimeFormat` inside formatting helpers causes significant overhead during frequent renders or loops.
**Action:** Always instantiate the formatter once at the module level and reuse it. When migrating `toLocaleDateString()`, explicitly handle invalid dates (e.g., checking `isNaN(date)`) to avoid breaking exceptions.
