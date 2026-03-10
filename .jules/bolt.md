## 2024-05-18 - Intl Formatter Instantiation Bottleneck
**Learning:** `Intl.NumberFormat` and `Intl.DateTimeFormat` are surprisingly expensive to instantiate in V8/JavaScript engines. When created inside helper functions that are called frequently during renders (especially within large lists or charts, like formatting currencies for hundreds of transaction rows), they cause significant garbage collection overhead and frame drops.
**Action:** Always instantiate `Intl` formatters at the module level (caching them) and reuse the instances via their `.format()` methods in formatting helpers.
