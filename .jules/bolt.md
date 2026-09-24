## 2024-09-14 - Expensive Intl Instantiations
**Learning:** Repeatedly creating Intl.NumberFormat and Date.toLocaleDateString instances in tight loops or frequent renders is a significant performance bottleneck (taking ~60x longer in JS benchmarks).
**Action:** Extract formatters to module-level cached instances and reuse them to drastically improve formatting speed.
