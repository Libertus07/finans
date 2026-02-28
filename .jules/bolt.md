## 2025-02-28 - Intl Module Instantiation Inside Components Causes Overhead
**Learning:** Instantiating `Intl.NumberFormat` and `Intl.DateTimeFormat` within render cycles (e.g. inside helper functions called during render loops) causes performance overhead due to the expense of creating these objects.
**Action:** Always instantiate `Intl` formatters at the module level (cache them) and reuse them within formatting functions.
