## 2024-07-31 - Cache Intl.NumberFormat
**Learning:** Repeatedly instantiating Intl.NumberFormat inside formatting helpers causes significant overhead. Always instantiate the formatter once at the module level.
**Action:** Instantiate the formatter at the module level and reuse it for performance gain.
