## 2024-05-19 - [Formatter Caching]
**Learning:** Repeatedly instantiating `Intl.NumberFormat` and `Intl.DateTimeFormat` inside formatting helpers causes significant overhead. Additionally, when switching to `Intl.DateTimeFormat().format()`, it throws on invalid dates whereas `toLocaleDateString` handles them gracefully, so a validity check `isNaN(date)` must be added.
**Action:** Always instantiate formatters once at the module level and reuse them. Add validity checks when refactoring date formatting.
