## 2025-02-12 - Cached Intl Formatters for Performance
**Learning:** Instantiating `Intl.NumberFormat` and `Intl.DateTimeFormat` (like `new Date().toLocaleDateString()`) inside commonly used utility functions (`formatCurrency`, `formatDate`) causes unnecessary memory and CPU overhead. These formatters are used extensively in lists and tables during frequent re-renders in this app.
**Action:** Always instantiate `Intl` formatters at the module level (caching) and reuse them within utility functions to prevent continuous re-instantiation overhead during component renders.
