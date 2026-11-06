## 2024-05-20 - Intl.DateTimeFormat Edge Case
**Learning:** `toLocaleDateString()` gracefully returns 'Invalid Date' for invalid dates, but `Intl.DateTimeFormat().format()` throws a `RangeError`.
**Action:** Always include an `isNaN(date)` validity check that returns the exact string 'Invalid Date' when caching `Intl.DateTimeFormat` instances to preserve existing fallback behavior exactly.
