## 2024-05-18 - Intl Formatter Bottleneck
**Learning:** Repeatedly instantiating `Intl.NumberFormat` and `Intl.DateTimeFormat` inside formatting functions causes significant performance bottlenecks when called repeatedly in React renders.
**Action:** Always extract and cache `Intl` formatters as module-level constants, and when caching `Intl.DateTimeFormat`, always include an explicit validity check (`isNaN(date)`) and return `'Invalid Date'` to handle invalid dates properly since it throws a `RangeError` otherwise.
## 2024-05-18 - Netlify Deploy Rules
**Learning:** Deploy failures on Netlify ("Pages changed", "Header rules", "Redirect rules") for a Vite project in a subdirectory occur when the `netlify.toml` and `_redirects` configurations are missing or incorrect.
**Action:** Always ensure `netlify.toml` at the repository root points to the correct base and build commands, and that `_redirects` exists in the `public` directory to handle SPA routing (`/* /index.html 200`).
