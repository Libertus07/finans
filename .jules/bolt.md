## 2024-05-20 - [Performance Optimization: Intl Formatters]
**Learning:** Instantiating `Intl.NumberFormat` and `Intl.DateTimeFormat` inside loop or frequently called format functions (like `formatCurrency` and `formatDate`) is very expensive. Caching these instances dramatically improves performance. Also noted: `toLocaleDateString` gracefully handles invalid dates, while `Intl.DateTimeFormat().format(new Date('invalid'))` throws a RangeError, so caching date formatters requires an `isNaN(date)` validity check.
**Action:** Always cache `Intl` formatter instances instead of creating them dynamically per call, and when optimizing date formatters, ensure you preserve invalid date fallback behavior.
## 2024-05-20 - [Netlify Configuration]
**Learning:** Netlify deployments fail with "Pages changed", "Header rules", or "Redirect rules" for Vite projects in a subdirectory if `netlify.toml` and `_redirects` are missing.
**Action:** Always add a `netlify.toml` file at the root to configure the build base, command, and publish directory, and include a `_redirects` file in the public directory to handle single-page application routing.
