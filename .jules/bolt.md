## 2026-07-22 - Cached Intl Formatter Instances
**Learning:** Repeatedly instantiating Intl.NumberFormat and Intl.DateTimeFormat inside frequently called formatting helpers causes significant execution time overhead.
**Action:** Always instantiate Intl formatters once at the module level and reuse them for roughly a 100x performance gain.
