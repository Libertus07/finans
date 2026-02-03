## 2025-02-03 - Unused Props Breaking Memoization
**Learning:** Defining helper functions inside the component body creates unstable references. If these are passed as props to children, they break `React.memo` optimization even if the child doesn't use the prop.
**Action:** Always check if a prop is actually used before optimizing. If unused, remove it. If used, use `useCallback` or move outside component. In this case, removing the unused `getProfitabilityWarnings` prop was key to enabling `Dashboard` memoization.
