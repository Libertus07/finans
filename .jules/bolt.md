## 2024-05-24 - Tool Limitation Discovery
**Learning:** The `read_file` tool may truncate outputs for very large files, making it dangerous to assume the full structure of the file based on partial reads. This leads to violations of the Groundedness Rule when planning edits for functions or variables that haven't been explicitly confirmed.
**Action:** Always use `cat` or `grep` within a bash session to thoroughly scan and verify the existence and structure of specific code blocks before finalizing an execution plan, especially for files that might exceed `read_file`'s output limits.
