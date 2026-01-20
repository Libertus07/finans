## 2025-05-22 - Unstable Helper Functions in Render Scope
**Learning:** Defining helper functions (like `getProfitabilityWarnings`) directly inside the main component body (`App.jsx`) creates new function references on every render. Passing these as props to child components (`Dashboard`) defeats `React.memo` optimization, even if the data they depend on hasn't changed.
**Action:** Always move helper functions outside the component if they don't depend on state/props, or use `useCallback`. Check if the prop is actually used before optimizing; in this case, the unstable prop was dead code.
