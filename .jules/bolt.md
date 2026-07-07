## 2026-07-07 - Cache Intl formatters for performance
**Learning:** Repeatedly instantiating Intl.NumberFormat inside formatting helpers (like formatCurrency) causes significant overhead during frequent renders or loops.
**Action:** Always instantiate the formatter once at the module level and reuse it. Ensure invalid dates are handled when migrating native string formatting methods like new Date().toLocaleDateString() to a cached Intl.DateTimeFormat.format() instance.
