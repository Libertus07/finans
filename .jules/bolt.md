## 2024-05-18 - [Optimization Pattern]
**Learning:** Data constants (like `INITIAL_MARKET_RATES`) should be used directly in components or defined outside the component body, avoiding unnecessary `useState` hooks that don't change.
**Action:** Remove the unused `marketRates` state hook and pass `INITIAL_MARKET_RATES` directly where needed, or refactor to avoid the state overhead.

## 2024-05-18 - [Codebase Standard]
**Learning:** The codebase is maintained in a lint-clean state. `no-unused-vars` errors are strictly enforced.
**Action:** Remove unused variables in all files.
