# Bolt's Journal

## 2026-01-27 - Unstable Prop References in App.jsx
**Learning:** Found another instance of the anti-pattern where helper functions defined in `App.jsx` (e.g., `getProfitabilityWarnings`) are passed to children, causing re-renders.
**Action:** Always wrap such functions in `useCallback` or move them outside the component, especially if passing to `React.memo` components.
