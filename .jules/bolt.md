## 2025-07-03 - Cache Intl Formatters for Performance
**Learning:** Repeatedly instantiating `Intl.NumberFormat` and `Intl.DateTimeFormat` inside utility functions like `formatCurrency` causes massive performance overhead during frequent renders or loops (~50x-90x slower).
**Action:** Always instantiate `Intl` formatters once at the module level and reuse them for significant performance gains, ensuring to handle invalid dates properly when dealing with `Intl.DateTimeFormat`.
