## 2024-07-15 - Intl.NumberFormat and Intl.DateTimeFormat instantiation overhead
**Learning:** Repeatedly instantiating `Intl.NumberFormat` and `toLocaleDateString` (which instantiates `Intl.DateTimeFormat` under the hood) causes significant overhead during frequent loops and renders.
**Action:** Always instantiate the formatter once at the module level and reuse it for a ~100x performance gain in execution time.
