## 2024-10-26 - Format Optimization
**Learning:** Repeatedly instantiating `Intl.NumberFormat` and `Intl.DateTimeFormat` is a huge performance hit (approx 50x slower for currency and 45x for date) especially when they are called constantly on renders like in charts or tables.
**Action:** Always extract and cache `Intl.*` formatters as module-level constants. Note that `Intl.DateTimeFormat().format()` throws on invalid dates whereas `toLocaleDateString()` returns "Invalid Date", so always include a validity check (e.g. `isNaN(date)`) when refactoring `toLocaleDateString()`.
