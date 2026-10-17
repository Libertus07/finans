## 2024-05-18 - [Cache Intl instances for performance]
**Learning:** Instantiating `Intl.NumberFormat` repeatedly inside a function like `formatCurrency` that is called multiple times per render (e.g., in lists or dashboard charts) is a known performance bottleneck in JS.
**Action:** Extract `Intl.NumberFormat` instances to module scope constants to reuse them. For `Intl.DateTimeFormat`, remember that it throws `RangeError: Invalid time value` if the date is invalid, so always check validity first.
