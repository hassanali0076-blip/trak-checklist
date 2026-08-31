# Shared TRAK checklist

Read README.md before updating. The authoritative data is checklist.json on main.
Preserve stable task IDs and other contributors' updates. Never force-push.
Distinguish local implementation, distributed build, live backend, and phone acceptance.
Do not claim a fix is shipped or device-verified without evidence.
Use node scripts/check.mjs --write and node scripts/check.mjs before committing.
Review every public field for private data. Do not copy private TRAK diagnostics.
For data-only updates, push the validated data; the website fetches it without a rebuild.
Verify the published timestamp after pushing. Keep private handoffs synchronized.
