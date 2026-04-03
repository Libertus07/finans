
## 2025-02-14 - Intl Formatter Caching Strategy
**Learning:** Instantiating `Intl.NumberFormat` and `Intl.DateTimeFormat` inside utility functions like `formatCurrency` and `formatDate` causes expensive re-instantiations on every function call (and thus every render where they are used). Additionally, when caching `Intl.DateTimeFormat`, the fallback behavior for invalid dates changes, as passing an invalid `Date` to `format` throws a `RangeError`, whereas the native `toLocaleDateString` often gracefully fails or returns 'Invalid Date'.
**Action:** When migrating to module-level cached `Intl` formatters, always include an explicit `isNaN(date)` check inside the wrapper function to safely preserve graceful fallback behavior and prevent application crashes on invalid data.
