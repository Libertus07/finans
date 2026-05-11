## 2024-05-11 - Module Level Cache

**Learning:** `Intl.NumberFormat` and `Intl.DateTimeFormat` instantiations are expensive and can be safely cached at the module level when their options are static, significantly improving performance when formatting large amounts of data in list/grid components.

**Action:** Move `new Intl.NumberFormat` and `new Intl.DateTimeFormat` instantiations outside of helper functions or component render cycles to module-level variables.
