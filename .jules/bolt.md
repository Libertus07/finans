## 2024-06-02 - Instantiating Intl in helpers
**Learning:** Repeatedly instantiating Intl.NumberFormat and Intl.DateTimeFormat inside rendering loops and helpers causes significant execution overhead (50x slower).
**Action:** Always instantiate Intl formatters once at the module level and reuse them for formatting tasks.
