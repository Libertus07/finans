## 2024-05-24 - Intl Formatters Overhead
**Learning:** Re-instantiating `Intl.NumberFormat` and `Intl.DateTimeFormat` on every function call (e.g., inside map loops during render) is a massive performance bottleneck, taking ~10x-50x longer than using a cached instance.
**Action:** Always instantiate `Intl` formatters at the module level and reuse them for formatting operations across the app.
