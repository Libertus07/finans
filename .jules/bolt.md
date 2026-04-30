## 2024-04-30 - Cache Intl Formatters
**Learning:** `Intl.NumberFormat` and `Intl.DateTimeFormat` instantiation is highly expensive and blocking in JS/V8. Creating them repeatedly inside frequently called helper functions like `formatCurrency` during large list renders (like Transactions or Dashboard charts) causes massive unnecessary UI lag.
**Action:** Always extract and cache `Intl` formatters at the module scope when they are pure/static rather than instantiating inside formatting functions.
