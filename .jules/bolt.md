## 2025-02-14 - Unused Prop Defeats Memoization
**Learning:** `Dashboard` component was receiving an unused prop `getProfitabilityWarnings`. This prop was a function defined in the parent component's body, meaning it was a new reference on every render. This completely defeated any potential `React.memo` optimization on the child component, even if the child didn't use the prop.
**Action:** Always check for unused props that are non-primitive (objects/functions) before applying `React.memo`. Remove them if unused, or memoize them with `useCallback`/`useMemo` if needed.
