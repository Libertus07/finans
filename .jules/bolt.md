## 2024-05-22 - Unstable Prop Preventing Memoization
**Learning:** Passing an unstable function reference (defined inside component body) to a child component prevents React.memo from working, even if other props are stable.
**Action:** Move function definitions outside component or use useCallback. If the function is unused by the child, remove it from props.
