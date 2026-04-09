## 2024-05-30 - Cached Intl formatters
**Learning:** Instantiating `Intl.NumberFormat` and `Intl.DateTimeFormat` on every render or function call is a known JavaScript performance bottleneck. Reusing a single instance provides a significant speedup, especially when processing arrays of data (e.g. lists of transactions) where the helper formatting functions are called repeatedly.
**Action:** Always instantiate `Intl.*` formatters at the module level or memoize them in React to avoid recreating them on every call.
