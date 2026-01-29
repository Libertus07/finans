## 2025-02-18 - CI/CD Deployment and Linting
**Learning:** Netlify deployments for SPA require explicit redirect configuration (`_redirects` or `netlify.toml`) to handle client-side routing, even if the app uses state-based routing. Without `/* /index.html 200`, deep links or refreshes may fail, and CI checks for "Redirect rules" will fail.
**Action:** Always include a `_redirects` file in `public/` for Vite/React projects deploying to Netlify.

**Learning:** `React.useEffect` warnings about setting state (like `react-hooks/set-state-in-effect`) can often be resolved by moving the state logic to the event handler that triggers the change (e.g., login handler) rather than reacting to the state change in an effect. This is more performant and cleaner.
**Action:** Refactor effects that update state immediately after a dependency change to update that state in the originating event handler instead.
