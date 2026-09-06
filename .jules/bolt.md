## 2024-05-24 - [Intl Formatter Caching]
**Learning:** `toLocaleDateString` silently handles invalid dates returning 'Invalid Date', but cached `Intl.DateTimeFormat().format()` throws a `RangeError`.
**Action:** When caching date formatters for performance, always explicitly check for validity (e.g., `isNaN(date)`) and return the exact original fallback string to avoid regressions.
