## 2024-05-24 - Performance Optimization Edge Case (Intl.DateTimeFormat)
**Learning:** When refactoring `new Date(...).toLocaleDateString()` to use a cached `Intl.DateTimeFormat` instance for performance (~60x faster), `Intl.DateTimeFormat().format(new Date('invalid'))` throws a `RangeError: Invalid time value`, whereas `toLocaleDateString` gracefully handles it by returning "Invalid Date".
**Action:** Always add a date validity check (e.g., `isNaN(date)`) when implementing this optimization to preserve original functionality exactly and avoid runtime crashes.
