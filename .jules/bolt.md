## 2024-05-20 - Intl formatter instantiation overhead

**Learning:** Instantiating `Intl.NumberFormat` and `Intl.DateTimeFormat` inside loop or frequently called format functions introduces significant performance overhead (e.g. ~970ms vs ~10ms for 10K operations). Also, `Intl.DateTimeFormat().format()` throws a `RangeError` on invalid dates while `Date.prototype.toLocaleDateString()` safely returns 'Invalid Date'.
**Action:** Cache `Intl` formatter instances at module level when possible. Always handle invalid dates (e.g. using `isNaN(date)`) before passing to `Intl.DateTimeFormat.prototype.format()` to avoid exceptions and preserve original behavior.
