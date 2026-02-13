## 2025-01-27 - Unused Props Breaking Memoization
**Learning:** Defining helper functions inside parent components (like `App.jsx`) and passing them to children creates unstable references that break `React.memo` optimizations, even if the child component doesn't use the prop.
**Action:** Always verify if a prop is stable before optimizing a child component. Remove unused props or memoize them with `useCallback` if they must be passed.
