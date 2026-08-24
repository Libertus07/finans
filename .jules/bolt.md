## 2024-08-24 - [Intl Formatter Caching]
**Learning:** Repeatedly instantiating Intl.NumberFormat and calling Date().toLocaleDateString() inside formatting helpers causes massive overhead in large renders or loops (e.g., dropping from ~600-2200ms to ~12-19ms for 10k items).
**Action:** Always instantiate Intl formatters once at the module level and reuse them. Also, remember to add an isNaN() check for Date objects when using Intl.DateTimeFormat().format, as it throws on invalid dates unlike toLocaleDateString().
