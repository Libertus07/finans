## 2025-10-02 - [Formatters Cache Initialization]
**Learning:** Instantiating `Intl.NumberFormat` and `Date.prototype.toLocaleDateString` inside frequently called helper functions like `formatCurrency` and `formatDate` introduces significant performance overhead (tested as ~60x slower for NumberFormat and ~40x slower for DateTimeFormat in a loop).
**Action:** Always cache instances of `Intl.NumberFormat` and `Intl.DateTimeFormat` at the module level when used in utility functions that are called repeatedly during renders (e.g., mapping over tables, investments, or transactions).
