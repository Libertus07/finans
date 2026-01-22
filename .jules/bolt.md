# Bolt's Journal

## 2025-05-22 - Unstable Unused Props Breaking Memoization
**Learning:** I discovered that an unused helper function `getProfitabilityWarnings` was defined inside the `App` component and passed to `Dashboard`. Since it was defined inside the render scope, it was a new reference on every render. Even though `Dashboard` didn't use it, passing this unstable prop would have prevented `React.memo` from working effectively.
**Action:** Always check for unused props and inline function definitions before attempting to memoize a component. Remove unused unstable props to ensure memoization works as intended.
