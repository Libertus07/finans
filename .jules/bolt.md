## 2025-04-06 - Accidental lockfile churn via missing dependencies
**Learning:** If running `npm run lint` or `npm run build` fails because of missing dependencies like `@eslint/js`, running `npm install` can introduce massive unintended changes to `package-lock.json` if the node/npm version is different.
**Action:** When a command fails due to missing dependencies, and `npm install` must be run to fix it, carefully review `git status` afterwards and restore any unintended changes to the lockfile (e.g. `git restore package-lock.json`) before committing.
