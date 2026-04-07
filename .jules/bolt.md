## 2025-02-12 - Cached Intl Formatters for Native Dates and Currency
**Learning:** Instantiating `Intl.NumberFormat` and `Intl.DateTimeFormat` dynamically within helper functions called during every render is highly inefficient and creates an unnecessary bottleneck.
**Action:** Lift `Intl` formatter instantiations to module-level cached instances and explicitly handle `Invalid Date` cases natively (e.g. `isNaN(date)`) so that behavior does not break compared to simple `.toLocaleDateString()` implementations.
