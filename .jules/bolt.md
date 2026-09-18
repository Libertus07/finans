## 2024-05-18 - Caching Intl Formatters
**Learning:** Repetitive instantiation of `Intl.NumberFormat` and `Intl.DateTimeFormat` in tight loops or frequent calls (like in table renders) causes massive overhead. Benchmarks show a ~50x speedup for currency and ~60x speedup for dates when cached.
**Action:** Always cache `Intl` formatters in module scope instead of recreating them on every format call.
