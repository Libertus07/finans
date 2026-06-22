
## 2025-06-22 - Cached Intl Formatters
**Learning:** Instantiating `Intl.NumberFormat` and `Intl.DateTimeFormat` inside utility functions like `formatCurrency` and `formatDate` introduces massive overhead (e.g., ~5500ms down to ~90ms for 100k calls). However, simply replacing `toLocaleDateString` with a cached `DateTimeFormat` introduces a hidden edge case: `toLocaleDateString` returns "Invalid Date" for invalid inputs, but `DateTimeFormat.format()` throws a `RangeError`.
**Action:** When migrating native string formatting methods to cached `Intl` formatters, explicitly handle invalid dates (e.g., `isNaN(date) ? 'Invalid Date' : formatter.format(date)`) to avoid breaking exceptions while preserving fallback strings.
