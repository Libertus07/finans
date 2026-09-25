## 2024-09-25 - Intl.DateTimeFormat Invalid Date Handling
**Learning:** When refactoring `new Date(...).toLocaleDateString()` to use a cached `Intl.DateTimeFormat` instance for performance, note that `Intl.DateTimeFormat().format(new Date('invalid'))` throws a `RangeError: Invalid time value`, whereas `toLocaleDateString` gracefully returns 'Invalid Date'.
**Action:** Always add a date validity check (e.g., `isNaN(date)`) when implementing this optimization to avoid runtime crashes.
