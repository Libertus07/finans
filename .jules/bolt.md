# Bolt's Journal

## 2025-05-20 - Unstable Helper Functions in App.jsx
**Learning:** `App.jsx` acts as a central controller and defines helper functions (like `getProfitabilityWarnings`) inside the component body. These functions are recreated on every render and passed as props to children (like `Dashboard`). Even if the child component doesn't use the prop, or if other props are stable, this unstable reference forces re-renders unless the child is memoized AND the prop is removed/stabilized.
**Action:** When optimizing components in this architecture, check for helper functions defined in `App.jsx`. Move them outside the component if they don't depend on state, or wrap them in `useCallback`. If they are unused, remove them to stabilize props.
