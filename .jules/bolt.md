## 2025-02-14 - Cached Intl Formatters for Native Performance
**Learning:** Repeatedly instantiating `Intl.NumberFormat` and `Intl.DateTimeFormat` inside utility functions like `formatCurrency` and `formatDate` causes significant overhead (e.g., taking ~600-2000ms for 10k items instead of ~10-20ms).
**Action:** Always instantiate `Intl` formatters once at the module level and reuse them for formatting calls.
