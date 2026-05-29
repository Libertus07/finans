## 2024-05-20 - Intl Formatter Instantiation Overhead
**Learning:** Repeatedly instantiating `Intl.NumberFormat` or `Intl.DateTimeFormat` inside formatting helpers like `formatCurrency` or `formatDate` causes significant overhead during frequent renders or loops in React components.
**Action:** Always instantiate `Intl.*` formatters once at the module level and reuse the instances for better performance. For Date formatting, handle invalid dates explicitly when migrating to cached `Intl.DateTimeFormat` to avoid exceptions.
