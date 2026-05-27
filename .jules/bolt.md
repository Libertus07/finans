## 2024-05-27 - Cached Intl formatters
**Learning:** Repeatedly instantiating `Intl.NumberFormat` inside formatting helpers causes significant overhead. Native string formatting methods like `Date.toLocaleDateString` can be safely migrated to a cached `Intl.DateTimeFormat.format()` instance by explicitly handling invalid dates.
**Action:** Always instantiate `Intl` formatters once at the module level and reuse them for performance gains.
