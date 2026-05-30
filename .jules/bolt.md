
## 2024-05-25 - Cached Intl Formatters
**Learning:** Instantiating `Intl.NumberFormat` and `Intl.DateTimeFormat` on every render or function call creates significant performance overhead, especially in list rendering.
**Action:** Instantiate `Intl` formatters at the module level once and reuse them. Ensure `isNaN` checks are added when converting native string formatting methods to `Intl.DateTimeFormat.format()` to handle invalid dates safely without throwing exceptions.
