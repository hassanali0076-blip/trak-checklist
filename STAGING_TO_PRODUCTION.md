# Staging changes awaiting production

Updated 10 September 2026. Astra maintains this release record.
[Visual checklist](https://trak-checklist.hassanali0076.chatgpt.site/staging-to-production).

**Regular TRAK Build 475 is available in internal TestFlight. Production backend
2722 is live and verified.** All 18 staging groups below are included, together
with the newer production widgets, Health work and recipe household amounts.
Both signed app packages pass verification. The matching Android APK is ready
for the established manual Firebase upload; it has not been uploaded to Firebase.
This is an internal production-app release. A public App Store release and
new physical-phone acceptance are separate.

**New widget issue:** Build 475 Android widget loading fails in runtime testing.
The release/build checks above do not constitute widget acceptance. See the
widget review below for the reproduced failure and next actions.

Staging remains **Build 45 + backend 2721**. Its reported graph rendering and
edge fix is accepted on the phone and retained in 475. The accepted maintenance
simulation evidence remains valid. Neither needs repeating just because the
release record changed.

The backend passes 1,826 tests and 348 subtests, plus 90 separate PostgreSQL
checks. The final app evidence covers 4,261 current sign-in tests and 122 older
sign-in tests. Two fixtures needed correction during the release rerun; their
complete files pass and the original failed invocation remains recorded. The
final evidence combines unchanged passing partitions with those corrected
cases. The approved manual path used verified local equivalents; hosted jobs
did not execute.

The two required serving-calculation tables were created on the independently
verified production database. Readback passes and rerunning makes zero changes;
existing food, nutrition and account rows were untouched. All 30 current Search
checks returned complete View all data, and all 15 paired ordered-result
comparisons match. Server processing medians are below 90 ms; the Mac network
probe still has intermittent transport delays, so this is not a new phone/VPN
speed sign-off.

## All 18 staging groups included in regular TRAK 475

| Change | Delivery and acceptance |
| --- | --- |
| Dedicated native iOS search connection, fallback and transport diagnostics | Delivered in 475. Full ordered results match; complete View all is retained. Server timing passes; phone/VPN speed is a separate observation. |
| Search timing and background diagnostic uploads | Keep diagnostic privacy and environment controls. |
| Remember the calculator's personal serving amount across Search, Recents and barcode | Reopen, restart and account-isolation acceptance. |
| Put g, oz and lb before named serving chips | Preserve each food's conversions and portion definitions. |
| Validate food calculations and recover rejected offline writes safely | Production migration and account/replay checks pass. Newer production food fixes are retained. |
| Food editor Add includes the existing selected-food list | Check all relevant food entry points. |
| Personal calorie minimum and reliable, consistently saved Coach reviews | Keep manual targets and one current-target publication path. |
| Maintenance corrections and simulations that represent choices after reaching a goal | Reuse the reviewed evidence and retain the separate broader simulation limitations. |
| Immediate daily/cycling targets after Planner or Edit goal changes | Check Insights immediately after changing weekly rate with different daily targets. |
| Review flow edits goal weight, then goal rate, then returns to review; weight conversion and slider fixes | Final phone acceptance of the whole flow. |
| Coach loading checklist and immediate Accept feedback | Build 43 includes the continuous-tick correction; confirmation still waits for a successful save. |
| Clearer calorie-minimum copy and Recommended badge | Keep the displayed minimum calculated for the person. |
| Nutrient rails, legends, references, precision and EPA+DHA consistency | Preserve provenance and unknown-data handling. |
| Full-screen food nutrients, serving in the title, requested zero display and light-mode background | Keep missing-data status distinct from the displayed number. |
| Faster prepared nutrient graphs, short ALL history, retries and navigation safeguards | Build 45 retains earlier preparation, normal transition and swipe-back, and corrects first-frame shading, bar scaling and reference edges. The reported Build 45 graph fix has phone acceptance. |
| Clearer initial food nutrient loading and failure diagnostics | Build 475 now recovers an interrupted same-account read and one transient failure; phone verification remains separate. |
| Recipe unlink preserves fractional nutrition | Earlier recipe-save rounding is a separate pilot. |
| Native runtime/environment guards, packaging and share-link isolation | Both signed artifacts pass production identity and configuration checks. Production-only work is retained. |

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

## Added in Build 44

The graph uses the same standard screen transition as the other Insights
screens. The special 200 ms override was removed after phone feedback. Earlier
data preparation, cached histories and the back gesture are retained. Build 44
is installed and launches; it is also available in internal TestFlight.

The full run had two intermittent sync-test failures. The same test files pass
on the prior build source and twice on this candidate; 50 Insights checks and
the prior 97 focused graph checks pass. The initial failures remain in the
release evidence; the full run is not described as all green.

## Added in Build 45

Standard shading no longer depends on how much history has loaded. Bars and
scale use the same N-day window as the displayed average, and target/range
segments reach the plot edges while Custom history gaps remain unknown. Normal
screen motion is retained. Build 45 is installed directly with saved preferences
unchanged; internal TestFlight availability is now confirmed.

All 4,296 app tests pass, with 14 existing skips. Six rendered regression cases
fail on Build 44 and the production source and pass with these corrections.
Signed exports and launch assets pass their checks. Phone feedback on 10 September
confirms the reported graph rendering and edge fix looks good. This accepts that
fix; it does not close unrelated feature checks.

## Additional delivery and separate work

| Work | Current state |
| --- | --- |
| Food micronutrients sometimes finish with Retry | A same-account Health refresh and a first temporary server failure now recover automatically. All 21 focused cache/recovery tests pass, including account isolation. Included in 475 internal TestFlight. The original phone incident was not conclusively traced; new phone acceptance is separate. |
| Recipe Edit waits before opening | Build 475 opens the editor immediately with a loading state, fetches full ingredients without nutrient enrichment, retries one transient failure and offers Retry if needed. Household amounts remain intact. It does not silently edit an old cached recipe. |
| Recipe-save precision pilot | Separate local candidate; excluded from this batch because it was not delivered by staging. |
| Older backend test-database gaps | Repaired and merged with production backend 2722. The combined backend and real PostgreSQL checks pass, with account, cancellation and transaction checks retained. |

## Newer production work preserved

Build 475/backend 2722 preserve this newer production work:

- Home-screen widgets and their sign-out, snapshot and deep-link integration, including newer selectable nutrient rings, configurable Quick actions and fibre data.
- Automatic Health weight pickup, Apple Health writes and Health Connect behaviour.
- Saved-food Search cache invalidation and icon persistence after edits, deletion,
  imports and app restart.
- AI, voice, recipe and recurring-food identity, icons and serving calculations.
- Production release checks, configuration, current release notes and signing.
- The separately released backend 2716 recipe matching and recovery when an AI ingredient identity becomes stale.
- Backend 2718 persists original recipe household amounts alongside one gram calculation total, supports household-unit editing, and avoids counting the same amount twice. These newer production changes are preserved in the delivered release.

## Android small Today widget correction

The production layout contained seven identical shortcut rows. The release
check caught duplicate IDs; 475 keeps one bottom row with the same Search,
Scan and Log weight actions. Other widget nodes and bindings are unchanged.
The final Android release passes fatal lint and signature checks. iOS widget
signatures, App Groups and Apple Health permissions also pass verification.

## Widget review: Android loading failure and follow-up work

A Pixel 9 report of “Can’t load widget” was reproduced using the actual signed
Build 475 APK on Android. Five of six layouts fail the home-screen widget
renderer; the Nutrient layout passes that check. All six work as ordinary app
views, which explains why the earlier build/layout checks did not catch this.
All four providers register. Missing widget-picker search results were also
reported and still need separate Pixel verification.

The wider review found small iOS Macros readability problems, missing Android
configuration, incomplete nutrient selection, and refresh/day-specific target
handling that needs correction. Review is complete; no app fix or new release
was made. Astra owns the next work: fix Android loading and add the native
rendering check, then address shared-state correctness and refine the layouts.
Verify the resulting build on Pixel 9 and iOS before closing these issues.

## How this stays current

Astra updates both this public list and the private source ledger for each
staging release or production port. Each item retains its delivery state,
owner, remaining checks and production completion evidence. The private checker
detects a stale file inventory or changed fetched production source. A green
build or an old commit message does not close phone regressions.

The backend and internal iPhone release are complete. Astra maintains the
release record and handles reported regressions. The signed Android package
is prepared for the established manual upload. Public App Store promotion
and new device acceptance are separate. Build 45 graph acceptance remains valid;
there is no need to repeat that test merely because the checklist changed.
Updating this list deploys neither the app nor the backend. Research and other
unimplemented master-checklist requests are separate from this release.
