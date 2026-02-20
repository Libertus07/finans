## 2025-02-21 - Avoiding Cascading Renders in App.jsx
**Learning:** Initializing `loading` state to `true` and immediately toggling it to `false` in a `useEffect` on mount causes an unnecessary double render. Similarly, setting `activeTab` inside a `useEffect` that listens to `userRole` changes causes a cascading render.
**Action:** Initialize `loading` to `false` if possible. Move state-dependent updates (like `activeTab`) into the event handler that triggers the state change (e.g., `handleSetUserRole`) instead of using `useEffect`.
