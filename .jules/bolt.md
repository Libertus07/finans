## 2024-09-27 - [Format Optimizations]
**Learning:** Instantiating `Intl.NumberFormat` and `Intl.DateTimeFormat` inside utility functions that are called in loops or frequently across components leads to significant performance overhead (from ~5000-9000ms to <200ms when cached).
**Action:** Extract formatters to module-level constants to ensure they are created only once and reused. Added validation check for invalid dates to preserve graceful handling like `toLocaleDateString`.
