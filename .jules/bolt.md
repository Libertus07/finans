## 2025-03-01 - Cache Intl formatter instances to drastically improve formatting performance
**Learning:** Recreating `Intl.NumberFormat` and `Intl.DateTimeFormat` instances is extremely expensive in JavaScript. When placed inside utility functions that are called frequently (like during list rendering), it causes massive execution overhead.
**Action:** Always instantiate `Intl` formatters once at the module level and reuse them for a ~50-100x performance gain in execution time.
