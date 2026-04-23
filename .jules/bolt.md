## 2025-02-19 - Intl Formatters Performance Overhead
**Learning:** Instantiating `Intl.NumberFormat` inside a frequently called function (`formatCurrency`) causes significant performance overhead (e.g. ~750ms vs ~13ms for 10k calls). Similarly, using `new Date().toLocaleDateString()` introduces high overhead due to underlying `Intl` instantiation.
**Action:** Cache `Intl` formatters at the module level and reuse them.
