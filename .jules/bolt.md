
## 2024-05-03 - Cache Intl Formatters
**Learning:** Re-instantiating Intl formatters (like NumberFormat and DateTimeFormat) inside helper functions that are called frequently during renders (e.g., formatCurrency called 70+ times) causes significant CPU overhead. These native formatters are expensive to initialize.
**Action:** Always instantiate Intl formatters once at the module level and reuse the cached instances in helper functions. When caching DateTimeFormat, ensure explicit checks for invalid dates to maintain fallback behavior without throwing exceptions.
