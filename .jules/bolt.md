## 2026-07-06 - Optimize Intl formatters
**Learning:** Repeatedly instantiating Intl.NumberFormat and Date.toLocaleDateString inside formatting helpers causes ~100x overhead during frequent renders in heavy data grids.
**Action:** Always instantiate Intl formatters once at the module level and reuse them.
