## 2024-05-24 - [Intl Performance Optimization]
**Learning:** Re-instantiating `Intl.NumberFormat` and `Intl.DateTimeFormat` inside loop/render iterations creates extreme performance bottlenecks. `new Date('invalid').toLocaleDateString(...)` gracefully returns "Invalid Date", but `new Intl.DateTimeFormat(...).format(new Date('invalid'))` throws a RangeError.
**Action:** Always extract `Intl` formatters to module scope constants. When replacing `toLocaleDateString` with cached `Intl.DateTimeFormat`, always wrap with a date validity check (`isNaN(date)`).
