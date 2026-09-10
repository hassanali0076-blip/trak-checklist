# TRAK — master checklist

Updated: 2026-09-10T13:25:14Z · Reviewed through 2026-09-10

- native: Regular TRAK 476 is available in internal TestFlight. It adds the approved widget polish, P/F/C order, wide Search and four actions, Android widget loading/settings repairs, and confirmed diary/target refresh. All 18 staging groups and the production work already delivered in 475 are retained. Both signed packages pass verification. Matching Android 476 is prepared for the established manual Firebase upload; this task has not uploaded it to Firebase. Staging 45 remains unchanged.
- backend: Production backend 2722 is live and independently verified. The two-table serving-calculation migration is applied, read back and safe to rerun. Current native-contract searches return complete View all data; paired ordered results match the baseline. Server timing passes; Mac transport outliers are recorded separately and do not establish phone or VPN speed.
- next: Update regular TRAK to 476 in TestFlight. Aadam handles the established Android APK upload and checks Pixel 9 widget picker/add/refresh behavior. Astra handles reported regressions and maintains the checklist. Public store release and physical widget acceptance are separate; previously accepted graph and maintenance evidence need not be repeated.

> Public, read-only project status. No login needed.

> Historical checks are retained separately; a new regression is not closed by an older sign-off.

> Updates appear here after the shared checklist is published. Local edits and chat messages do not update it.

> Reconciled through 10 September. Released changes, local fixes and reported phone results are tracked separately. This board update does not release a TRAK app build.

## Known issue

### Regional product typos can miss a valid result

ID: regional-verified-product-typos-recover-safely · Search & catalogue · Reviewed 2026-08-31

The reported regional-product typo is diagnosed. A general vocabulary and matching correction is not yet implemented.

Next: Fix general typo recovery with false-positive and Fast/Full regressions, not a product-specific alias.

### Typed Search results feel slow again

ID: typed-search-results-are-slow-again · Search & catalogue · Reviewed 2026-09-08

Several staging speed improvements are released, and recent uncached phone searches appeared quickly. A much longer whole-egg stall occurred with a USA VPN even though the server response was quick. Build 33 adds measurements to locate that delay; it is not a proven fix for every spike. Existing food matching, ranking and immediate View all remain required.

Next: The Search owner must compare uncached searches with VPN off, already connected, and switched during use on Build 33. Measure connection, response and screen timing together. Preserve exact result order and immediate View all; do not infer speed from cached repeats.

### Large text still clips on some Android screens

ID: large-text-remains-usable-across-android-phones · Accessibility · Reviewed 2026-08-31

Real Samsung screenshots show clipping in macro labels, calorie insights and Recipe Builder fields despite earlier improvements.

Next: Reproduce with maximum font size and screen zoom; fix adaptive layout and recheck Pixel/iPhone.

### Food-source coverage review needs reconciliation

ID: custom-source-inventory-reconciliation · Search & catalogue · Reviewed 2026-08-31

A source-access assessment missed datasets already held locally. The assessment was corrected, but worldwide source exhaustion has not been established. This is a research/review issue, not a new phone regression.

Next: Reconcile existing source versions, nutrient coverage and recorded permissions before claiming remaining gaps cannot be filled. No automatic food or database changes.

### Restore reliable grocery refreshes

ID: grocery-refresh-scheduling-and-completion-receipts · Search & catalogue · Reviewed 2026-09-08

Nightly catalogue maintenance completed through the audit date, but recent grocery triggers failed before running and the latest successful trigger did not establish refresh completion. Reliable recent grocery results remain unverified.

Next: The operations owner must inspect the last runner outcome and restore scheduling on existing infrastructure, with durable start/completion/failure records and missed-run alerts. No scheduler change was made by the audit.

## Next phone build

### Native code organization

ID: native-code-organisation-server-companion-later · Release & reliability · Reviewed 2026-08-31

The first native organization batch is tested and saved remotely, but not released. Later batches and backend restructuring are not included.

Next: Keep behavior unchanged; scope and approve the next batch separately.

### Verify the actual app before wider release

ID: signed-artifact-release-and-promotion-checks · Release & reliability · Reviewed 2026-09-08

A local release gate checks the signed iPhone and Android artifacts and requires recorded phone acceptance for claimed features. Release checks can run on the release Mac. Build 470 remains internal-only; these new protections do not retrospectively approve its unresolved nutrient issues.

Next: The release owner must use the gate for the next candidate, verify matching platform artifacts and collect the required phone acceptance before wider promotion.

## Needs checking

### Fix Android widgets showing “Can’t load widget”

ID: android-widgets-cannot-load · Widgets · Reviewed 2026-09-10

The loading repair is included in Build 476, available in internal TestFlight with matching release-signed Android prepared for manual upload. All 12 widget layouts and 224 debug render states pass; the exact signed release also passes 56 populated cases through a real widget host; released 475 failed five original layouts. Four providers and per-widget settings are included. Pixel 9 picker-search and physical add/refresh acceptance remain separate from emulator evidence.

Next: Aadam distributes the prepared Android 476 through the established manual route, then confirms the widgets appear, add and refresh on Pixel 9. Astra owns any remaining launcher or widget failure. Do not describe the Pixel report as resolved until that observation is confirmed.

### Match nutrient graph transitions to the other screens

ID: micronutrient-graph-standard-transition · Coach & insights · Reviewed 2026-09-10

Build 45 retains the Build 44 correction: it removes the special 200 ms graph animation and uses the same standard screen transition as the rest of Insights. Earlier data preparation, cached history and swipe-back are preserved. Retained in regular TRAK 475, available in internal TestFlight.

Next: Regular TRAK 475 is available in internal TestFlight and retains the normal Insights transition. Staging 45 remains the directly installed build; its accepted graph result is retained. Astra owns any new motion feedback.

### Make iodine graphs load

ID: iodine-graph-cannot-load · Coach & insights · Reviewed 2026-09-09

Fixed in live staging backend 2721: iodine is recognised across graph history, batch history and breakdowns. The running source matches the tested correction. It reads existing microgram values; missing data stays missing and no recommended target is invented. Focused 101 tests and 174 subtests pass.

Next: Open iodine in TRAK Staging. The backend correction also works with the existing app; Build 43 includes the separate graph-opening improvements. Astra records the phone result.

### Keep the Coach acceptance tick smooth

ID: coach-accept-tick-pauses-mid-stroke · Coach & insights · Reviewed 2026-09-10

Build 43 includes the tested correction for the Build 42 tick freeze. The stroke now draws continuously from the tap instead of pausing partway through or restarting after the response. Successful saving still controls confirmation and return; late failure restores the review. Retained in regular TRAK 475, available in internal TestFlight.

Next: Install regular TRAK 475 and accept a Coach review. Check the uninterrupted tick and correctly saved plan; Astra owns any follow-up.

### Recipes and custom foods appear missing

ID: verify-saved-library-visibility-after-the-filter-correction · Recipes & custom foods · Reviewed 2026-09-10

The saved-library and Search projection corrections are retained in later regular and staging releases. Missing records were not established; the reported problem was delayed or filtered presentation. Complete current-phone acceptance remains open. Retained in regular TRAK 475, available in internal TestFlight.

Next: On regular TRAK 475, open Recipes and Foods after a catalogue query and confirm both complete libraries appear, remain loggable and ignore the unrelated catalogue filter. Preserve existing data.

### Offline and restart food-log recovery

ID: offline-and-restart-food-log-recovery · Diary & recurring · Reviewed 2026-09-08

Later releases retain the local-save and reconnect protections added after the earlier delayed Undo report. Automated coverage does not replace the remaining offline, restart and account-change phone checks.

Next: On Staging Build 33, add, edit, move, copy and delete offline; reopen and reconnect. Confirm the intended diary survives once, with prompt Undo and no duplicate Health writes.

### Recurring foods log at their exact local time

ID: recurring-foods-become-real-entries-at-their-exact-local-time · Diary & recurring · Reviewed 2026-09-08

The backend scheduler and native timing safeguards are implemented and retained in the current release lines. Complete open, background and closed-app phone acceptance is still unrecorded.

Next: On the current staging build, verify saved minutes, timezone changes, upcoming cards and one diary entry per occurrence before and after its scheduled time.

### Coach check-in flag appears on the diary only when due

ID: coach-check-in-flag-appears-on-the-diary-only-when-due · Coach & insights · Reviewed 2026-08-31

The due-only diary flag is shipped. Complete on-phone timing and completion checks are still open.

Next: Confirm absent before due, visible when due, and cleared after completion or skip.

### Suggested and Recent cards arrive late when opening Search

ID: suggested-and-recent-foods-feel-immediate-and-relevant · Search & catalogue · Reviewed 2026-09-08

The subsequent Search work reduces competing requests and preserves immediate personal shelves. Some phone searches are now quick, but cold-start, slow-network and account-change coverage is not fully accepted.

Next: On Staging Build 33, hard-close, reopen and enter Search immediately. Check Suggested and Recents before caches warm, then repeat with slow/offline connectivity and another meal or account.

### Recents can disappear when Suggested is present

ID: recents-shelf-remains-visible-alongside-suggested · Search & catalogue · Reviewed 2026-09-08

The missing-shelf backend repair and stable personal-section projections are retained in later releases. The broader new-phone acceptance remains open; older fixes do not close a newly reported latency or reordering regression.

Next: On Staging Build 33, confirm both shelves appear without duplicates and remain stable for five seconds after results finish. Repeat in another meal and time slot.

### Verified and Branded foods stay correctly classified and unique

ID: verified-and-branded-foods-stay-correctly-classified-and-unique · Search & catalogue · Reviewed 2026-08-31

The backend classification correction is live. Final checks of Common, Verified and Branded shelves remain.

Next: Check government foods in Common, reviewed products in Verified, and unreviewed products in Branded.

### Common foods use the correct household portions

ID: common-foods-use-the-correct-household-portions · Search & catalogue · Reviewed 2026-08-31

Build 461 includes reviewed portion families and wording fixes. Several foods passed; remaining oat-milk, onion and macro-ring checks are open.

Next: Check exact oat milk, onion portion scaling and the zero-to-filled macro-ring animation.

### Recipes keep the same serving everywhere

ID: recipes-use-one-serving-across-every-search-surface · Recipes & custom foods · Reviewed 2026-09-10

The shared current-recipe projection and preserved AI/private-food identity are included in later release work. Old diary snapshots remain historical. The cross-surface phone check still needs explicit acceptance. Retained in regular TRAK 475, available in internal TestFlight.

Next: On regular TRAK 475, open the same recipe through Recipes, My foods and Previously logged. Confirm the named serving, amount, unit and nutrition agree, then save and reopen a new log.

### Food projections share one source of truth

ID: food-projections-share-one-source-of-truth · Search & catalogue · Reviewed 2026-09-08

The executable projection matrix led to backend corrections for pinned private-food identity, recipe icons and trusted AI food links. Those corrections reached production with the Build 468 backend work. Cross-surface phone acceptance remains separate.

Next: Verify Search, barcode, saved libraries, favorites, AI results and diary reopening refer to the same food and preserve its serving and icon. Keep deleted/private food and account-isolation cases in future regression coverage.

### Every daily total uses the canonical diary rule

ID: secondary-daily-totals-use-the-canonical-rule · Diary & recurring · Reviewed 2026-09-08

The follow-up backend correction moved the remaining secondary daily-total consumers onto the shared resolver and was deployed with the Build 468 backend work. It preserves the entries-total-first rule and active food-log fallback. Mixed-history phone acceptance remains open.

Next: Compare diary, Insights, Coach, remaining macros and goal summaries on days with manual totals, food logs, deletions and fasting. Any new mismatch needs its own exact example.

### Immediate or offline reopen can hide a serving choice

ID: the-unit-chosen-in-food-editor-stays-chosen-everywhere · Food editing · Reviewed 2026-09-10

Existing grams-versus-scoops and pending/offline diary protections are retained. The newly reported calculator default was a separate missing save path and has its own delivered correction and acceptance card. Retained in regular TRAK 475, available in internal TestFlight.

Next: In regular TRAK 475, retain exact grams or named portions on immediate online/offline diary reopen. The calculator default is also delivered and has its own acceptance card; existing diary amounts must not change.

### iPhone inactive-state diagnostics need refinement

ID: an-iphone-inactive-moment-must-not-be-mislabeled-as-background · Release & reliability · Reviewed 2026-09-01

The inactive-but-visible diagnostic classification is corrected and installed in Build 464. Hidden, paused and idle lifecycle events remain informational. This phone round did not reproduce or accept the diagnostic path.

Next: Confirm any naturally reproduced visible inactive interruption keeps the foreground diagnostic while background suspension remains informational.

### Food and recipe sharing works between Android and iPhone

ID: food-and-recipe-sharing-works-between-android-and-iphone · Recipes & custom foods · Reviewed 2026-08-31

Recipe links open. One messaging-app path takes an extra browser permission step; full two-way import checks remain.

Next: Test food, custom food and recipe links in both directions, including Log once and Save/import.

### Coach repeatedly says it is settling

ID: coach-settling-recovery · Coach & insights · Reviewed 2026-08-31

The completed-goal mismatch is corrected and deployed. The affected phone's open/reopen check remains outstanding.

Next: Open Coach, leave and reopen it. Confirm the review appears without resetting the goal. No phone build needed.

### New recurring foods appear in upcoming slots today

ID: new-recurring-food-appears-in-today-s-still-upcoming-slot · Diary & recurring · Reviewed 2026-09-08

Backend admission and the native immediate-refresh correction are implemented in the later release lines. The full combined phone result for a newly scheduled food is still open.

Next: On Staging Build 33, add a food a few minutes ahead. Its planned card should appear immediately and log once at the saved time without changing unrelated cards.

### Logout protects unsaved changes

ID: logout-protects-unsaved-changes · Account & onboarding · Reviewed 2026-09-08

The standard slide-up warning and pending-write protection are retained in later releases. Stay signed in previously preserved pending food. Discard, failed-sync recovery, account isolation and current Android acceptance remain open.

Next: On the current staging build, verify Stay and Discard with disposable data, then failed-sync recovery and account changes. Repeat on Android using the matching release.

### Recurring foods refresh promptly after reopening

ID: recurring-foods-appear-promptly-after-reopening · Diary & recurring · Reviewed 2026-09-08

The earlier two-minute return delay has a separately tested reconciliation correction. Later release work retains recurring refresh protections, but the exact current-phone hard-close sequence is not signed off.

Next: On Staging Build 33, hard-close and reopen before and after a scheduled time. Confirm the planned card becomes the logged card and calorie total together. Capture any delay, including slow or offline recovery.

### Recurring cards transition without duplicates or gaps

ID: recurring-cards-transition-without-duplicates-or-gaps · Diary & recurring · Reviewed 2026-09-08

Later regular and staging releases retain duplicate, refresh-race, add/delete and card-transition protections. Full combined iPhone and Android acceptance is still open.

Next: On the current staging build, test scheduled logging, Log all today and on a future day, overlapping entries, template deletion and removal during refresh. Check one card and one calorie contribution per occurrence.

### Edit a database food’s serving size

ID: edit-the-serving-size-of-a-database-food · Food editing · Reviewed 2026-09-10

The serving/unit/icon editor is released, with later corrections for first-frame layout, Review state and stale post-save projections. It remains separate from calculator default memory. Complete save-and-reopen phone acceptance is still open. Retained in regular TRAK 475, available in internal TestFlight.

Next: On regular TRAK 475, confirm Edit opens promptly with the correct name, icon and Serving card. Change amount and unit; check Nutrition, Review, save/reopen, supported units, dark mode and larger text.

### Delete Undo appears without waiting for sync

ID: food-log-delete-undo-appears-without-waiting-for-sync · Diary & recurring · Reviewed 2026-09-08

The local-admission correction is retained in the later release lines. The previous delayed Undo report remains a required reconnect phone check rather than an assumed pass.

Next: On Staging Build 33, reconnect and immediately delete a disposable food. Undo should appear promptly, restore once and remain correct if sync fails.

### TRAK Custom reference-food publication

ID: trak-custom-food-publication · Search & catalogue · Reviewed 2026-09-08

The selected TRAK Custom nutrient support and native presentation were promoted through regular Builds 469/470 and backend 2714. This does not establish that every staged reference-food row was copied to production. Approved catalogue rows, coverage, source visibility and phone acceptance remain separate checks.

Next: Reconcile the approved reference-food inventory in each environment. Check the TRAK Custom shelf, nutrient data and source settings on regular Build 470 and current staging; keep unknown nutrient values unknown.

### Raw Chicken Breast shows household portion chips

ID: raw-chicken-breast-shows-household-portion-chips · Search & catalogue · Reviewed 2026-09-08

The reviewed-source eligibility correction is included in later backend work, and Staging Build 30 added weight-units-first ordering. The exact Raw Chicken portion and calorie phone check still needs a recorded pass.

Next: On Staging Build 33, open Raw Chicken Breast and check that its named portions appear after g, oz and lb, with correct gram and nutrition scaling.

### Edit the current goal weight and loss rate

ID: edit-current-goal-weight-and-rate-together · Coach & insights · Reviewed 2026-09-08

The new goal-weight step, review summary and shared current-goal update were delivered through the later staging builds and selected regular release. Goal and daily-target cards use the saved rate without restarting the journey. Phone acceptance across all consumers remains open.

Next: Change target weight and rate, confirm the review screen, then check Coach, Insights, milestones, predictions and daily targets after reopening. Test both lb and kg.

### Weight units stay consistent across goal editing

ID: body-weight-units-use-one-conversion-path · Coach & insights · Reviewed 2026-09-08

Staging Build 34 consolidates goal-edit and onboarding conversions through the shared weight-unit module. Local checks cover edit values, saved targets, weekly rates, repeated lb/kg switching and cold reopening. Further phone-review work remains separate; stone is unsupported.

Next: The staging owner must track any later phone findings separately and verify lb/kg input, display, save and reopen without drift.

### New Health weights appear without manual syncing

ID: automatic-health-weight-pickup-after-provider-publication · Health · Reviewed 2026-09-08

A foreground pickup correction is included in regular Builds 469/470. It rechecks for a scale measurement published after the first Health read or after returning to TRAK. Automated Apple Health and Health Connect tests cover outgoing weight/nutrition writes too; physical provider acceptance remains open.

Next: Publish a new scale weight while TRAK is open, then test a short app switch and return. Confirm one imported weight and verify manual food/weight writes still appear once in Apple Health or Health Connect. Confirm the intended staging source before testing there.

### Roll-On staging behaviour and minimum targets

ID: rollon-staging-behaviour-and-shared-minimum · Coach & insights · Reviewed 2026-09-10

The earlier staging failure still needs a final phone pass. The reviewed Coach/Roll-On packet is now in Staging Build 37 with the shared personal minimum, cache and missing-profile handling. Combined automated checks passed; this does not close the reported phone issue. Retained in regular TRAK 475, available in internal TestFlight.

Next: On regular TRAK 475, reproduce the reported day/action and verify allocation, Why details, incomplete profiles, changed minimums and preserved historical targets.

### Coach weekly check-in shows and applies the correct calories

ID: weekly-coach-review-displays-and-applies-one-valid-plan · Coach & insights · Reviewed 2026-09-10

The repair for zero-calorie first plans and incorrect repeat plans is retained in distributed Staging Build 39 with backend 2718. It keeps one review per period and applies the displayed current calories and macros. The newly reported checklist-animation timing issue is tracked separately. Retained in regular TRAK 475, available in internal TestFlight.

Next: Verify first check-in, redo, reopen and accept in the current staging app. All screens should show the same saved calories and macros; keep calculation correctness separate from the animation repair.

### Use the agreed personal calorie minimum everywhere

ID: personal-calorie-minimum-used-by-coach-goals-and-rollon · Coach & insights · Reviewed 2026-09-10

The agreed height/weight-based Standard minimum and optional Low setting are included with the Coach/Roll-On packet in Staging Build 37 and its paired backend. Explicit user choices are preserved and missing profile details are handled explicitly. Regular TRAK delivery is complete; new phone acceptance is separate. Retained in regular TRAK 475, available in internal TestFlight.

Next: The shared minimum is delivered in regular TRAK 475/backend 2722. Astra owns any profile-specific inconsistency reported across Coach, goal setup or Roll-On; retain explicit user choices.

### Test Coach check-ins without waiting a week

ID: repeat-coach-checkins-without-waiting-a-week · Coach & insights · Reviewed 2026-09-10

Staging Build 45/backend 2721 retain Repeat test check-in and Start next test week, including the earlier URL correction. Automated coverage passes; these controls remain exclusive to staging and are deliberately gated off in production 475/backend 2722.

Next: Use the controls in staging 45 for ordinary check-in testing. They reuse recorded data and do not invent a week of history. Accepted maintenance simulations remain valid.

### Micronutrient details open with the correct complete view

ID: micronutrient-details-open-with-complete-current-data · Coach & insights · Reviewed 2026-09-10

Regular TRAK 475 includes the complete shared nutrient preparation and covering caches developed through staging 45, plus the accepted shading, bars and edge corrections. Account/date/route guards and normal screen motion are retained.

Next: Astra handles any new incomplete-data report on 475, including saved long timeframes. Preserve the accepted staging graph evidence.

### All shows the full recorded nutrient history

ID: micronutrient-all-range-uses-recorded-history · Coach & insights · Reviewed 2026-09-10

Staging Build 34 contains the correction for 1Y to All remaining stuck at one year when recorded history is shorter. It uses the actual history span and retains Build 33 work. A related regular Build 470 correction remains separate; full phone acceptance is still open. Retained in regular TRAK 475, available in internal TestFlight.

Next: On regular TRAK 475, test repeated 1Y to All switching with less than and more than a year of history, including empty history, without closing the screen.

### Nutrient target markers remain visible

ID: micronutrient-target-markers-remain-visible · Coach & insights · Reviewed 2026-09-10

Build 40 restores the historical light and dark nutrient rail colours. Astra reviewed rendered examples and marker/range tests; nutrient values and target calculations are preserved. Retained in regular TRAK 475, available in internal TestFlight.

Next: On regular TRAK 475, check rail contrast and visible target markers across nutrient screens and Food Editor.

### Nutrient values and spacing match the agreed design

ID: micronutrient-formatting-and-spacing · Coach & insights · Reviewed 2026-09-10

Staging Builds 29/30 added the agreed numeric presentation and tighter legend-to-Today spacing, retained by Build 33. The subsequent regular formatting corrections are retained in the combined production source. These are presentation changes, not nutrition-data changes. Retained in regular TRAK 475, available in internal TestFlight.

Next: Check Today, Daily average, History, tooltips, percentages and small positive values on the intended build. Retain stored precision and verify the final regular/staging formatting agrees.

### Micronutrient coverage loads in regular TRAK

ID: micronutrient-coverage-production-retry-error · Coach & insights · Reviewed 2026-09-10

Build 470 restored the intended nutrient screen, then production backend 2715 fixed the coverage endpoint that was returning an error because of an environment mismatch. The backend correction is verified live. The full phone experience, including separate chart issues, remains open.

Next: The endpoint correction is retained in backend 2722 and regular TRAK 475. Astra owns any new coverage-load failure; retain graph defects as separate regression cards.

### Show weight units before Small, Medium and Large

ID: weight-units-before-named-food-portions · Food editing · Reviewed 2026-09-10

Staging Build 30 changed the serving-chip order to g, oz, lb before named portions such as Small, Medium and Large. Build 33 retains it. The change does not alter portion weights or food ranking. Retained in regular TRAK 475, available in internal TestFlight.

Next: Check several foods with named servings on regular TRAK 475, including scroll/overflow behaviour and correct calories after selecting a weight unit or named portion.

### Remember the serving set with the pack calculator

ID: remember-calculator-serving-when-food-is-reopened · Food editing · Reviewed 2026-09-10

Staging Build 34 includes the fix that saves calculated grams to the account and restores them through Search, Recents, barcode and restart. For example, 500 g divided by four servings reopens at 125 g. Phone acceptance remains open. Retained in regular TRAK 475, available in internal TestFlight.

Next: On regular TRAK 475, test every reopening route, correct calories, manual overrides, existing diary amounts and account switching. A failed save must be reported; cold offline restoration and older web-app preference migration are not included.

### Blueberries entered in grams must not become cups

ID: blueberries-grams-not-cup-count · Food editing · Reviewed 2026-09-08

A separate serving check requires a small gram amount to stay grams rather than being interpreted as a cup count. The new persistence tests preserve 24 g and correctly scaled calories for a food with cup portions. That is local fixture evidence, not an exact live UK/US catalogue or phone sign-off.

Next: Reproduce the exact reported Blueberries entry and route on the next staging candidate. Confirm 24 g stays grams and uses the selected catalogue row’s actual per-100 g nutrition.

### Recent flagged foods have corrected catalogue servings

ID: flagged-food-label-and-serving-corrections · Search & catalogue · Reviewed 2026-09-08

Five recent moderation cases received guarded live catalogue corrections with independent readback. The ASDA reduced-fat burger entry now uses one burger and its label nutrition rather than incorrectly treating those values as per 100 g. Existing diary history was preserved.

Next: Rescan or reselect the corrected products to verify the label serving and calories in the app. Track later catalogue drift separately from the broader unreleased verification-policy change.

### Move accepted staging work into regular TRAK safely

ID: promote-only-accepted-staging-work · Release & reliability · Reviewed 2026-09-08

Regular Builds 469/470 contain the earlier selected goal, nutrient, Search and Health bundle. Staging Build 38 and backend 2717 contain subsequent work, including the accepted maintenance policy and corrected Coach test-button request. Maintenance acceptance uses reviewed simulations; other changes retain their own acceptance requirements. Regular TRAK promotion has not occurred for this newer bundle.

Next: The release owner must reconcile the exact accepted changes into the latest regular baseline, preserve concurrent work, pair the required backend and verify the release artifacts before separately approved promotion. Retain the simulation-based maintenance acceptance decision.

### Goal changes must preserve earlier expenditure history

ID: goal-change-preserves-earlier-expenditure-history · Coach & insights · Reviewed 2026-09-08

The earlier Coach goal-history repair is included in the paired staging backend for Build 37. It preserves earlier expenditure records when a goal changes on a day without its own saved estimate and retains the applied adjustment after recalculation. Production promotion and phone acceptance remain open.

Next: On staging, change a goal on a day without a saved estimate, then check earlier history and later recalculation before regular rollout.

### Coach maintenance range matches the selected tolerance

ID: coach-maintenance-range-matches-selected-tolerance · Coach & insights · Reviewed 2026-09-10

The maintenance policy is accepted on independently reviewed simulations and is now integrated into live staging backend 2717, paired with Build 38. The accepted controller logic and confidence calculation are preserved in the integrated runtime. Existing simulation evidence remains valid; the policy is also live on production backend 2722. Retained in regular TRAK 475, available in internal TestFlight.

Next: The accepted maintenance policy is live in production 2722 and paired with 475. Reuse its reviewed simulations; do not require prepared phone histories or rerun them unless relevant logic changes. Broader Coach effectiveness remains separately tracked.

### Coach Accept responds immediately

ID: coach-accept-animation-starts-without-save-delay · Coach & insights · Reviewed 2026-09-10

Build 43 starts feedback immediately and includes the continuous tick correction. The animation does not hold mid-stroke for the network. Confirmation and return still require a successful save, and failed-save recovery is preserved. Retained in regular TRAK 475, available in internal TestFlight.

Next: The immediate, continuous feedback is delivered in regular TRAK 475. Astra owns any reported regression. Staging 45 retains repeat-check-in controls for testing; production keeps the ordinary weekly cycle.

### Coach result waits for its review checklist

ID: coach-result-waits-for-review-checklist · Coach & insights · Reviewed 2026-09-10

Build 40 waits for both Coach data and the completed review checklist before showing the result. Slow responses, retry, reduced motion and leaving the screen are covered by tests. Retained in regular TRAK 475, available in internal TestFlight.

Next: Regular TRAK 475 includes the loading-checklist fix. For repeatable testing, use staging 45 and confirm the checklist finishes before its result appears; production retains the normal weekly cycle.

### Daily targets show saved cycling values immediately

ID: cycling-save-updates-daily-targets-first-frame · Coach & insights · Reviewed 2026-09-10

Build 40 carries the exact saved cycling week through the real settings flow, so the first returned Insights card has the saved calories and macros. Cancellation, account changes and later target edits are covered. Retained in regular TRAK 475, available in internal TestFlight.

Next: On regular TRAK 475, save a different cycling plan and confirm the first returned daily-target card immediately matches it.

### EPA + DHA uses the combined 0.25 g target

ID: epa-dha-combined-standard-target · Coach & insights · Reviewed 2026-09-09

Build 40 and live backend 2719 now share the combined 0.25 g target, history and coverage contract. Complete components produce a known total; incomplete foods remain unknown. The deployed calculation probe exactly matches the reviewed candidate.

Next: On Build 40, verify the combined target and intake in overview/detail/coverage, including a food missing one component. Phone acceptance remains open.

### Edit goal returns with updated daily targets

ID: edit-goal-rate-updates-cycling-targets-on-return · Coach & insights · Reviewed 2026-09-10

Build 41 prepares the current daily targets before returning from Edit goal after a weekly loss-rate change, including different calories by day. It uses the existing target resolver; target calculations are unchanged. Retained in regular TRAK 475, available in internal TestFlight.

Next: On regular TRAK 475, change weekly loss rate, update the plan and confirm the first returned Insights targets match the new plan. Check both uniform and cycling targets.

### Explain the Standard and Low calorie minimums

ID: calorie-minimum-explanations-and-recommended-badge · Coach & insights · Reviewed 2026-09-10

Build 41 explains the Standard and Low allowances, marks Standard as Recommended and removes the size-based sentence. Displayed minimums remain calculated for the profile; the minimum policy is unchanged. Retained in regular TRAK 475, available in internal TestFlight.

Next: Review the wording and calculated Standard/Low amounts in regular TRAK 475, including larger text.

### Food micronutrients open full-screen with the serving shown

ID: food-micronutrients-fullscreen-serving-caption · Food editing · Reviewed 2026-09-10

Build 41 opens Food Editor micronutrients as a full screen, puts the serving in brackets after the food name and displays unit-bearing zero for blank food amounts. Missing nutrition remains unknown internally. Embedded recipe and meal panels keep their parent layout. Retained in regular TRAK 475, available in internal TestFlight.

Next: On regular TRAK 475, check food and recipe serving captions, full-screen opening, back navigation and blank values in light and dark mode.

### Restore the light-grey micronutrient background

ID: micronutrient-overview-light-background · Coach & insights · Reviewed 2026-09-10

Build 41 restores the light-grey background behind the main micronutrient overview so white cards remain visible. Dark mode is unchanged. Existing visual references verify the intended colours. Retained in regular TRAK 475, available in internal TestFlight.

Next: On regular TRAK 475, confirm the white nutrient cards stand out against the grey background in light mode.

### Remove the delay when reopening nutrient graphs

ID: micronutrient-graph-repeat-tap-delay · Coach & insights · Reviewed 2026-09-10

Build 45 retains early shared history preparation, covering caches and the normal transition. It adds stable first-frame Standard references, matching N-day bars/scale and corrected plot edges after the Build 44 phone report. Installed directly and available in TestFlight; automated checks pass and phone acceptance is tracked separately. Retained in regular TRAK 475, available in internal TestFlight.

Next: The reported graph rendering fix was accepted on staging 45 and is included in regular TRAK 475. Astra owns any new timing report; keep cold-open observations separate from the accepted rendering fix.

### Goal-rate editing from plan review includes goal weight

ID: goal-review-rate-edit-includes-goal-weight · Coach & insights · Reviewed 2026-09-09

Build 42 opens goal weight, then goal rate, when editing Goal rate from the plan review. It returns to the review before the final Update plan. Related goal and Insights checks and the full app suites pass; target calculations are unchanged.

Next: On Build 43, check the full edit-and-save sequence and the returned daily targets. Astra owns any remaining regression.

### Search foods sometimes fail to load micronutrients

ID: search-food-micronutrients-intermittent-retry · Food editing · Reviewed 2026-09-10

Regular TRAK 475 now recovers when a same-account Health refresh invalidates a pending food nutrient read, and retries one temporary request failure. All 21 focused cache/recovery checks pass, including account isolation and the shared retry limit. It is available in internal TestFlight. These fixes cover reproduced failure classes; the original phone incident was not conclusively traced.

Next: Astra owns any recurrence while opening Search foods in 475. Record the exact food and route if it occurs; the fix is delivered, with new phone acceptance tracked separately.

### Recipe Edit opens immediately

ID: recipe-editor-opens-without-waiting-for-detail · Recipes & custom foods · Reviewed 2026-09-10

Regular TRAK 475 opens Recipe Edit immediately while complete ingredients load, avoids unnecessary nutrient enrichment, retries one temporary failure and retains an actionable Retry screen. The 18-ingredient regression preserves original household amounts and one gram basis. An old cached recipe is not silently reopened for editing. Available in internal TestFlight.

Next: Astra owns reported Recipe Edit regressions on 475; retain Save & Log, complete ingredients and account isolation. Delivery is complete; new phone acceptance is separate.

### Improve widget layouts, starting with small Macros

ID: widget-layout-review-small-macros · Widgets · Reviewed 2026-09-10

The complete widget gallery was approved and implemented in regular TRAK 476. It includes lighter ring values, labels inside, matching iOS/Android polish, P/F/C ordering (kcal/P above F/C in 2x2), neutral actions, a thinner weighing-scale dial, matched scan stroke and wide Search with four actions. Native ring checks confirm continuous fill within the bounds. iOS is available in internal TestFlight; matching signed Android is ready for manual upload.

Next: Aadam reviews the delivered widgets in 476; Astra handles any layout regression. Older iOS Edit Widget rows can retain archived Carbs/Fat choices until edited or re-added, while the standard rendered order is P/F/C. Physical tint, sizing and OS refresh checks remain distinct from native render tests.

## Planned

### Add first-use guides for key app features

ID: native-ftux-feature-tutorial-modals · Account & onboarding · Reviewed 2026-09-09

Light and dark designs are approved for micronutrient bars, nutrition history, multi-food logging and Trend versus Scale weight. Quick Actions is excluded because it is being removed. Nothing is implemented or released.

Next: Later, build the approved native floating modal and carousel using the real app components. Define dismissal, replay, accessibility and reduced-motion behaviour before release.

### Night-shift and custom day-boundary logging

ID: night-shift-and-custom-day-boundary-logging · Diary & recurring · Reviewed 2026-08-31

Specified but intentionally not implemented; this needs one consistent date contract across the app.

Next: Design logging, offline replay, targets and Health together.

### General backend cursor sync

ID: general-backend-cursor-sync · Diary & recurring · Reviewed 2026-08-31

A backend candidate exists; the native app does not use it. This is a future efficiency improvement.

Next: Define incremental updates, deletion handling and safe fallbacks before rollout.

### Broader process-restoration polish

ID: broader-process-restoration-polish · Diary & recurring · Reviewed 2026-08-31

High-risk diary and Health flows are protected; broader screen-state restoration remains future work.

Next: Audit remaining screens by user impact.

### Backend reliability follow-ups

ID: confirmed-small-backend-fixes-from-the-muse-sol-deep-review-verification · Release & reliability · Reviewed 2026-09-09

The recipe-unlink precision fix is live on staging backend 2719. The earlier 400-to-399 loss was then traced to diary snapshot creation and corrected in a separate reviewed local patch. Other reliability follow-ups and inherited test failures remain open.

Next: Confirm normal unlink use on staging. Release the separately reviewed snapshot-precision correction through its own staging gate, and keep the outstanding test gaps visible.

### Import sleep from Apple Health and Health Connect

ID: import-sleep-from-apple-health-and-health-connect · Health · Reviewed 2026-08-31

Under consideration only; not implemented.

Next: Decide display and day-boundary behavior before platform integration.

### Full micronutrient and body-fat Health sync

ID: full-micronutrient-and-body-fat-health-sync · Health · Reviewed 2026-08-31

The agreed core Health flows are covered, not every vitamin, mineral or body-fat surface.

Next: Review platform support, permissions and two-way parity.

### Public-store launch

ID: public-store-launch · Release & reliability · Reviewed 2026-08-31

The app is in private beta. Public App Store and Google Play launch are separate future work.

Next: Finish beta acceptance, store assets and rollout checks.

### Remaining new-user and empty-state walk

ID: remaining-new-user-and-empty-state-walk · Account & onboarding · Reviewed 2026-08-31

Chart empty states are repaired; a broader fresh-account walkthrough remains.

Next: Review Coach, Roll-On, Insights, streaks and Suggested together.

### Dedicated first-run Create Account welcome screen

ID: dedicated-first-run-create-account-welcome-screen · Account & onboarding · Reviewed 2026-08-31

Designed at a high level but not built.

Next: Build and test the first-run signup and existing-account paths.

### Verify-email screen and Confirm Email rollout

ID: verify-email-screen-and-confirm-email-rollout · Account & onboarding · Reviewed 2026-08-31

The verification experience and rollout are not complete.

Next: Build resend/completion/recovery flows and test every sign-in method before enabling.

### Health disclaimer and consumer-health privacy consent

ID: health-disclaimer-and-consumer-health-privacy-consent · Account & onboarding · Reviewed 2026-08-31

Research and final consent wording are not complete.

Next: Obtain appropriate legal/platform review before implementation.

### Verified-email legacy-account auto-linking rollout

ID: verified-email-legacy-account-auto-linking-rollout · Account & onboarding · Reviewed 2026-08-31

The guarded linking engine exists but is not enabled for general rollout.

Next: Complete verified-email onboarding and regression testing first.

### Coach recalibrating indicator on the diary

ID: coach-recalibrating-indicator-on-the-diary · Coach & insights · Reviewed 2026-08-31

Separate from the shipped review-due flag; a recalibrating state is not implemented.

Next: Decide a subtle, clear presentation after due-flag acceptance.

### Broader roadmap and catalogue work

ID: broader-roadmap-and-catalogue-work · Search & catalogue · Reviewed 2026-08-31

Additional catalogue coverage and nutrition/display improvements remain in the broader roadmap.

Next: Promote one clearly scoped feature at a time.

### Native subscription and billing design

ID: design-brief-stripe-web-first-vs-native-in-app-purchase-revenuecat · Billing · Reviewed 2026-08-31

The native subscription approach has not been selected or implemented.

Next: Compare web and store billing, account entitlements, cancellation and restore behavior.

### App-wide copy review — paused

ID: app-copy-program · Release & reliability · Reviewed 2026-08-31

Paused by Aadam on 31 August. Accepted changes remain separate from unfinished Quick add/alcohol-calculator work. The latest unfinished slice still has failing checks; the whole copy program is not complete.

Next: Resume only when Aadam asks. Fix the recorded unfinished checks, complete independent review and then integrate only accepted changes into a separately approved phone build.

### Import Health changes while TRAK is fully closed

ID: health-import-while-trak-is-fully-closed · Health · Reviewed 2026-09-08

The foreground pickup correction does not provide continuous import while the app is killed. Background delivery needs its own platform design and testing.

Next: Scope iOS and Android background delivery separately, including permissions, battery limits, account safety and duplicate prevention.

### Keep imported food sources measurably up to date

ID: catalogue-source-freshness-and-refresh-policy · Search & catalogue · Reviewed 2026-09-08

The 7 September audit confirmed selected OFF/USDA imports, but found no implemented daily full-source delta sync. Recent row additions and local corrections do not prove that an entire source is fresh. Nightly housekeeping is a separate process.

Next: Define source versions, refresh dates and guarded update rules. Preview differences and preserve reviewed corrections before importing changes; track completion rather than inferring freshness from row timestamps.

### Evaluate search-engine alternatives after diagnosis

ID: food-search-engine-alternatives-measured-first · Search & catalogue · Reviewed 2026-09-08

Typesense, Meilisearch and a managed food API were reviewed as options. No migration is selected. TRAK already maintains an imported catalogue, and the outstanding phone/network delay must be measured before paying to replace search infrastructure.

Next: Compare uncached latency, food-ranking parity, catalogue licensing/freshness and total operating cost only if the measured bottleneck justifies a migration. Preserve current food identification and immediate View all.

### Review TRAK design for iPhone Duo and folding displays

ID: iphone-duo-foldable-design-review · Design · Reviewed 2026-09-10

Deferred design and implementation review requested for iPhone Duo. Apple’s 9 September announcement confirms separate outer/inner displays, folding and orientation changes, and Split View multitasking. Review compact and expanded layouts, navigation, food Search/editor, recipes, Coach, charts, keyboard/sheets and widgets. Preserve searches, scroll position and unsaved food edits when the available screen size changes. Consider useful wider layouts rather than simply enlarging the current phone UI. No design, code change or compatibility claim has been made.

Next: Astra owns the future review. Start with Apple’s official iPhone Duo/iOS SDK guidance and current Flutter support, then audit the latest TRAK release across outer, inner and narrow Split View sizes. Present proposed layouts and a focused resize/state-preservation test plan before implementation. Include existing iPhones and Android foldables in regression scope. Source: https://www.apple.com/newsroom/2026/09/apple-unveils-iphone-duo/

## In progress

### Complete the full Coach effectiveness review

ID: coach-outcome-evaluation-before-full-signoff · Coach & insights · Reviewed 2026-09-10

The accepted maintenance policy is now integrated into staging and live production backend 2722. Its reviewed simulations improve the original maintenance journeys from 20/34 to 30/34 inside the selected range after eight weeks and 25/34 to 34/34 after sixteen. The wider eligible comparison improves from 48/60 to 51/60 and 56/60 to 60/60, while calorie reversals fall from 87 to 8. Only 60 of 120 wider conditions reached maintenance; the remaining conditions are unmeasured after that transition. The original broader effectiveness failure is preserved.

Next: Broader effectiveness questions, including journeys that did not reach their first goal, remain separate from the accepted and staging-integrated maintenance policy. The Coach review owner should investigate those questions without changing the accepted simulation thresholds or reopening completed maintenance work.

### Compare Gemini Flash 3.8 across AI features

ID: gemini-flash38-ai-feature-evaluation · Recipes & custom foods · Reviewed 2026-09-08

The all-feature quality, speed and cost comparison is requested, and prior evaluation suites have been located. Small food-verifier experiments are preliminary and prompt-sensitive; they do not establish a production winner or complete the broader evaluation. No all-feature model switch is approved.

Next: Use fixed current baselines and unseen labelled examples for meal photos, recipe photos/import, label scans, chat and food verification. Count retries and external calls in cost, and report a keep/switch decision per feature.

### Strengthen evidence checks for barcoded foods

ID: barcode-verification-requires-product-evidence · Search & catalogue · Reviewed 2026-09-08

An all-region verification safeguard is implemented and tested locally, separate from the live one-off catalogue repairs. Review, a stale audit assumption about later diary additions, and the final Search cost check remain before backend rollout. No new phone build is required for that backend change.

Next: The food-verification owner must preserve original records while allowing later additions, rerun independent review and Search timing, then complete the separately approved backend rollout and live checks.

### Recipe logging preserves nutrition precision

ID: recipe-saving-preserves-nutrition-precision · Recipes & custom foods · Reviewed 2026-09-09

The larger Astra/Sol pilot reproduced the 400-to-399 calorie loss during diary snapshot creation. A reviewed one-line local fix preserves fractional ingredient calories. Four new real-route cases pass, including the published daily total, recipe edits, Tune and unlink. The same four older test failures occur on the unchanged baseline and remain recorded. This fix is not in Build 40 or live backend 2719.

Next: Prepare this separate backend correction on the latest staging source before its own release. Preserve old diary snapshots; retain the four recorded test gaps. Graft helped find supporting files but missed the decisive backend helper, so no token saving is claimed.

## Resolved live

### Draw complete nutrient graphs and align target-range edges

ID: nutrient-graph-complete-drawing-and-edges · Coach & insights · Reviewed 2026-09-10

Build 45 corrects incomplete Standard shading and a chart-window mismatch that allowed older history to change the visible bars and scale. Target and range segments now meet the plot edges while historical Custom gaps remain unknown. It is installed directly; internal TestFlight availability is confirmed. All six rendered regressions pass, as does the full app suite. Phone feedback on 10 September confirms the reported graph fix looks good. The accepted corrections are also included in regular TRAK 475.

Next: Astra preserves the accepted graph fix, historical Custom gaps and standard motion in future work. No repeated test is required solely because it was promoted.

### Search History matches stay visible

ID: previously-logged-food-stays-visible-as-search-results-finish · Search & catalogue · Reviewed 2026-08-31

Deployed. The reported partial-name search now works on the phone. Broader Search regression checks remain.

Next: Check other partial brand/name searches, hidden foods and saved portions.

### Recurring foods can be added again

ID: adding-and-re-enabling-recurring-foods-succeeds · Diary & recurring · Reviewed 2026-08-31

Deployed. Adding recurring foods is confirmed working on the phone. Re-enable and batch-add checks remain.

Next: Check re-enable, multiple additions and duplicate prevention.

### Reviewed backend security protections are deployed

ID: backend-security-hardening-september · Release & reliability · Reviewed 2026-09-08

The reviewed September backend protections were deployed and verified, and retained in the subsequent production release. This closes that specific release scope, not every outstanding reliability or security item.

Next: Keep the reviewed protections in future backend changes and track new findings separately. Sensitive implementation details stay in private engineering records.

### Refresh staging provisioning before the next iOS build

ID: refresh-staging-ios-provisioning · Release & reliability · Reviewed 2026-09-09

The same active staging profile signed Builds 42 and 43 successfully with HealthKit intact. Apple accepted both uploads. No Apple capability or production widget configuration was changed.

Next: Use the verified staging profile for subsequent builds and recheck it if shared Apple capabilities change again.

## Earlier sign-off

### Staging changes awaiting production

ID: staging-changes-awaiting-production · Production promotion · Reviewed 2026-09-10

All 18 staging change groups were delivered in regular TRAK 475 and remain included in 476, now available in internal TestFlight. Build 476 additionally contains the approved widget polish and repairs. Production backend 2722 is unchanged. Both signed packages pass verification; matching Android 476 is prepared for the existing manual Firebase upload. New phone acceptance and public App Store release are separate.

Next: Astra maintains this delivery record and handles regressions. Update regular TRAK to 476 in TestFlight; the accepted Build 45 graph result remains valid. Widget-specific Pixel checks stay on their own tasks.

### Keep newer production work when promoting staging

ID: preserve-production-work-during-staging-promotion · Production promotion · Reviewed 2026-09-10

Build 475 was built on the verified production Build 474 widget source. It retains widgets and picker corrections, Health weight pickup and Apple Health/Health Connect writes, saved-food cache and icons, AI/voice/recipe/recurring identity and household amounts. Signed artifacts retain production identity, App Groups and Health permissions. Android release lint also caught and corrected six duplicate shortcut rows inherited from the production small Today widget.

Next: Preserve this combined production source for later work. Source, signing and regression evidence is recorded; no new physical Health-write or widget acceptance is inferred.

### Promote staging micronutrient changes

ID: staging-promotion-micronutrients · Production promotion · Reviewed 2026-09-10

Included in regular TRAK 475 and production backend 2722: nutrient rails, references, legends and precision; EPA+DHA agreement; full-screen food nutrients and serving captions; zero display and light-mode background; complete graph/Today data and navigation guards. Build 45 retains early history preparation and caches, restores normal screen motion and corrects first-frame shading, bar scaling and edges. The reported graph fix has phone sign-off; backend 2721 adds iodine reads.

Next: Promotion is complete for the backend and internal iPhone app. Astra retains feature-specific acceptance and regression records; Android uses the prepared signed APK for the existing manual upload.

### Promote staging Coach and goal changes

ID: staging-promotion-coach-and-goals · Production promotion · Reviewed 2026-09-10

Included in regular TRAK 475 and production backend 2722: personal minimum and copy, coherent reviews, maintenance correction and post-goal simulations, immediate daily/cycling targets, goal-weight/rate review editing, unit/slider fixes and Coach loading/Accept feedback. Build 43 includes the continuous tick correction.

Next: Promotion is complete for the backend and internal iPhone app. Astra retains feature-specific acceptance and regression records; Android uses the prepared signed APK for the existing manual upload.

### Promote staging Search and food changes

ID: staging-promotion-search-and-food · Production promotion · Reviewed 2026-09-10

Included in regular TRAK 475 and production backend 2722: dedicated native iOS search transport and diagnostics; remembered calculator servings; g/oz/lb before named portions; validated food calculations with offline recovery; Add commits the selected-food list; recipe unlink keeps fractional nutrition. Both signed packages pass verification and iOS 475 is available in internal TestFlight.

Next: Promotion is complete for the backend and internal iPhone app. Astra retains feature-specific acceptance and regression records; Android uses the prepared signed APK for the existing manual upload.

### Repair older nutrient test-database fixtures

ID: backend-nutrient-test-fixture-schema-gaps · Release verification · Reviewed 2026-09-10

The repaired test schemas and fixtures are merged with production backend 2722. The combined suite passes 1,826 tests and 348 subtests, with 90 separate real PostgreSQL checks. Ownership, cancellation and transaction assertions are preserved. Verified local equivalents were used under the standing manual release rule; hosted jobs did not execute.

Next: Keep the current fixtures and pinned combined test manifest in future backend work. This repair is complete.

### Build 461 backend, database and worker prerequisites are live

ID: build-461-backend-database-and-worker-prerequisites-are-live · Release & reliability · Reviewed 2026-08-31

Recorded complete in an earlier release or verification checkpoint. This is historical coverage, not a fresh test of every current device.

Next: Keep covered by regression tests; track any newly reported regression separately.

### Recurring-food database repair is live

ID: recurring-food-database-repair-is-live · Diary & recurring · Reviewed 2026-08-31

Recorded complete in an earlier release or verification checkpoint. This is historical coverage, not a fresh test of every current device.

Next: Keep covered by regression tests; track any newly reported regression separately.

### Account, photo and diary authentication outage is fixed

ID: account-photo-and-diary-authentication-outage-is-fixed · Release & reliability · Reviewed 2026-08-31

Recorded complete in an earlier release or verification checkpoint. This is historical coverage, not a fresh test of every current device.

Next: Keep covered by regression tests; track any newly reported regression separately.

### Retired FatSecret UK foods are hidden

ID: retired-fatsecret-uk-foods-are-hidden · Release & reliability · Reviewed 2026-08-31

Recorded complete in an earlier release or verification checkpoint. This is historical coverage, not a fresh test of every current device.

Next: Keep covered by regression tests; track any newly reported regression separately.

### Final Build 461 native source is frozen and tested

ID: final-build-461-native-source-is-frozen-and-tested · Release & reliability · Reviewed 2026-08-31

Recorded complete in an earlier release or verification checkpoint. This is historical coverage, not a fresh test of every current device.

Next: Keep covered by regression tests; track any newly reported regression separately.

### Final iOS Build 461 is available in TestFlight

ID: final-ios-build-461-is-available-in-testflight · Release & reliability · Reviewed 2026-08-31

Recorded complete in an earlier release or verification checkpoint. This is historical coverage, not a fresh test of every current device.

Next: Keep covered by regression tests; track any newly reported regression separately.

### Matching Android Build 461 is distributed through Firebase

ID: matching-android-build-461-is-distributed-through-firebase · Release & reliability · Reviewed 2026-08-31

Recorded complete in an earlier release or verification checkpoint. This is historical coverage, not a fresh test of every current device.

Next: Keep covered by regression tests; track any newly reported regression separately.

### Health nutrition replace-the-day repair shipped

ID: health-nutrition-replace-the-day-repair-shipped · Health · Reviewed 2026-08-31

Recorded complete in an earlier release or verification checkpoint. This is historical coverage, not a fresh test of every current device.

Next: Keep covered by regression tests; track any newly reported regression separately.

### Health Connect connected state uses real OS permissions

ID: health-connect-connected-state-uses-real-os-permissions · Health · Reviewed 2026-08-31

Recorded complete in an earlier release or verification checkpoint. This is historical coverage, not a fresh test of every current device.

Next: Keep covered by regression tests; track any newly reported regression separately.

### Health Connect requests only the permissions TRAK uses

ID: health-connect-requests-only-the-permissions-trak-uses · Health · Reviewed 2026-08-31

Recorded complete in an earlier release or verification checkpoint. This is historical coverage, not a fresh test of every current device.

Next: Keep covered by regression tests; track any newly reported regression separately.

### Health Connect install and navigation handling is repaired

ID: health-connect-install-and-navigation-handling-is-repaired · Health · Reviewed 2026-08-31

Recorded complete in an earlier release or verification checkpoint. This is historical coverage, not a fresh test of every current device.

Next: Keep covered by regression tests; track any newly reported regression separately.

### Regional Verified confectionery follow-ups are live

ID: regional-verified-confectionery-follow-ups-are-live · Search & catalogue · Reviewed 2026-08-31

Recorded complete in an earlier release or verification checkpoint. This is historical coverage, not a fresh test of every current device.

Next: Keep covered by regression tests; track any newly reported regression separately.

### All 15 reviewed Berlinki hot dogs are visible in exact Search

ID: all-15-reviewed-berlinki-hot-dogs-are-visible-in-exact-search · Search & catalogue · Reviewed 2026-08-31

Recorded complete in an earlier release or verification checkpoint. This is historical coverage, not a fresh test of every current device.

Next: Keep covered by regression tests; track any newly reported regression separately.

### Suggested endpoint work was reduced from 52 to about 10 queries

ID: suggested-endpoint-work-was-reduced-from-52-to-about-10-queries · Search & catalogue · Reviewed 2026-08-31

Recorded complete in an earlier release or verification checkpoint. This is historical coverage, not a fresh test of every current device.

Next: Keep covered by regression tests; track any newly reported regression separately.

### Duplicate Suggested and Recent identities are merged

ID: duplicate-suggested-and-recent-identities-are-merged · Search & catalogue · Reviewed 2026-08-31

Recorded complete in an earlier release or verification checkpoint. This is historical coverage, not a fresh test of every current device.

Next: Keep covered by regression tests; track any newly reported regression separately.

### Suggested cards use the real portion and corrected branded calories

ID: suggested-cards-use-the-real-portion-and-corrected-branded-calories · Search & catalogue · Reviewed 2026-08-31

Recorded complete in an earlier release or verification checkpoint. This is historical coverage, not a fresh test of every current device.

Next: Keep covered by regression tests; track any newly reported regression separately.

### Shared food links can forward into TRAK

ID: shared-food-links-can-forward-into-trak · Search & catalogue · Reviewed 2026-08-31

Recorded complete in an earlier release or verification checkpoint. This is historical coverage, not a fresh test of every current device.

Next: Keep covered by regression tests; track any newly reported regression separately.

### Save to library and share authentication are repaired

ID: save-to-library-and-share-authentication-are-repaired · Food editing · Reviewed 2026-08-31

Recorded complete in an earlier release or verification checkpoint. This is historical coverage, not a fresh test of every current device.

Next: Keep covered by regression tests; track any newly reported regression separately.

### Android food editing uses TRAK's custom keypad

ID: android-food-editing-uses-trak-s-custom-keypad · Search & catalogue · Reviewed 2026-08-31

Recorded complete in an earlier release or verification checkpoint. This is historical coverage, not a fresh test of every current device.

Next: Keep covered by regression tests; track any newly reported regression separately.

### Multi-select action controls have a stable press response

ID: multi-select-action-controls-have-a-stable-press-response · Search & catalogue · Reviewed 2026-08-31

Recorded complete in an earlier release or verification checkpoint. This is historical coverage, not a fresh test of every current device.

Next: Keep covered by regression tests; track any newly reported regression separately.

### Slow search and scan infrastructure cause was removed

ID: slow-search-and-scan-infrastructure-cause-was-removed · Search & catalogue · Reviewed 2026-08-31

Recorded complete in an earlier release or verification checkpoint. This is historical coverage, not a fresh test of every current device.

Next: Keep covered by regression tests; track any newly reported regression separately.

### Nightly catalogue work runs on a real scheduler

ID: nightly-catalogue-work-runs-on-a-real-scheduler · Release & reliability · Reviewed 2026-08-31

Recorded complete in an earlier release or verification checkpoint. This is historical coverage, not a fresh test of every current device.

Next: Keep covered by regression tests; track any newly reported regression separately.

### Backup retention and freshness protections are live

ID: backup-retention-and-freshness-protections-are-live · Release & reliability · Reviewed 2026-08-31

Recorded complete in an earlier release or verification checkpoint. This is historical coverage, not a fresh test of every current device.

Next: Keep covered by regression tests; track any newly reported regression separately.

### Point-in-time database recovery is live

ID: point-in-time-database-recovery-is-live · Release & reliability · Reviewed 2026-08-31

Recorded complete in an earlier release or verification checkpoint. This is historical coverage, not a fresh test of every current device.

Next: Keep covered by regression tests; track any newly reported regression separately.

### Catalogue bulk-repair safeguards were independently checked

ID: catalogue-bulk-repair-safeguards-were-independently-checked · Release & reliability · Reviewed 2026-08-31

Recorded complete in an earlier release or verification checkpoint. This is historical coverage, not a fresh test of every current device.

Next: Keep covered by regression tests; track any newly reported regression separately.

### TRAK MCP deploys boot successfully again

ID: trak-mcp-deploys-boot-successfully-again · Release & reliability · Reviewed 2026-08-31

Recorded complete in an earlier release or verification checkpoint. This is historical coverage, not a fresh test of every current device.

Next: Keep covered by regression tests; track any newly reported regression separately.

### Backend boot no longer takes a blocking catalogue lock

ID: backend-boot-no-longer-takes-a-blocking-catalogue-lock · Release & reliability · Reviewed 2026-08-31

Recorded complete in an earlier release or verification checkpoint. This is historical coverage, not a fresh test of every current device.

Next: Keep covered by regression tests; track any newly reported regression separately.

### Web workers recycle without retaining image-decode memory

ID: web-workers-recycle-without-retaining-image-decode-memory · Release & reliability · Reviewed 2026-08-31

Recorded complete in an earlier release or verification checkpoint. This is historical coverage, not a fresh test of every current device.

Next: Keep covered by regression tests; track any newly reported regression separately.

### Coach check-ins can always exit safely

ID: coach-check-ins-can-always-exit-safely · Coach & insights · Reviewed 2026-08-31

Recorded complete in an earlier release or verification checkpoint. This is historical coverage, not a fresh test of every current device.

Next: Keep covered by regression tests; track any newly reported regression separately.

### Day nutrition summary uses the Roll-On-adjusted target

ID: day-nutrition-summary-uses-the-roll-on-adjusted-target · Coach & insights · Reviewed 2026-08-31

Recorded complete in an earlier release or verification checkpoint. This is historical coverage, not a fresh test of every current device.

Next: Keep covered by regression tests; track any newly reported regression separately.

### Goal-weight changes update Milestones and Predictions

ID: goal-weight-changes-update-milestones-and-predictions · Coach & insights · Reviewed 2026-08-31

Recorded complete in an earlier release or verification checkpoint. This is historical coverage, not a fresh test of every current device.

Next: Keep covered by regression tests; track any newly reported regression separately.

### Empty charts retain the TRAK visual frame

ID: empty-charts-retain-the-trak-visual-frame · Coach & insights · Reviewed 2026-08-31

Recorded complete in an earlier release or verification checkpoint. This is historical coverage, not a fresh test of every current device.

Next: Keep covered by regression tests; track any newly reported regression separately.

### Body measurement cards handle sparse data cleanly

ID: body-measurement-cards-handle-sparse-data-cleanly · Coach & insights · Reviewed 2026-08-31

Recorded complete in an earlier release or verification checkpoint. This is historical coverage, not a fresh test of every current device.

Next: Keep covered by regression tests; track any newly reported regression separately.

### Beta release notes are internal until public launch

ID: beta-release-notes-are-internal-until-public-launch · Coach & insights · Reviewed 2026-08-31

Recorded complete in an earlier release or verification checkpoint. This is historical coverage, not a fresh test of every current device.

Next: Keep covered by regression tests; track any newly reported regression separately.

### Privacy-safe iOS termination diagnostic trail is integrated

ID: privacy-safe-ios-termination-diagnostic-trail-is-integrated · Release & reliability · Reviewed 2026-08-31

Recorded complete in an earlier release or verification checkpoint. This is historical coverage, not a fresh test of every current device.

Next: Keep covered by regression tests; track any newly reported regression separately.

### Previous-session termination diagnostics use the right severity

ID: previous-session-termination-diagnostics-use-the-right-severity · Release & reliability · Reviewed 2026-08-31

Recorded complete in an earlier release or verification checkpoint. This is historical coverage, not a fresh test of every current device.

Next: Keep covered by regression tests; track any newly reported regression separately.

### App scrolling and page transitions share the native motion system

ID: app-scrolling-and-page-transitions-share-the-native-motion-system · Account & onboarding · Reviewed 2026-08-31

Recorded complete in an earlier release or verification checkpoint. This is historical coverage, not a fresh test of every current device.

Next: Keep covered by regression tests; track any newly reported regression separately.

### System status and navigation bars follow TRAK's theme

ID: system-status-and-navigation-bars-follow-trak-s-theme · Account & onboarding · Reviewed 2026-08-31

Recorded complete in an earlier release or verification checkpoint. This is historical coverage, not a fresh test of every current device.

Next: Keep covered by regression tests; track any newly reported regression separately.

### Android screenshots and screen recordings work

ID: android-screenshots-and-screen-recordings-work · Account & onboarding · Reviewed 2026-08-31

Recorded complete in an earlier release or verification checkpoint. This is historical coverage, not a fresh test of every current device.

Next: Keep covered by regression tests; track any newly reported regression separately.

### Copy-to-calendar clears the Samsung navigation area

ID: copy-to-calendar-clears-the-samsung-navigation-area · Account & onboarding · Reviewed 2026-08-31

Recorded complete in an earlier release or verification checkpoint. This is historical coverage, not a fresh test of every current device.

Next: Keep covered by regression tests; track any newly reported regression separately.

### Samsung adaptive icon and copy-to-today motion are repaired

ID: samsung-adaptive-icon-and-copy-to-today-motion-are-repaired · Account & onboarding · Reviewed 2026-08-31

Recorded complete in an earlier release or verification checkpoint. This is historical coverage, not a fresh test of every current device.

Next: Keep covered by regression tests; track any newly reported regression separately.

### Google sign-in works on Android

ID: google-sign-in-works-on-android · Account & onboarding · Reviewed 2026-08-31

Recorded complete in an earlier release or verification checkpoint. This is historical coverage, not a fresh test of every current device.

Next: Keep covered by regression tests; track any newly reported regression separately.

### Legacy account history recovery

ID: legacy-account-history-recovery · Account & onboarding · Reviewed 2026-08-31

A reported legacy-account history mismatch was repaired and verified.

Next: Keep covered by regression tests; track any newly reported regression separately.

### Duplicate legacy/native account recovery

ID: duplicate-legacy-native-account-recovery · Account & onboarding · Reviewed 2026-08-31

A reported duplicate-account case was repaired with preservation checks.

Next: Keep covered by regression tests; track any newly reported regression separately.

### Phone signups enter onboarding correctly

ID: phone-signups-enter-onboarding-correctly · Account & onboarding · Reviewed 2026-08-31

Recorded complete in an earlier release or verification checkpoint. This is historical coverage, not a fresh test of every current device.

Next: Keep covered by regression tests; track any newly reported regression separately.

### Privacy policy and account-deletion page are live

ID: privacy-policy-and-account-deletion-page-are-live · Account & onboarding · Reviewed 2026-08-31

Recorded complete in an earlier release or verification checkpoint. This is historical coverage, not a fresh test of every current device.

Next: Keep covered by regression tests; track any newly reported regression separately.

### Verified-email legacy linking engine is deployed dark

ID: verified-email-legacy-linking-engine-is-deployed-dark · Account & onboarding · Reviewed 2026-08-31

Recorded complete in an earlier release or verification checkpoint. This is historical coverage, not a fresh test of every current device.

Next: Keep covered by regression tests; track any newly reported regression separately.

### App Links and shared links resolve into the native app

ID: app-links-and-shared-links-resolve-into-the-native-app · Account & onboarding · Reviewed 2026-08-31

Recorded complete in an earlier release or verification checkpoint. This is historical coverage, not a fresh test of every current device.

Next: Keep covered by regression tests; track any newly reported regression separately.

### AI features and recipe import use the current Gemini route

ID: ai-features-and-recipe-import-use-the-current-gemini-route · Account & onboarding · Reviewed 2026-08-31

Recorded complete in an earlier release or verification checkpoint. This is historical coverage, not a fresh test of every current device.

Next: Keep covered by regression tests; track any newly reported regression separately.

### Upload and verify final Build 455 Sentry symbols

ID: upload-and-verify-final-build-455-sentry-symbols · Release & reliability · Reviewed 2026-08-31

Recorded complete in an earlier release or verification checkpoint. This is historical coverage, not a fresh test of every current device.

Next: Keep covered by regression tests; track any newly reported regression separately.

### Diary return and weekly hero refresh

ID: diary-return-and-weekly-hero-refresh · Release & reliability · Reviewed 2026-08-31

Recorded complete in an earlier release or verification checkpoint. This is historical coverage, not a fresh test of every current device.

Next: Keep covered by regression tests; track any newly reported regression separately.

### Recurring foods end-to-end behaviour

ID: recurring-foods-end-to-end-behaviour · Diary & recurring · Reviewed 2026-08-31

Recorded complete in an earlier release or verification checkpoint. This is historical coverage, not a fresh test of every current device.

Next: Keep covered by regression tests; track any newly reported regression separately.

### Account and profile regression on the final artifact

ID: account-and-profile-regression-on-the-final-artifact · Release & reliability · Reviewed 2026-08-31

Recorded complete in an earlier release or verification checkpoint. This is historical coverage, not a fresh test of every current device.

Next: Keep covered by regression tests; track any newly reported regression separately.

### Scanner recovery and correction sheets

ID: scanner-recovery-and-correction-sheets · Release & reliability · Reviewed 2026-08-31

Recorded complete in an earlier release or verification checkpoint. This is historical coverage, not a fresh test of every current device.

Next: Keep covered by regression tests; track any newly reported regression separately.

### Barcode and Label mode handoff is seamless

ID: barcode-and-label-mode-handoff-is-seamless · Release & reliability · Reviewed 2026-08-31

Recorded complete in an earlier release or verification checkpoint. This is historical coverage, not a fresh test of every current device.

Next: Keep covered by regression tests; track any newly reported regression separately.

### Named-serving and gram-volume maths stays exact

ID: named-serving-and-gram-volume-maths-stays-exact · Release & reliability · Reviewed 2026-08-31

Recorded complete in an earlier release or verification checkpoint. This is historical coverage, not a fresh test of every current device.

Next: Keep covered by regression tests; track any newly reported regression separately.

### Missing-day trend-weight interpolation

ID: missing-day-trend-weight-interpolation · Release & reliability · Reviewed 2026-08-31

Recorded complete in an earlier release or verification checkpoint. This is historical coverage, not a fresh test of every current device.

Next: Keep covered by regression tests; track any newly reported regression separately.

### A new account never flashes the diary before onboarding

ID: a-new-account-never-flashes-the-diary-before-onboarding · Release & reliability · Reviewed 2026-08-31

Recorded complete in an earlier release or verification checkpoint. This is historical coverage, not a fresh test of every current device.

Next: Keep covered by regression tests; track any newly reported regression separately.

### Health on iPhone, Pixel and Samsung

ID: health-on-iphone-pixel-and-samsung · Release & reliability · Reviewed 2026-08-31

Recorded complete in an earlier release or verification checkpoint. This is historical coverage, not a fresh test of every current device.

Next: Keep covered by regression tests; track any newly reported regression separately.

### Keep one shortcut row in the Android small Today widget

ID: android-small-today-widget-duplicate-shortcuts · Release verification · Reviewed 2026-09-10

The production widget layout contained seven identical shortcut rows. Build 475 removes six duplicate insertions and keeps one bottom row with the same Search, Scan and Log weight actions. All other widget nodes and binding IDs are unchanged. The final Android release passes fatal lint and signature checks; the matching APK is ready for manual distribution.

Next: Keep the corrected layout in future production builds. Android phone appearance remains separate from the passing release build.
