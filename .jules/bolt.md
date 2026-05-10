## 2024-05-10 - Cache Intl Formatters
**Learning:** Re-instantiating `Intl.NumberFormat` inside frequently called helper functions (e.g., `formatCurrency`) causes unnecessary performance overhead, especially when used in loops or frequently re-rendered components.
**Action:** Always cache `Intl` formatters at the module level and reuse the instance to prevent performance overhead.
