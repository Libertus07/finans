## 2025-01-01 - Intl.DateTimeFormat Invalid Date Edge Case
**Learning:** `new Date('invalid').toLocaleDateString()` gracefully returns "Invalid Date", but `Intl.DateTimeFormat().format(new Date('invalid'))` throws a RangeError.
**Action:** When caching `Intl.DateTimeFormat` to replace `toLocaleDateString()`, always add an explicit `isNaN(date)` check and fallback to "Invalid Date" to preserve the original behavior exactly.
