## 2024-07-19 - Cache Intl formatter instances
**Learning:** Repeatedly instantiating `Intl.NumberFormat` and calling `toLocaleDateString` (which creates an internal formatter) inside formatting helpers causes significant overhead (up to ~100x slower) during frequent renders.
**Action:** Always instantiate `Intl.NumberFormat` and `Intl.DateTimeFormat` once at the module level and reuse them, ensuring to explicitly handle invalid dates (e.g., `isNaN(date)`) to preserve fallback strings.
