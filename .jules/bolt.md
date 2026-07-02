## 2024-07-02 - Intl Instantiation Overhead
**Learning:** Repeatedly instantiating `Intl.NumberFormat` and `Intl.DateTimeFormat` inside utility functions causes severe overhead, especially when frequently rendering lists or tables. Profiling showed formatting 10k items dropped from ~650ms to ~12ms for currency, and ~1450ms to ~31ms for dates.
**Action:** Always instantiate `Intl` formatters once at the module level and reuse the cached instances in formatting functions. Remember to explicitly handle invalid values when doing so to preserve fallback logic.
