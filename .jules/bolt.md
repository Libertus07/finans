## 2024-07-30 - Cache Intl.NumberFormat instances
**Learning:** Repeatedly instantiating `Intl.NumberFormat` inside formatting helpers causes significant overhead during frequent renders or loops.
**Action:** Always instantiate the formatter once at the module level and reuse it for a performance gain.
