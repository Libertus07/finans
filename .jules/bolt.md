# Bolt's Journal

## 2025-02-23 - App Architecture Learning
**Learning:** `App.jsx` uses `onSnapshot` for multiple collections, causing frequent re-renders of the root component. Child components like `Dashboard` are re-rendered often, making memoization critical.
**Action:** When optimizing child components, always check if they are wrapped in `React.memo` and if their props are stable.
