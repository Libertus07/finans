## 2025-02-28 - Caching Intl Formatters
**Learning:** Instantiating `new Intl.NumberFormat` and `new Intl.DateTimeFormat` inside utility functions like `formatCurrency` and `formatDate` that are called frequently during renders in React causes significant overhead (~100x slower than caching).
**Action:** Always extract `Intl` formatters into module-level constants to reuse them across calls. When doing this for `DateTimeFormat`, remember that it throws on invalid dates unlike `toLocaleDateString`, so add `isNaN(date)` checks if necessary.
