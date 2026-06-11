## 2024-06-11 - Optimize NumberFormat Instantiation
**Learning:** Instantiating `Intl.NumberFormat` and `Intl.DateTimeFormat` inside utility functions like `formatCurrency` and `formatDate` causes significant performance overhead (~50x slower) when rendering large lists of transactions or products.
**Action:** Always instantiate formatters once at the module level and reuse them for formatting instead of recreating them on every call.
