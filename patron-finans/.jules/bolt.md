## 2026-01-19 - Unused Unstable Prop References
**Learning:** Helper functions defined inside component bodies (like `getProfitabilityWarnings` in `App.jsx`) create unstable references on every render. If passed as props, they force child components to re-render, even if the child uses `React.memo`. Worse, in this case, the prop was completely unused by the child!
**Action:** Always check if a prop is actually used. Define helper functions outside the component or use `useCallback`. Remove unused props to allow `React.memo` to work effectively.
