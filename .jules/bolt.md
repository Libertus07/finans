## 2024-06-07 - Cached Intl Formatters Overhead
**Learning:** Instantiating `Intl.NumberFormat` and calling `toLocaleDateString()` inside utility functions used in React render loops causes a massive performance overhead (taking ~700ms for 10K calls compared to ~10ms for a cached instance).
**Action:** Always instantiate `Intl` formatters once at the module level and reuse them for formatting functions.
