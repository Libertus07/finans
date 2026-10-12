## 2024-03-24 - Intl Formatter Initialization Bottleneck
**Learning:** Instantiating `Intl.NumberFormat` and `Date.prototype.toLocaleDateString` inside frequently called helper functions creates a significant performance bottleneck due to the high cost of locale initialization.
**Action:** Always extract `Intl.NumberFormat` and `Intl.DateTimeFormat` into module-level constants to reuse the formatter instances, verifying date validity since `Intl.DateTimeFormat.prototype.format` throws `RangeError` on invalid dates unlike `toLocaleDateString` which returns 'Invalid Date'.
