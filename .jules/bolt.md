
## 2025-03-04 - Cache Intl formatters for performance
**Learning:** Instantiating `Intl.NumberFormat` and `Intl.DateTimeFormat` on every format call inside frequently re-rendering components (like `Dashboard` and `Transactions`) creates unnecessary CPU overhead.
**Action:** Always instantiate `Intl` formatters at the module level (outside component bodies and utility functions) to cache the instances and reuse them for formatting.
