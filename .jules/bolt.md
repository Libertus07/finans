## 2024-06-26 - Cached Intl formatters
**Learning:** Instantiating `Intl.NumberFormat` and calling `Date.toLocaleDateString()` inside utility functions causes significant overhead in rendering loops (takes ~60x and ~60x longer for 100k calls, respectively).
**Action:** Always instantiate `Intl` formatters once at the module level and reuse them for formatting functions. Ensure safety by checking `isNaN(date)` for dates.
