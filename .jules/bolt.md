
## 2024-10-25 - Caching Intl formatters
**Learning:** Repeatedly instantiating `Intl.NumberFormat` and `Intl.DateTimeFormat` inside formatting functions is a significant performance bottleneck, reducing performance by ~60x compared to cached versions. `Intl.DateTimeFormat().format(new Date('invalid'))` throws an error, so a validity check (`isNaN(date)`) must be added when migrating from `toLocaleDateString`.
**Action:** Always extract and cache `Intl` formatters as module-level constants instead of inline instantiation, and remember to add date validity checks for `DateTimeFormat`.
