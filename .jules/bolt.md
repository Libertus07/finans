## 2026-01-12 - Conditional Hooks in Async Components
**Learning:** Components like `Dashboard` that rely on async data (`stats`, `transactions`) often have an early return for loading state. Optimizing them with `useMemo` requires moving this check *after* the hooks to avoid "Rendered more hooks than during the previous render" errors. This necessitates adding null checks inside the hooks themselves.
**Action:** When memoizing a component with a loading guard, always move the guard below the hooks and ensure all hooks can handle `null` props gracefully.
