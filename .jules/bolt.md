## 2024-09-10 - Caching Intl Formatters
**Learning:** Instantiating Intl.NumberFormat and Intl.DateTimeFormat on every function call (which happens frequently during renders) is computationally expensive.
**Action:** Extract Intl formatters into module-level constants and reuse them to improve performance.
