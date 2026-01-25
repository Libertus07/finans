## 2026-01-25 - Cached Intl Formatters
**Learning:** Instantiating `Intl.NumberFormat` and `Intl.DateTimeFormat` inside frequently called functions (like render loops) creates significant overhead.
**Action:** Always instantiate formatters at the module level (global scope) in helper files to ensure they are created only once and reused.
