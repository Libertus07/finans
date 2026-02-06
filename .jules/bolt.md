# Bolt's Journal

This journal tracks critical performance learnings and architectural insights for the `patron-finans` project.

## 2024-05-22 - [Initial Setup]
**Learning:** Project architecture uses `App.jsx` as a central state manager, which makes child components susceptible to re-renders.
**Action:** Focus on `React.memo` and stabilizing props (using `useCallback`) to prevent unnecessary updates.

## 2024-05-22 - [Sidebar Memoization]
**Learning:** `App.jsx` triggers re-renders for all children on every data snapshot (transactions, products, etc.). The `Sidebar` component, being static and present on all pages, re-renders unnecessarily 10+ times on load and on every update.
**Action:** Wrapped `Sidebar` in `React.memo` to isolate it from data updates. This is a high-leverage optimization for layout components in this architecture.
