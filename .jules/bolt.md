## 2024-05-23 - [Unstable Props vs Dead Code]
**Learning:** When optimizing by removing apparently unused unstable props, be cautious. Reviewers may perceive removing "business logic" helpers as a regression even if they are currently unused in the receiving component.
**Action:** Prefer stabilizing unstable props (using `useCallback`/`useMemo`) over deleting them, unless the entire feature is explicitly confirmed for removal.
