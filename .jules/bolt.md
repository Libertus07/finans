## 2025-05-18 - [React.memo and Unstable Props in App.jsx]
**Learning:** Defining helper functions inside the main component body (`App.jsx`) creates unstable prop references on every render. This defeats `React.memo` optimization in child components (like `Dashboard`), causing them to re-render unnecessarily whenever the parent re-renders, even if their data props haven't changed.
**Action:** Move helper functions outside the component or `useCallback`. Ensure heavy page components are wrapped in `React.memo` when the parent component manages many global state streams.
