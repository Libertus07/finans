## 2025-01-27 - Unused Props Breaking Memoization
**Learning:** Defining helper functions inside parent components (like `App.jsx`) and passing them to children creates unstable references that break `React.memo` optimizations, even if the child component doesn't use the prop.
**Action:** Always verify if a prop is stable before optimizing a child component. Remove unused props or memoize them with `useCallback` if they must be passed.

## 2025-01-27 - Linting and Build Stability
**Learning:** CI pipelines may treat lint warnings as fatal errors. Always ensure `npm run lint` passes with zero errors before submitting, even if local builds pass.
**Action:** Fix all lint errors, including unused variables and hook dependencies, to ensure CI stability.

## 2025-01-27 - Netlify Deployment Configuration
**Learning:** Netlify deployment for subdirectories requires a root `netlify.toml` with `base` config. `vite.config.js` and `package.json` must NOT use `base: './'` for client-side routing to work with redirects.
**Action:** Always verify `netlify.toml` and `base` paths when deploying SPAs from subdirectories.
