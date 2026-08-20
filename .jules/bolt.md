## 2025-02-23 - Cached Intl Formatter Optimization
**Learning:** Repeatedly instantiating `Intl.NumberFormat` or `Intl.DateTimeFormat` inside formatting helpers causes significant overhead, particularly in lists or loops.
**Action:** Always instantiate `Intl.*` formatters once at the module level and reuse them to improve execution time significantly.
