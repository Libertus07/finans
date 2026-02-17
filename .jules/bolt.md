# BOLT'S JOURNAL - PERFORMANCE LEARNINGS

## 2025-02-18 - [Anti-Pattern] Unstable Prop References in `App.jsx`
**Learning:** `App.jsx` defines helper functions like `getProfitabilityWarnings` inside the component body, creating new references on every render. This defeats `React.memo` optimization in child components like `Dashboard`.
**Action:** Always define helper functions outside the component, memoize them with `useCallback`, or remove them if unused (as done here).

## 2025-02-18 - [Deployment] Netlify SPA Configuration
**Learning:** SPA routing on Netlify requires a `_redirects` file with `/* /index.html 200` and a `netlify.toml` configuring the base directory and build command. Without these, deep links fail and builds may misconfigure paths.
**Action:** Ensure `netlify.toml` and `_redirects` are present for Netlify deployments from subdirectories.
