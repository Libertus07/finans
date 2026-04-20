## 2024-04-20 - Memoization of Formatters
**Learning:** Instantiating `Intl.NumberFormat` and `Intl.DateTimeFormat` repeatedly inside formatting functions causes significant performance overhead in React apps that re-render often.
**Action:** Extract these formatters to module-level instances so they are only initialized once.
