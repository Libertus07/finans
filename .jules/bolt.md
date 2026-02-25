## 2024-05-23 - Unstable Props Defeating Memoization
**Learning:** Helper functions defined inside the main `App` component body (e.g., `getProfitabilityWarnings`) create new references on every render. Passing these as props to heavy child components like `Dashboard` prevents `React.memo` from working effectively, even if the data they rely on hasn't changed.
**Action:** Move helper functions outside the component if they don't depend on state, or use `useCallback`. If the function is unused in the child, remove the prop entirely.
