## 2025-02-13 - Re-render Optimizations: Safe Prop Stabilization
**Learning:** Functions defined inline within `App.jsx` act as unstable props and break `React.memo` for child components. Deleting these "unused" functions entirely is dangerous and can lead to feature regressions.
**Action:** Always prefer stabilizing prop references via `useCallback` or extracting them outside the component body rather than deleting them, unless you are 100% certain the code is dead and safely removable. Verify functionality explicitly after any "cleanup" optimizations.
