## 2024-05-18 - Stabilizing Props for Component Memoization
**Learning:** Helper functions defined inside parent components (like App.jsx) create unstable function references. Passing these down as props defeats React.memo in child components (like Dashboard), even if the child doesn't actively use the prop.
**Action:** Always wrap helper functions passed as props in useCallback, and eagerly apply React.memo to heavy components like Dashboard to protect them from root state changes.
