# Bolt's Journal

## 2025-02-18 - [Sidebar Re-renders]
**Learning:** `App.jsx` acts as a central state manager fetching all data (transactions, products, etc.). This causes frequent re-renders of the root component. Child components like `Sidebar`, which depend only on navigation state, are re-rendered unnecessarily on every data update because they lack `React.memo`.
**Action:** Always wrap static navigation components in `React.memo` when the parent component manages high-frequency data updates.
