## 2026-04-02 - Caching Intl Formatters
**Learning:** Native `Intl.NumberFormat` and `Date.prototype.toLocaleDateString` instantiations inside render or frequently called helper methods cause significant performance overhead. Caching these formatters at the module level avoids creating new objects on every render cycle.
**Action:** Always instantiate `Intl` formatters at the module level and reuse them in helper functions or components. Remember to explicitly handle invalid dates (e.g., checking `isNaN(date)`) to preserve fallback strings like 'Invalid Date' and avoid breaking exceptions.
