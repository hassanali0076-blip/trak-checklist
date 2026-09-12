# Staging changes awaiting production

Updated 12 September 2026. Astra maintains this release record.
[Visual checklist](https://trak-checklist.hassanali0076.chatgpt.site/staging-to-production).

**Backend 2725 is verified live. Native Build 486 is signed.** iOS upload
succeeded; the last verified Apple state was processing, so availability in
TestFlight still needs confirmation. Signed Android 486 is ready for manual
upload; Firebase distribution is blocked by account permission. Approved icons,
widgets and the earlier staging integration are retained. No new physical-phone
acceptance or public store release is claimed.

Build 486 preserves physical serving amounts and reconciles catalogue
corrections across linked history, recipes and recurring entries. Explicit
personal nutrition remains intact. The production history repair, zero-change
repeat and all four derived refresh jobs were independently verified. The
independent Astra adversarial review passed. Exact source, test and signed
artifact evidence is retained in the private release record.

The earlier Android loading failure is repaired in 476 and passes native
renderer checks. Pixel 9 picker-search and physical add/refresh observations
remain on their own checklist task; a signed build is not phone acceptance.

Staging remains **Build 45 + backend 2721**. Its reported graph rendering and
edge fix is accepted on the phone and retained in 475. The accepted maintenance
simulation evidence remains valid. Neither needs repeating just because the
release record changed.

The original production integration evidence includes 1,826 backend tests and 348 subtests, plus 90 separate PostgreSQL
checks. The original Build 475 app evidence covers 4,261 current sign-in tests and 122 older
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

## Widget repairs and approved designs in Build 476

The Pixel 9 “Can’t load widget” report was reproduced against the actual signed
Build 475 APK: five of six layouts fail the widget renderer despite passing
ordinary app-view inflation. Build 476 removes those unsupported elements and
adds the native rendering check. All twelve current layouts, four providers,
224 populated render states and configuration/data/ring cases pass on Android
API 36. The exact signed release additionally passes 56 populated cases through
a real widget host and public provider entry point; this exercises optimized
code without adding production-only test hooks. Older compact-height resource fallbacks also pass; an older Android
runtime remains a distinct compatibility check.

The complete gallery is approved and implemented across iOS and Android:

- Larger readable small Macros rings with lighter text inside. Default order
  is P/F/C; the 2x2 arrangement is kcal/P above F/C.
- Better wide Macros spacing without target captions; clearer mode heading.
- A slightly smaller Nutrient ring with a larger main value.
- Neutral, larger Quick actions, matched scan stroke and thinner scale dial.
- Wide Search foods above four actions: Scan, Quick add, AI log and Log weight.
- Android settings per widget, separate compact/wide choices and size handling.
- Confirmed diary/current-target publication with account, date and readiness
  guards, matching alcohol display, and retry after a failed write or clear.
- Ring strokes stay inside their bounds; lower-left partial/full fill is
  continuous. Native iOS image/pixel checks cover 54 rendered cases.

The fresh full Flutter suite passes 4,287 tests with 16 skips; the separate older
sign-in suite passes 122, focused widget/API checks pass 56, and release-gate
checks pass 16. An earlier PCF-order run failed after the test changed while old
code was already compiled; the entire suite was rerun with frozen inputs and
passed. The original failed run is retained, not described as green. Hosted
checks could not execute; the approved manual path used the local evidence.

Next: Aadam uses iOS 476 and uploads the corrected Android 477 APK through the
existing manual route, then checks Pixel picker/add/refresh. Astra handles any regression.
Old iOS Edit Widget rows may retain archived Carbs/Fat labels until edited or
re-added; the standard rendered order is P/F/C. Phone tint, resizing, taps and
OS refresh scheduling are separate from simulator evidence. These items are
marked for checking rather than falsely closed as device-verified.

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

## Android 477 widget sizing correction ready for manual upload

A phone report after Build 476 exposed tiny rings and excessive empty space.
The released APK reproduces the problem: all four providers combine launcher
width/height bounds from different orientations. The approved correction is
merged and packaged in signed Android 477, restoring the approved sizes and
wide Search layout using the actual available space.

The exact signed APK passes all 84 native cases, including portrait and
landscape host selection. All 84 renders are identical to the images approved
by Aadam. Production signing and artifact checks pass. The unchanged app logic
retains the recorded full-suite evidence, with fresh coverage for Android-only
release notes. No new full-suite run is claimed for this bounded correction.

The APK is ready for Aadam's established manual upload route, followed by Pixel
review. This task has not uploaded it to Firebase or confirmed physical-phone
acceptance. Astra owns any reported regression. Distributed iOS remains 476;
both backends, all eighteen staging groups and the approved designs are preserved.

## Android 478 approved widget spacing ready for manual upload

All seven Android layouts were approved and implemented: larger centered small
rings, tighter P/F/C spacing on the small calorie card, clearer single-nutrient
names and full unit words, larger/lower wide shortcuts and better macro readouts.
The existing ranking, nutrition calculations, widget data, settings and taps are
preserved. Review also caught larger-text clipping and older-Android static-size
issues; both are corrected and covered by the expanded checks.

The source is merged into the native production line and the APK is signed.
All 136 exact-APK rendering cases and 52 stronger corner-mask checks pass. The
56 standard native images match the reviewed implementation exactly. Settings,
ring-fill, snapshot, larger-text and custom-label checks pass. The unchanged
Flutter logic retains its recorded full-suite evidence; no new full run is claimed.

Samsung-relevant launcher dimensions, system corners and compact landscape
layouts are included. The corner masks and older-Android branch tests are
synthetic. Actual One UI acceptance should record the model/version, inspect
which controls are offered, and check resizing, clipping and saved options.

Next: Aadam uploads Android 478 through the established manual route and reviews
the widgets. Astra handles any concrete regression. This task has not uploaded
Android to Firebase or claimed physical Samsung acceptance. iOS stays on 476;
both backends, all eighteen staging groups and earlier production work remain.

## Build 479: serving consistency and final widget refinements

Regular iOS 479 is available in internal TestFlight. Signed Android 479 is ready
for the established manual upload. The completed serving work was independently
reviewed, and additional saved-template and narrow-widget cases were corrected
before packaging.

- Food amounts stay consistent through gram reopen, fractions and unit changes.
- Recipe and template conversions preserve physical amounts and saved identity.
- Tune updates calories, fibre and micronutrients together.
- Android small Today retains the approved wider gaps between P/F/C groups and
  fits its numbers at small sizes and larger system text.
- Android and iOS Macros Wide use larger medium-weight Remaining/Consumed text.
- All earlier widget layouts, P/F/C order, Samsung-relevant sizing and the 18
  preceding staging groups are retained.

Fresh checks: 4,461 app tests across both sign-in configurations; 224 Android
render states plus font, settings and snapshot checks; 54 iOS native renders.
The exact signed Android file passes 136 host cases and 52 stronger-corner checks.
Its 56 standard-state images match the reviewed renders. These are automated
and simulator checks, not new physical Samsung or Pixel acceptance.

Next: Aadam updates iOS or uploads Android 479, then checks serving reopen,
unit changes, recipe Tune and widget appearance. Astra owns reported regressions
and keeps this record current. No historical diary rewrite, backend promotion
or staging build was performed for this release.

## Build 486 serving and catalogue visual acceptance

All checks below remain pending on an installed Build 486 or later build that
retains these fixes. Aadam supplies device observations; Astra owns any failures.
Record platform, build and screenshots/results. Automated tests do not tick
these device checks.

| Pending check | Expected result |
| --- | --- |
| Cold launch and hard-close/reopen | No unsolicited serving warning or recurring unsaved-food card from a routine catalogue correction. |
| Save and reopen 100 g of food | Still 100 g with the correct calories and macros, never 100 servings. |
| Recipe ingredient: select grams, type 200, save/reopen | Still 200 g; no long serving fraction in the gram field; recipe totals agree. |
| Corrected food across search, detail, history, recipes and recurring logs | Nutrition agrees after sync and the logged physical amount is preserved. |
| Explicit personal nutrition edit | The user's intentional nutrition remains intact after catalogue correction. |
| Daily totals and home-screen widgets | Consumed/remaining values and macro bars agree with corrected logs; widgets refresh. |
| Any legitimate remaining warning or choice | Approved app typography, spacing, colours and controls; intended nonblocking logging route works. Routine corrections reconcile without this UI. |
| Approved icons and widgets on iOS and Android | Intended release appearance is retained, including relevant light/dark and sizing states. |
| Cold/warm and offline-to-online paths | Saved amounts and corrected nutrition converge consistently after sync without recurring recovery UI. |

Before the next design build, the design agent must fetch and rebase onto the
latest authoritative native production branch (and main for any backend work),
preserve the Build 486/2725 serving and catalogue fixes, and run the combined
regression and release checks on the exact rebased source. The design agent has
acknowledged this requirement; TRAK Master coordinates build allocation.
