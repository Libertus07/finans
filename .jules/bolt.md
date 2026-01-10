## 2024-05-24 - Data Aggregation Loop Optimization
**Learning:** In React applications with large datasets (e.g. transactions list), calculating multiple derived stats (daily, monthly, total, breakdown) using separate `filter` and `reduce` chains is inefficient (O(M*N)). Consolidating these into a single pass (O(N)) significantly reduces CPU time on the main thread during re-renders, especially when the dataset grows.
**Action:** When calculating multiple statistics from the same array, always favor a single-pass loop over multiple filter/reduce chains.
