## 2025-05-18 - [React.memo and Unused Unstable Props]
**Learning:** Defining helper functions inside component bodies (like `App.jsx`) and passing them as props creates unstable references that break `React.memo` in child components. Even worse, if these props are unused in the child, they silently kill performance without purpose.
**Action:** Always identifying and removing unused props before applying `React.memo`. Move helper functions outside the component or memoize them with `useCallback` only if they are actually needed.
