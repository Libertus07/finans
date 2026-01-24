## 2024-05-24 - Unstable Props Defeating Memoization
**Learning:** Functions defined inside the render scope of a parent component (like `App.jsx`) create new references on every render. If these are passed as props to child components, they defeat `React.memo` optimization in those children, causing unnecessary re-renders even if data hasn't changed.
**Action:** Always define helper functions outside the component or wrap them in `useCallback`. If a prop is unused in the child, remove it entirely to avoid this issue cheaply.
