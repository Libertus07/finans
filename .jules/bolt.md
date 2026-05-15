## 2024-05-15 - Cached Intl formatters
**Learning:** Instantiating `Intl.NumberFormat` on every call (like inside `formatCurrency`) adds unnecessary overhead, especially in a React app where it is called frequently during renders for every formatted number.
**Action:** Cache the `Intl.NumberFormat` instance at the module level in `src/utils/helpers.js` and reuse it.
