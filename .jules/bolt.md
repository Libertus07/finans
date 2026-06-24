## 2026-06-24 - Caching formatters
**Learning:** Instantiating new Intl.NumberFormat and Intl.DateTimeFormat objects frequently in React helpers creates significant overhead during renders.
**Action:** Always extract Intl formatter instantiation outside of helper functions or loops so the cached instance is reused.
