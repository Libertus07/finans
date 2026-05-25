## 2024-05-25 - Unstable Props Defeating Memoization
**Learning:** Helper functions defined inside component bodies (like `App.jsx`) create unstable prop references that defeat `React.memo` in lazily loaded child components like `Dashboard`. Even if the child component doesn't use the prop, the unstable reference breaks memoization and causes heavy re-renders.
**Action:** Always wrap function props in `useCallback` when passing them to heavy or memoized child components, and ensure those child components are wrapped in `React.memo`.
