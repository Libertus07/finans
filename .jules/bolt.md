## 2025-02-23 - Intl Formatter Instantiation Overhead
**Learning:** Instantiating Intl.NumberFormat and calling toLocaleDateString repeatedly on every call is a significant performance bottleneck (about 50x slower than caching the formatter). Additionally, when caching Intl.DateTimeFormat, invalid dates throw a RangeError, unlike toLocaleDateString which gracefully returns 'Invalid Date'.
**Action:** Always cache Intl formatter instances outside of formatting functions, and remember to check isNaN(date) before calling format() to preserve existing graceful error handling.
