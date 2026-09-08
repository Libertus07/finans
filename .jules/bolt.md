## 2023-10-25 - [Performance] Intl objects instantiation is expensive
**Learning:** `new Intl.NumberFormat` and `new Date().toLocaleDateString()` are significantly expensive in JavaScript. Repeated calls in loops (like rendering lists of transactions) can cause UI blocking.
**Action:** Always cache `Intl.NumberFormat` and `Intl.DateTimeFormat` instances outside of format functions for a massive ~60-70x performance gain. When migrating from `toLocaleDateString` to `Intl.DateTimeFormat().format`, make sure to handle `Invalid Date` cases as `Intl.DateTimeFormat` throws an exception.
