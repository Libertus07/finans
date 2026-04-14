
## 2024-04-14 - Dashboard Re-render Bottleneck
**Learning:** Helper functions defined inside `App.jsx` without `useCallback` pass unstable references to child components like the heavy `Dashboard`, defeating `React.memo` and causing cascading re-renders on unrelated state changes (like mobile menu toggles).
**Action:** Always wrap helper functions passed as props to lazy-loaded or heavy child components in `useCallback` and memoize the child component.
