## 2025-02-28 - Cached Intl Formatters
**Learning:** Frequent instantiations of `Intl.NumberFormat` and `Intl.DateTimeFormat` inside helper functions that are called on every list render (like transactions or tables) causes significant React rendering overhead.
**Action:** Always instantiate `Intl` formatters at the module level to cache them and reuse them across renders to improve performance, while making sure to handle edge cases like invalid dates appropriately.
