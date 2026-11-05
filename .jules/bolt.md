## 2024-05-18 - Intl Formatter Bottleneck
**Learning:** Repeatedly instantiating `Intl.NumberFormat` and `Intl.DateTimeFormat` inside formatting functions causes significant performance bottlenecks when called repeatedly in React renders.
**Action:** Always extract and cache `Intl` formatters as module-level constants, and when caching `Intl.DateTimeFormat`, always include an explicit validity check (`isNaN(date)`) and return `'Invalid Date'` to handle invalid dates properly since it throws a `RangeError` otherwise.
