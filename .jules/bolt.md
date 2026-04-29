## 2024-10-24 - Cached Intl Formatters
**Learning:** Frequent instantiations of `Intl.NumberFormat` and `Date.toLocaleDateString` in rendering loops can create significant overhead in React applications, especially when formatting long lists of transactions or displaying charts.
**Action:** When migrating from `new Date().toLocaleDateString()` to a cached `Intl.DateTimeFormat.format()` instance, explicitly handle invalid dates (e.g., checking `isNaN(date.getTime())`) to preserve fallback strings like "Invalid Date" and avoid breaking exceptions that crash the application.
