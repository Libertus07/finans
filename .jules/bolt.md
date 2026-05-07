
## 2024-05-18 - Cached Intl Formatters
**Learning:** Instantiating `Intl.NumberFormat` or `Intl.DateTimeFormat` inside utility functions like `formatCurrency` creates significant performance overhead, especially in applications where these functions are called frequently inside mapping functions or chart renderers.
**Action:** Always instantiate `Intl` formatters at the module level and reuse them to prevent unnecessary memory allocation and speed up formatting during renders.
