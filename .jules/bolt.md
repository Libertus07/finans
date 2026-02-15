## 2025-05-18 - [Netlify Build Configuration]
**Learning:** For monorepo-style projects deployed from a subdirectory on Netlify, the `netlify.toml` file MUST be in the repository root and specify `base = "subdir"`. The `publish` directory is relative to this base (e.g., `publish = "dist"` inside `base` resolves to `subdir/dist`).
**Action:** Always check for `netlify.toml` in the root when troubleshooting deployment failures in subdirectory projects. Ensure `_redirects` exists in `public/` for SPA routing.
