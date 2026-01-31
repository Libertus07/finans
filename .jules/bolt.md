## 2025-01-30 - Helper Functions Breaking Memoization
**Learning:** Defining helper functions like `getProfitabilityWarnings` inside the component body creates new references on every render. Passing these as props to child components (like `Dashboard`) defeats `React.memo`, causing unnecessary re-renders even if data hasn't changed.
**Action:** Move helper functions outside the component, memoize them with `useCallback`, or remove them if unused before attempting to memoize children.
