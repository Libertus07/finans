## 2026-09-13 - Caching Intl Formatters
**Learning:** Instantiating Intl.NumberFormat and Date.prototype.toLocaleDateString (which creates an internal Intl formatter) on every render is a major bottleneck (up to 100x slower). However, Intl.DateTimeFormat throws on invalid dates unlike toLocaleDateString.
**Action:** Always cache Intl formatters at the module level for frequent operations, and add explicit isNaN checks when migrating from toLocaleDateString to Intl.DateTimeFormat.
