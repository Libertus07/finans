## 2025-01-31 - Unstable Props Defeating Memoization
**Learning:** Helper functions defined inside component bodies (e.g., `getProfitabilityWarnings` in `App.jsx`) create new references on every render. Passing these as props to child components (like `Dashboard`) defeats `React.memo` optimization, causing unnecessary re-renders of heavy components.
**Action:** Move helper functions outside the component, wrap them in `useCallback`, or remove them if unused (as done with `getProfitabilityWarnings`). Always verify prop stability when applying `React.memo`.
