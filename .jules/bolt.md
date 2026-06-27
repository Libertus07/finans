## 2023-06-27 - Caching Intl.NumberFormat and Intl.DateTimeFormat
**Learning:** Reinstantiating `Intl.NumberFormat` and `Intl.DateTimeFormat` inside utility functions like `formatCurrency` and `formatDate` causes significant overhead (up to ~70x slower), especially when formatting large lists of data or components that render frequently.
**Action:** Always instantiate `Intl` formatters once at the module level and reuse them for formatting functions.
