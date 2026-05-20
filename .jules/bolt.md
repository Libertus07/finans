## 2024-05-20 - Intl Formatter Overhead
**Learning:** Instantiating `Intl.NumberFormat` and `Date().toLocaleDateString()` inside frequently called helper functions like `formatCurrency` and `formatDate` causes significant performance overhead during list rendering.
**Action:** Always cache `Intl` formatters at the module level and reuse them, ensuring invalid dates are explicitly handled with `isNaN(date)` to preserve fallback strings.
