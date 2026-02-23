## 2025-05-24 - React Performance Anti-Patterns
**Learning:** Setting state inside `useEffect` (e.g. `setActiveTab` when `userRole` changes) causes cascading re-renders. It also makes initialization logic (like `loading` state) complex and bug-prone.
**Action:** Move state updates to the event handler that triggers the change (e.g. `handleSetUserRole`) to batch updates and avoid double renders. Also, initialize state (like `loading`) to avoid immediate toggle on mount.

## 2025-05-24 - ESLint Component Variables
**Learning:** `no-unused-vars` triggers false positives for components assigned to variables (e.g. `const StatCard = ({ icon: Icon }) => <Icon />`) if `eslint-plugin-react` is not fully configured.
**Action:** Use `// eslint-disable-next-line no-unused-vars` for such cases instead of removing the variable.
