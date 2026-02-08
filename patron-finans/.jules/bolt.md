## 2026-02-08 - Sidebar Unnecessary Re-renders
**Learning:** `App.jsx` acts as a central state manager fetching all business data (products, transactions, stats). This architecture makes child components highly susceptible to re-renders on *any* data change.
**Action:** Use `React.memo` aggressively for static UI components like `Sidebar` that are direct children of `App.jsx` but don't depend on the volatile data.
