## 2024-07-10 - Cache Intl Formatters
**Learning:** Repeatedly instantiating `Intl.NumberFormat` and `Intl.DateTimeFormat` inside utility functions like `formatCurrency` and `formatDate` causes significant overhead (up to ~55x slower) during frequent loop/render calls.
**Action:** Always instantiate `Intl` formatters once at the module level and reuse them across helper function invocations. Handle fallback cases explicitly (e.g., `isNaN(date)` for 'Invalid Date').
