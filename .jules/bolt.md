## 2025-06-20 - Memoizing Intl formatter instances in helpers
**Learning:** Repeatedly instantiating `Intl.NumberFormat` and `Intl.DateTimeFormat` inside utility functions like `formatCurrency` and `formatDate` causes significant overhead (up to ~100x slower) during frequent renders or loops.
**Action:** Always instantiate `Intl` formatters once at the module level and reuse them, ensuring invalid dates are explicitly handled (e.g., checking `isNaN(date)`) to preserve fallback strings.
