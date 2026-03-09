## 2025-03-09 - Scope Creep Risks during Performance Tasks
**Learning:** Attempting to fix pre-existing linting errors (like `no-unused-vars` and `react-hooks/exhaustive-deps`) in a codebase without full context or proper ESLint plugins can lead to severe UI regressions and logic bugs.
**Action:** Stick strictly to the "ONE small performance improvement" constraint. Do not make unsolicited changes to unrelated files, fix linting warnings, or run `npm install` unless absolutely required for the specific optimization.
