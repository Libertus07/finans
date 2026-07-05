## 2025-07-05 - Intl Formatters Overhead
**Learning:** Instantiating `Intl.NumberFormat` and `Date.toLocaleDateString` on every render causes significant overhead (up to ~1ms per call) which bottlenecks list rendering.
**Action:** Cache these formatters at the module level and reuse the `.format()` method. This speeds up formatting by ~50-100x.
