## 2024-05-20 - Intl Formatters Overhead
**Learning:** Instantiating `Intl.NumberFormat` and `Intl.DateTimeFormat` inside frequently called utility functions (like `formatCurrency`) causes massive performance overhead (e.g. ~5000ms vs ~100ms for 100k calls).
**Action:** Always cache `Intl` formatter instances outside the formatting function to avoid re-instantiation overhead on every call.
