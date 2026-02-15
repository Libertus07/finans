## 2025-02-10 - Unused Prop Passing vs Memoization
**Learning:** Found a pattern where `App.jsx` was passing an unstable function (`getProfitabilityWarnings`) to `Dashboard`, defeating `React.memo` potential. The function was completely unused in `Dashboard`.
**Action:** When memoizing components, always audit props for stability AND usage. Removing unused props is a double win (cleanup + performance).
