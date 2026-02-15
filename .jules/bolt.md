## 2025-02-05 - Unstable Props Defeating Memoization
**Learning:** Helper functions defined inside component bodies (like `getProfitabilityWarnings` in `App.jsx`) return a new reference on every render. Passing these as props to child components (`Dashboard`) completely negates `React.memo` optimization, as the props are never referentially equal.
**Action:** Always define helper functions outside the component if they don't rely on state/props, or use `useCallback`. If the function is unused by the child, remove it from props entirely to allow `React.memo` to work.

## 2025-02-05 - Netlify Deployment Configuration
**Learning:** Vite's `base: './'` configuration breaks client-side routing on Netlify (refreshing a non-root route returns 404). Netlify requires a `_redirects` file with `/* /index.html 200` and `netlify.toml` to specify the build settings for nested projects (monorepos).
**Action:** Ensure `vite.config.js` or `package.json` does NOT use `--base=./` for Netlify deployments. Always include `netlify.toml` and `public/_redirects` for SPA routing.
