## 2024-05-24 - Cache Intl formatters
**Learning:** Repeatedly instantiating `Intl.NumberFormat` or using `new Date().toLocaleDateString()` inside frequent formatting helpers causes massive performance overhead (approx. 50-60x slower) during heavy rendering or loops.
**Action:** Instantiate `Intl.NumberFormat` and `Intl.DateTimeFormat` once at the module level and reuse them. Handle invalid dates gracefully to prevent breaking changes.
