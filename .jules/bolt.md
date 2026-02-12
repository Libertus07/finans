## 2024-02-12 - Dependency Noise Management
**Learning:** `npm install` in this environment generates significant noise in `package-lock.json` (removing peer dependencies), which can be flagged in code reviews.
**Action:** Always revert `package-lock.json` using `restore_file` if no dependencies were explicitly added, to keep PRs clean.

## 2024-02-12 - Unused Props Preventing Memoization
**Learning:** Helper functions defined in parent components and passed as props create new references on every render, defeating `React.memo` in children.
**Action:** Remove unused props if found, or use `useCallback` to stabilize functions before passing them to memoized components.
