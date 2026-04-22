## 2024-05-24 - Intl Formatters Performance Optimization
**Learning:** Instantiating `Intl.NumberFormat` and `Intl.DateTimeFormat` inside utility functions like `formatCurrency` creates a new instance on every call. This is a massive performance bottleneck in React apps that render thousands of formatted numbers/dates across dashboards, tables, and lists.
**Action:** Always cache `Intl` formatter instances at the module level and reuse them.
