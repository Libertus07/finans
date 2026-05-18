## 2024-05-14 - Stabilizing Props for Lazily Loaded Components
**Learning:** In this architecture, lazily loaded child components like Dashboard receive unstable function props (e.g., `getProfitabilityWarnings` defined in `App.jsx`), which breaks `React.memo` and causes unnecessary re-renders when unrelated parent states change.
**Action:** Always use `useCallback` to memoize helper functions passed as props to child components, and wrap the child component in `React.memo()` to effectively prevent cascading re-renders.
