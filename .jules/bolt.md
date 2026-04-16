## 2024-04-16 - Prevent unnecessary Dashboard re-renders
**Learning:** Unstable function props like `getProfitabilityWarnings` defined inside `App.jsx` cause child components like `Dashboard` to re-render unnecessarily on every parent render cycle, even if the child is memoized.
**Action:** Always wrap function props defined in parent components with `useCallback` and ensure child components are wrapped in `React.memo` to prevent cascading re-renders.
