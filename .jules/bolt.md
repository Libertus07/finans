## 2025-02-18 - Unstable Props Defeating Memoization
**Learning:** Helper functions defined inside component bodies (like `App.jsx`) create new references on every render. Passing these as props to child components defeats `React.memo` optimizations, causing unnecessary re-renders of heavy components even when their data hasn't changed.
**Action:** Define helper functions outside the component body if they don't depend on state/props, or use `useCallback` if they do. If unused, remove them entirely to prevent phantom re-renders.
