## 2024-07-09 - Initialization
**Learning:** Found `formatCurrency` repeatedly instantiates `Intl.NumberFormat`, which is a known performance bottleneck in JS loops.
**Action:** Always extract `Intl.NumberFormat` instances to module-level scope.
