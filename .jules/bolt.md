## 2024-05-01 - Unstable Props and React.memo in App.jsx
**Learning:** The central state manager (`App.jsx`) passes helper functions like `getProfitabilityWarnings` to lazily loaded child components like `Dashboard`. These functions are un-memoized and create unstable prop references, breaking any memoization on the child components even if the props are not actively used by the child.
**Action:** Stabilize all function props passed from `App.jsx` using `useCallback` before applying `React.memo` to child components to ensure rendering efficiency.
