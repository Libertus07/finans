## 2025-05-23 - Helper Functions in Component Body
**Learning:** Defining helper functions (like `getProfitabilityWarnings`) inside the component body creates a new reference on every render, which defeats `React.memo` optimizations in child components receiving these functions as props.
**Action:** Move helper functions outside the component if they don't depend on state/props, or wrap them in `useCallback` if they do. If they are unused, delete them.
