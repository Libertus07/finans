## 2024-05-30 - Intl Formatters Overhead
**Learning:** Repeatedly instantiating `Intl.NumberFormat` and `Intl.DateTimeFormat` inside utility functions (like `formatCurrency` and `formatDate`) causes significant execution overhead during frequent React component renders and loops, especially in dashboards aggregating many records.
**Action:** Always instantiate `Intl.*` objects once at the module level and reuse them to achieve a substantial performance boost. Explicitly handle `isNaN` for dates when migrating to `Intl.DateTimeFormat` to avoid runtime crashes on invalid inputs.
