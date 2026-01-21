## 2025-01-22 - Intl Formatter Caching
**Learning:** `Intl.NumberFormat` and `Intl.DateTimeFormat` were being instantiated on every render in helper functions (`formatCurrency`, `formatDate`), causing significant overhead in list components like `Transactions`.
**Action:** Cache these formatters at the module level in `utils/helpers.js` to reuse the instance.
