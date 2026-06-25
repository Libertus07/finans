## 2024-06-25 - Intl.NumberFormat and Intl.DateTimeFormat caching
**Learning:** Instantiating `Intl.NumberFormat` and `Date.toLocaleDateString()` (which uses `Intl.DateTimeFormat` under the hood) on every call in utility functions (like `formatCurrency` and `formatDate`) creates significant overhead, especially in a dashboard that formats hundreds of transaction rows.
**Action:** Always instantiate `Intl` formatters once at the module level and reuse them. Make sure to check for invalid dates when switching from `toLocaleDateString` to a cached `Intl.DateTimeFormat` instance.
