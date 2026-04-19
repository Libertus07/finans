## 2024-05-24 - Intl Formatters Overhead
**Learning:** Re-instantiating `Intl.NumberFormat` and `Intl.DateTimeFormat` on every function call (e.g., inside map loops during render) is a massive performance bottleneck, taking ~10x-50x longer than using a cached instance.
**Action:** Always instantiate `Intl` formatters at the module level and reuse them for formatting operations across the app.

## 2024-05-24 - Netlify Deployment in Subdirectory
**Learning:** Netlify deployments fail when the project is in a subdirectory (like `patron-finans/`) and Vite is configured with `base: './'`. This causes CI check failures for "Pages changed", "Header rules", and "Redirect rules".
**Action:** Resolve by creating a `netlify.toml` file at the repository root that overrides the build config (`base = "patron-finans"`, `publish = "dist"`) and adding a `_redirects` file (`/* /index.html 200`) in `patron-finans/public/` for SPA routing.
