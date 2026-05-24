## 2024-05-24 - Unstable Function Props Breaking Lazy Loaded Components
**Learning:** In App.jsx, helper functions like `getProfitabilityWarnings` defined inline inside the component body create unstable prop references. This defeats memoization for lazily loaded child components like `Dashboard` which receive them as props.
**Action:** Always wrap helper functions passed to lazy-loaded or memoized components with `useCallback` to stabilize their reference.
