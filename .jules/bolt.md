## 2024-05-17 - Caching Intl Formatters
**Learning:** Instantiating `Intl.NumberFormat` and `toLocaleDateString` (which creates an implicit Intl.DateTimeFormat instance) inside frequently called utility functions like `formatCurrency` causes significant performance overhead during list rendering, as they are re-created for every item.
**Action:** Always cache `Intl` formatters at the module level and reuse them. Explicitly handle invalid dates when migrating `toLocaleDateString` to `Intl.DateTimeFormat.format()` to preserve fallback strings and avoid breaking exceptions.
