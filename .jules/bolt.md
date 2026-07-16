## 2024-07-16 - Cache Intl Formatters for Performance
**Learning:** Repeatedly instantiating `Intl.NumberFormat` inside formatting helpers (like `formatCurrency`) causes significant overhead during frequent renders or loops.
**Action:** Always instantiate the formatter once at the module level and reuse it for better performance in execution time.
