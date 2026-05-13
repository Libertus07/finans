## 2024-05-13 - Cache Intl formatters for performance
**Learning:** Instantiating `Intl.NumberFormat` and `Intl.DateTimeFormat` on every function call causes significant performance overhead during frequent re-renders in React applications, especially when formatting lists of data.
**Action:** Always instantiate `Intl` formatters at the module level (cached) and reuse them. Remember to handle invalid dates explicitly when switching to `Intl.DateTimeFormat`.
