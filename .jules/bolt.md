## 2024-05-18 - Intl Formatter Optimizations
**Learning:** Instantiating `Intl.NumberFormat` on every call to `formatCurrency` is slow, especially inside map loops or frequently rendered components.
**Action:** Cache the `Intl.NumberFormat` instance module-wide to avoid redundant instantiations.
