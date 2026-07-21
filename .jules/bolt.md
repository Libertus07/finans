## 2024-07-21 - Cache Intl Formatters
**Learning:** Repeatedly instantiating Intl.NumberFormat and Intl.DateTimeFormat inside helper functions causes significant overhead, taking ~40x to ~130x longer than using a cached instance.
**Action:** Always instantiate Intl formatters once at the module level and reuse them for better performance.
