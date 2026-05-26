## 2024-05-26 - [Intl.NumberFormat Instantiation]
**Learning:** Repeatedly instantiating `Intl.NumberFormat` in formatting helpers (like `formatCurrency`) inside React renders causes significant overhead (up to ~100x slower per 10k calls).
**Action:** Always instantiate `Intl.NumberFormat` once outside the function scope and reuse the formatter instance for performance-critical helpers.
