# Staging changes awaiting production

Updated 9 September 2026. Astra maintains this list at every staging release and
production promotion. [Visual checklist](https://trak-checklist.hassanali0076.chatgpt.site/#staging-changes-awaiting-production).

Current staging is **app Build 43 + backend 2721**. Regular TRAK is **Build 472**
in internal TestFlight, with **production backend 2716**. This does not claim a
public App Store release. The comparison records the current production source
line; its exact binding to the Build 472 archive still needs a release receipt.

The private release ledger records every differing tracked file: **439 native
paths and 133 backend/repository paths**. These are files, not 572 features or
a patch to copy. Some differences are newer production work to preserve.

## Already on staging; still awaiting production integration

| Change | Remaining check before production |
| --- | --- |
| Dedicated native iOS search connection, fallback and transport diagnostics | Preserve ranking and immediate View all; retain cold/warm VPN test coverage. |
| Search timing and background diagnostic uploads | Keep diagnostic privacy and environment controls. |
| Remember the calculator's personal serving amount across Search, Recents and barcode | Reopen, restart and account-isolation acceptance. |
| Put g, oz and lb before named serving chips | Preserve each food's conversions and portion definitions. |
| Validate food calculations and recover rejected offline writes safely | Schema, account-isolation and replay checks; retain newer production food fixes. |
| Food editor Add includes the existing selected-food list | Check all relevant food entry points. |
| Personal calorie minimum and reliable, consistently saved Coach reviews | Keep manual targets and one current-target publication path. |
| Maintenance corrections and simulations that represent choices after reaching a goal | Reuse the reviewed evidence and retain the separate broader simulation limitations. |
| Immediate daily/cycling targets after Planner or Edit goal changes | Check Insights immediately after changing weekly rate with different daily targets. |
| Review flow edits goal weight, then goal rate, then returns to review; weight conversion and slider fixes | Final phone acceptance of the whole flow. |
| Coach loading checklist and immediate Accept feedback | Build 43 includes the continuous-tick correction; confirmation still waits for a successful save. |
| Clearer calorie-minimum copy and Recommended badge | Keep the displayed minimum calculated for the person. |
| Nutrient rails, legends, references, precision and EPA+DHA consistency | Preserve provenance and unknown-data handling. |
| Full-screen food nutrients, serving in the title, requested zero display and light-mode background | Keep missing-data status distinct from the displayed number. |
| Faster prepared nutrient graphs, short ALL history, retries and navigation safeguards | Build 43 prepares and retains histories earlier and shortens the slide to 200 ms while preserving a complete first frame and swipe-back. |
| Clearer initial food nutrient loading and failure diagnostics | Intermittent final Retry is still unresolved. |
| Recipe unlink preserves fractional nutrition | Earlier recipe-save rounding is a separate pilot. |
| Native runtime/environment guards, packaging and share-link isolation | Reconcile production signing, links and configuration; retain production-only work. |

## Staging-only testing tools

Repeat/advance Coach check-ins without waiting a week, staging diagnostics,
staging signing profiles and staging API/auth configuration stay gated to
staging. They are not production settings to copy across.

## Added in Build 43 and backend 2721

- Coach acceptance draws one continuous tick; save confirmation and failure recovery remain intact.
- Nutrient graphs prepare history when the list opens, retain it across other graph visits, include EPA+DHA, and use a 200 ms slide with the standard back gesture.
- Iodine reads existing values through the shared backend. Missing values remain missing and no recommended target is invented.

All 4,290 app tests and signed-artifact checks pass. Backend focused 101 tests and
174 subtests pass. These are delivered fixes; phone observations after installing 43
are recorded separately. All earlier staging changes above are retained.

## Fixes not delivered yet

| Work | Current state |
| --- | --- |
| Food micronutrients sometimes finish with Retry | Still needs the failed request diagnosis. |
| Recipe-save precision pilot | Separate local candidate, not the delivered recipe-unlink fix. |
| Older backend test-database gaps | Twelve broader failures reproduce unchanged on the staging baseline. Repair/verify the fixtures before broader integration sign-off; do not describe the full suite as passing. |

## Keep the newer production work

Production already has work missing from staging. A promotion must preserve:

- Home-screen widgets and their sign-out, snapshot and deep-link integration.
- Automatic Health weight pickup, Apple Health writes and Health Connect behaviour.
- Saved-food Search cache invalidation and icon persistence after edits, deletion,
  imports and app restart.
- AI, voice, recipe and recurring-food identity, icons and serving calculations.
- Production release checks, configuration, current release notes and signing.
- The separately released backend 2716 recipe matching and recovery when an AI ingredient identity becomes stale. This newer production fix is not yet in staging.

## How this stays current

Astra updates both this public list and the private source ledger for each
staging release or production port. Each item retains its delivery state,
owner, remaining checks and production completion evidence. The private checker
detects a stale file inventory or changed fetched production source. A green
build or an old commit message does not close phone regressions.

Next: install Build 43 to check the delivered graph/tick/iodine changes. Astra
maintains this list and owns any follow-up from that testing. Production
integration remains a separate reviewed release; updating this list deploys
neither the app nor the backend. The broader master checklist retains research
and unimplemented requests; those are not staging-delivered features.
