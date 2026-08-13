## 2024-05-24 - [Intl Formatter Caching]
**Learning:** Repeatedly instantiating `Intl.NumberFormat` and `Intl.DateTimeFormat` inside formatting helpers causes significant overhead (around 70x-100x slower) during frequent renders. `Intl.DateTimeFormat().format(new Date('invalid'))` throws a `RangeError`, whereas `toLocaleDateString` gracefully handles it, so we must add a date validity check (`isNaN(date)`).
**Action:** Always instantiate `Intl` formatters once at the module level and reuse them for formatting functions.
