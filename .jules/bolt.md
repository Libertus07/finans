## 2024-05-18 - Caching Intl Formatters and Invalid Date Handling
**Learning:** While caching `Intl.DateTimeFormat` instances yields a ~60x performance improvement over `toLocaleDateString`, they behave differently with invalid dates. `toLocaleDateString` gracefully returns 'Invalid Date', whereas `Intl.DateTimeFormat().format()` throws a `RangeError`.
**Action:** Always include an explicit `isNaN(date)` validity check when replacing `toLocaleDateString` with a cached `Intl.DateTimeFormat` instance to prevent crashing the application on malformed data.
