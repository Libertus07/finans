## 2024-03-20 - Unstable Props and React.memo
**Learning:** Defining helper functions inside parent components (like `App.jsx`) and passing them down as props defeats `React.memo` in child components because the function gets a new reference on every parent render. This is especially impactful in large, centrally-managed applications.
**Action:** When attempting to memoize components, also identify and remove or stabilize any unstable props (e.g., using `useCallback` or removing unused props entirely).
