## 2024-07-08 - Formatting Performance Optimization
**Learning:** Instantiating `Intl.NumberFormat` frequently (e.g., in a `formatCurrency` helper) causes significant performance overhead in loops or frequent render cycles.
**Action:** Always instantiate the formatter once at the module level and reuse it to boost string formatting speed drastically.
