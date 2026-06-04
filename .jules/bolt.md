## 2024-06-04 - Cache Intl Formatters for ~100x Performance Boost
**Learning:** Repeatedly instantiating `Intl.NumberFormat` and `Intl.DateTimeFormat` inside utility functions like `formatCurrency` and `formatDate` causes significant overhead (benchmarked at ~600ms vs ~9ms for 10k items).
**Action:** Always instantiate `Intl` formatters once at the module level and reuse them across function calls, especially in helpers that are frequently called in lists or render loops.
