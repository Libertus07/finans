## 2025-02-18 - Unstable Props Defeating Memoization
**Learning:** Helper functions defined inside component bodies (like `App.jsx`) creating new references on every render, causing child components (like `Dashboard`) to re-render even if they are memoized.
**Action:** Move helper functions outside the component or wrap them in `useCallback` before passing them as props. If unused, remove them.
