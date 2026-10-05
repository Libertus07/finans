## 2023-10-05 - Intl Formatter Instantiation Overhead
**Learning:** Instantiating `Intl.NumberFormat` and `Intl.DateTimeFormat` (or calling `toLocaleDateString`) inside frequently called helper functions causes severe performance overhead (creating instances is ~50-60x slower than reusing them).
**Action:** Extract `Intl` formatters into module-level constants to reuse them across calls, and always ensure to handle 'Invalid Date' fallbacks explicitly since `Intl.DateTimeFormat.format` throws on invalid dates whereas `toLocaleDateString` returns a string gracefully.
