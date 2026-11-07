## 2024-05-18 - Caching Intl Formatters
**Learning:** Instantiating `Intl.NumberFormat` and `Intl.DateTimeFormat` inside formatting functions causes significant performance bottlenecks when called repeatedly during React renders (e.g., lists or charts).
**Action:** Always extract and cache `Intl` formatters as module-level constants. For dates, remember to add an `isNaN(date)` validity check to gracefully fallback to 'Invalid Date', as `Intl.DateTimeFormat` throws on invalid dates unlike `toLocaleDateString`.
