
## 2026-10-09 - Intl Formatter Graceful Failure Edge Case
**Learning:** When refactoring `new Date(...).toLocaleDateString()` to use a cached `Intl.DateTimeFormat` instance for performance, `Intl.DateTimeFormat().format(new Date('invalid'))` throws a `RangeError: Invalid time value`, whereas `toLocaleDateString` gracefully handles it by returning 'Invalid Date'.
**Action:** Always add a date validity check (e.g., `isNaN(date) ? 'Invalid Date' : ...`) when implementing this optimization to preserve original fallback behavior.
