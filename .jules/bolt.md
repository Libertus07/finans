## 2024-05-24 - [Intl Formatter Instantiation Overhead]
**Learning:** `Intl` formatters (`NumberFormat`, `DateTimeFormat`) are surprisingly expensive to instantiate. When placed inside simple helper functions (like `formatCurrency`) that are called hundreds of times per render (e.g., in lists or Recharts charts), this instantiation overhead can cause significant main thread blocking and drop frame rates.
**Action:** Always instantiate `Intl` objects at the module level (cache them) and reuse them instead of creating `new Intl.NumberFormat()` inside functions that execute frequently.
