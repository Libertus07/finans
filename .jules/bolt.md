## 2024-09-09 - Intl.DateTimeFormat Edge Case
**Learning:** When refactoring `new Date(...).toLocaleDateString()` to use a cached `Intl.DateTimeFormat` instance for performance, `Intl.DateTimeFormat().format(new Date('invalid'))` throws a `RangeError: Invalid time value`, whereas `toLocaleDateString` gracefully handles it by returning `'Invalid Date'`.
**Action:** Always add a date validity check (e.g., `isNaN(date)`) and explicitly return the exact same fallback string when implementing `Intl.DateTimeFormat` caching optimizations.
