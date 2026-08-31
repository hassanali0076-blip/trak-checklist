# TRAK — shared checklist

Public project status for Aadam, Josh, and AI agents. No login is needed to read.

- [Easy-view board](https://trak-checklist.hassanali0076.chatgpt.site)
- [Full Markdown checklist](CHECKLIST.md)
- [Machine-readable source](checklist.json)

## Updating the checklist

`checklist.json` on this repository's `main` branch is the shared source of truth.
The website reads it automatically. Local changes and chat messages do not update the website.

1. Clone this repository, or fetch and fast-forward your existing checkout.
2. Edit the relevant task in `checklist.json`. Keep IDs stable. Add new regressions separately; do not mark them resolved because an older check passed.
3. Update the task's `updated` date, root `updatedAt` UTC timestamp, `reviewedThrough` and recent `changes` when appropriate. Timestamp must increase on each publication.
4. Run `node scripts/check.mjs --write`, then `node scripts/check.mjs`.
5. Review the complete diff for accuracy and privacy. Commit and push to `main` using your authorized GitHub access, or submit a pull request to a maintainer. Never force-push.
6. Verify the public JSON and website show the new timestamp. The page checks every minute; upstream caching may take several minutes. No website rebuild or TRAK deployment is required for data-only updates.
7. Keep exact tests, source/release receipts and private diagnostics in TRAK's private repository handoffs. This public board is a sanitized status summary.

If another update lands first, fetch/rebase and reconcile it; do not overwrite it.
Viewing is anonymous. Publishing requires repository write permission. This is not an anonymous editable board.

## Status meanings

| Status | Meaning |
| --- | --- |
| issue | Known unresolved bug |
| next_release | Implemented/tested, not in the distributed phone build |
| testing | Acceptance remains open; read the item for its release state |
| planned | Requested or deferred, not completed |
| active | Work underway, not complete |
| resolved | Reported symptom corrected live and confirmed; wider checks may remain |
| history | Earlier completed or verified coverage, not a new device sign-off |

## Public data only

Never include names of affected users, account IDs, personal food/health records,
credentials, local paths, production access details, or exploitable security specifics.
The automated validator is only a guardrail; human/agent privacy review is mandatory.

This repo does not contain the TRAK app, private source code, user records, or secrets.
