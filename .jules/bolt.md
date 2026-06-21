## 2024-06-21 - Cache Intl formatters for ~100x speedup
**Learning:** Repeatedly instantiating `Intl.NumberFormat` or using `toLocaleDateString` inside formatting helpers causes significant overhead during frequent renders or loops.
**Action:** Always instantiate `Intl` formatters once at the module level and reuse them for a massive performance gain in execution time. Ensure to handle invalid dates properly to preserve fallback strings.
