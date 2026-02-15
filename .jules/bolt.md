## 2026-02-01 - Unstable Helper Functions & Intl Caching
**Learning:** Helper functions defined inside component bodies (like `App.jsx`) create unstable prop references that defeat `React.memo` in child components. Also, `Intl` formatters should be cached at module level to prevent performance overhead during frequent re-renders.
**Action:** Define helpers outside components, use `useCallback`, or remove if unused. Instantiate `Intl` formatters at module scope.
