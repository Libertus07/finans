## 2024-05-24 - Cache Intl formatters
**Learning:** Creating `Intl.NumberFormat` and `Intl.DateTimeFormat` instances on every function call (e.g., `formatCurrency`) adds unnecessary overhead, especially in applications that render many formatted values.
**Action:** Always cache `Intl` formatter instances at the module level rather than instantiating them inside the formatting function. Remember to handle invalid dates properly when replacing `toLocaleDateString` with `Intl.DateTimeFormat().format()`.
