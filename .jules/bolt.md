## 2024-02-12 - Netlify Deployment and Routing
**Learning:** Deploying a Vite SPA from a subdirectory on Netlify requires specific configuration to handle routing and build context. `vite build --base=./` breaks client-side routing.
**Action:**
1. Use `netlify.toml` in the root with `base = "subdir"`, `publish = "dist"`, and `command = "npm run build"`.
2. Add `_redirects` file in `public/` with `/* /index.html 200`.
3. Ensure `vite.config.js` and build scripts do **not** use relative base paths (`./`) for production builds intended for root domain serving.
