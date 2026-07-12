## 2025-02-12 - Cache Intl formatters for performance
**Learning:** Repeatedly instantiating Intl.NumberFormat and Intl.DateTimeFormat inside helpers causes significant overhead, taking ~50x-100x longer than using a cached instance. This is especially impactful in high-frequency renders or loops.
**Action:** Always instantiate formatters once at the module level and reuse them for formatting functions.
