
## 2024-03-15 - Clean Verification Artifacts
**Learning:** Temporary ad-hoc verification scripts (e.g., Python scripts for Playwright) and their generated artifacts (like screenshots) will be committed if left in the working directory during the submission phase. Committing test scripts containing hardcoded credentials is a severe security violation.
**Action:** Always `rm` temporary verification scripts and generated media immediately after they have served their purpose, and double-check `git status` or run `ls` to ensure a clean working directory before initiating code review or submitting a PR.


## 2024-03-15 - Handle Invalid Dates in Cached Formatter
**Learning:** Migrating from `new Date(invalidString).toLocaleDateString(...)` to a cached `Intl.DateTimeFormat.format()` introduces a potential regression: the latter directly throws a `RangeError: Invalid time value` if given an invalid date object, instead of returning "Invalid Date".
**Action:** When caching date formatters, implement a manual `isNaN(date)` check and gracefully fallback to returning a string like 'Invalid Date' to prevent application crashes on malformed data.
