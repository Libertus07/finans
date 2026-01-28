## 2025-01-29 - React.memo on Static Components
**Learning:** `Sidebar` component was re-rendering on every `App` state update (like live transaction data), despite having stable props.
**Action:** Always check high-frequency parent updates against static child components. Use `React.memo` to isolate static UI (navigation, headers) from data-heavy parents.
