## 2026-04-11 - Cached Intl Formatters
**Learning:** Instantiating new Intl formatters inside render-heavy utility functions creates unnecessary memory overhead and slows down renders.
**Action:** Always instantiate Intl formatters at the module level and reuse them, and handle invalid dates safely when migrating from toLocaleDateString.
