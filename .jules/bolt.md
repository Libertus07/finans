## 2024-05-18 - Intl.DateTimeFormat Error Handling
**Learning:** When optimizing `new Date(...).toLocaleDateString()` to use a cached `Intl.DateTimeFormat` instance for performance, `toLocaleDateString` gracefully handles invalid dates by returning 'Invalid Date', whereas `Intl.DateTimeFormat().format(new Date('invalid'))` throws a `RangeError: Invalid time value`.
**Action:** Always add a date validity check (e.g., `isNaN(date)`) before formatting with a cached `Intl.DateTimeFormat` to preserve the original behavior and prevent application crashes.
