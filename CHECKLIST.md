# TRAK — master checklist

Updated: 2026-09-08T07:51:38Z · Reviewed through 2026-09-08

- native: Regular TRAK Build 470 is available in internal TestFlight; its remaining nutrient issues are not signed off. TRAK Staging Build 34 is available in internal TestFlight. A matching regular-build Android file is prepared; current Android distribution and phone acceptance still need confirmation.
- backend: Production backend 2715 and staging backend 2714 are live. These are separate environments. Production includes the selected goal, Search and nutrient support plus the coverage-endpoint repair; staging adds the latest Search network diagnostics.
- next: Build 34 contains the chart-range, target-marker, weight-unit and calculator-serving fixes on top of Build 33. Coach repairs and subsequent phone-review work remain separate local candidates. Integrate against the latest staging source and complete the relevant phone checks before promoting further changes to regular TRAK.

> Public, read-only project status. No login needed.

> Historical checks are retained separately; a new regression is not closed by an older sign-off.

> Updates appear here after the shared checklist is published. Local edits and chat messages do not update it.

> Reconciled through 8 September. Released changes, local fixes and reported phone results are tracked separately. This board update does not release a TRAK app build.

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

### Coach maintenance range matches the selected tolerance

ID: coach-maintenance-range-matches-selected-tolerance · Coach & insights · Reviewed 2026-09-08

The saved maintenance percentage is shown to the user, but Coach currently uses a fixed ±1.5 lb band to decide when to make corrective adjustments. For example, a selected ±2% range at 200 lb is ±4 lb. This mismatch is recorded separately; Coach rules were not changed to improve test scores.

Next: The Coach owner must establish the intended relationship between the selected range and the adjustment trigger, add behavior checks, and review any correction before staging.

## Next phone build

### Native code organization

ID: native-code-organisation-server-companion-later · Release & reliability · Reviewed 2026-08-31

The first native organization batch is tested and saved remotely, but not released. Later batches and backend restructuring are not included.

Next: Keep behavior unchanged; scope and approve the next batch separately.

### Coach weekly check-in shows and applies the correct calories

ID: weekly-coach-review-displays-and-applies-one-valid-plan · Coach & insights · Reviewed 2026-09-08

The reported zero-calorie first plan and incorrect 1,500-calorie repeat led to a local repair of review creation, refresh and acceptance. It keeps one review per period and applies exactly the displayed current targets. Backend and app tests pass, but the fix is not deployed or in a distributed staging build.

Next: The Coach owner must integrate with the latest staging app and matching backend, then repeat the original first-check-in, redo, reopen and accept flows. Confirm all screens use the same saved calories and macros.

### Use the agreed personal calorie minimum everywhere

ID: personal-calorie-minimum-used-by-coach-goals-and-rollon · Coach & insights · Reviewed 2026-09-08

The agreed height/weight-based Standard minimum and optional Low setting are implemented locally across Coach, goal setup and Roll-On. Existing explicit user choices are preserved, and missing profile details are handled explicitly. The change is not released; the TDEE calculation was not retuned.

Next: Validate Standard and Low with representative profiles and confirm every target surface uses the same minimum. Complete the Coach staging release and phone checks before regular rollout.

### Test Coach check-ins without waiting a week

ID: repeat-coach-checkins-without-waiting-a-week · Coach & insights · Reviewed 2026-09-08

Repeat check-in and Next test week are implemented with the separate Coach repair. They are not included in Build 34 and are not deployed or enabled. They await a later Coach staging release; the controls preserve accepted history and keep production unchanged.

Next: Integrate with the latest staging source, verify the combined app and matching backend, then enable only in that Coach staging release. Test repeat, advance, retries and account boundaries.

### Verify the actual app before wider release

ID: signed-artifact-release-and-promotion-checks · Release & reliability · Reviewed 2026-09-08

A local release gate checks the signed iPhone and Android artifacts and requires recorded phone acceptance for claimed features. Release checks can run on the release Mac. Build 470 remains internal-only; these new protections do not retrospectively approve its unresolved nutrient issues.

Next: The release owner must use the gate for the next candidate, verify matching platform artifacts and collect the required phone acceptance before wider promotion.

### Goal changes must preserve earlier expenditure history

ID: goal-change-preserves-earlier-expenditure-history · Coach & insights · Reviewed 2026-09-08

The local repair preserves earlier expenditure records when a goal changes on a day without its own saved estimate. It also retains the current adjustment after recalculation. The unchanged independent cases pass on the candidate and still reproduce the old bug on production source. It is not in Build 34; no later release build is assigned.

Next: The Coach owner must retain this repair in the combined staging candidate, verify it with the matching backend, and test goal changes and later recalculation before any production release.

## Needs checking

### Recipes and custom foods appear missing

ID: verify-saved-library-visibility-after-the-filter-correction · Recipes & custom foods · Reviewed 2026-09-08

The saved-library and Search projection corrections are retained in later regular and staging releases. Missing records were not established; the reported problem was delayed or filtered presentation. Complete current-phone acceptance remains open.

Next: On Staging Build 33, open Recipes and Foods after a catalogue query and confirm both complete libraries appear, remain loggable and ignore the unrelated catalogue filter. Preserve existing data.

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

ID: recipes-use-one-serving-across-every-search-surface · Recipes & custom foods · Reviewed 2026-09-08

The shared current-recipe projection and preserved AI/private-food identity are included in later release work. Old diary snapshots remain historical. The cross-surface phone check still needs explicit acceptance.

Next: On Staging Build 33, open the same recipe through Recipes, My foods and Previously logged. Confirm the named serving, amount, unit and nutrition agree, then save and reopen a new log.

### Food projections share one source of truth

ID: food-projections-share-one-source-of-truth · Search & catalogue · Reviewed 2026-09-08

The executable projection matrix led to backend corrections for pinned private-food identity, recipe icons and trusted AI food links. Those corrections reached production with the Build 468 backend work. Cross-surface phone acceptance remains separate.

Next: Verify Search, barcode, saved libraries, favorites, AI results and diary reopening refer to the same food and preserve its serving and icon. Keep deleted/private food and account-isolation cases in future regression coverage.

### Every daily total uses the canonical diary rule

ID: secondary-daily-totals-use-the-canonical-rule · Diary & recurring · Reviewed 2026-09-08

The follow-up backend correction moved the remaining secondary daily-total consumers onto the shared resolver and was deployed with the Build 468 backend work. It preserves the entries-total-first rule and active food-log fallback. Mixed-history phone acceptance remains open.

Next: Compare diary, Insights, Coach, remaining macros and goal summaries on days with manual totals, food logs, deletions and fasting. Any new mismatch needs its own exact example.

### Immediate or offline reopen can hide a serving choice

ID: the-unit-chosen-in-food-editor-stays-chosen-everywhere · Food editing · Reviewed 2026-09-08

Existing grams-versus-scoops and pending/offline diary protections are retained. The newly reported calculator default was a separate missing save path and now has its own unreleased fix card.

Next: On Staging Build 33, log a food in grams that also offers Scoop and immediately reopen online and offline. Confirm the unit and exact portions survive with unchanged nutrition. Test calculator default memory in the next build containing that fix.

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

ID: edit-the-serving-size-of-a-database-food · Food editing · Reviewed 2026-09-08

The serving/unit/icon editor is released, with later corrections for first-frame layout, Review state and stale post-save projections. It remains separate from calculator default memory. Complete save-and-reopen phone acceptance is still open.

Next: On Staging Build 33, confirm Edit opens promptly with the correct name, icon and Serving card. Change amount and unit; check Nutrition, Review, save/reopen, supported units, dark mode and larger text.

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

ID: rollon-staging-behaviour-and-shared-minimum · Coach & insights · Reviewed 2026-09-08

Roll-On was reported to fail in staging while regular TRAK worked; that report has no recorded final phone pass. The separate Coach candidate also removes a hidden minimum and uses the shared personal minimum, including cache and missing-profile handling. Those newer changes are not released.

Next: Reproduce the staging report with the exact day and action. After integrating the Coach candidate, verify allocation, Why details, incomplete profiles, changed minimums and preserved historical targets without changing redistribution rules.

### Micronutrient details open with the correct complete view

ID: micronutrient-details-open-with-complete-current-data · Coach & insights · Reviewed 2026-09-08

Successive staging fixes address cold Today data, partial first charts, delayed targets and stale timeframe responses. Build 33 includes the selected-range retry work. The remaining All-range and marker defects are tracked separately, so the whole nutrient feature is not signed off.

Next: On Build 33 and its successor, open Today, History and nutrient details cold and warm, switch ranges rapidly and retry a failed load. Check for partial old data, delayed target changes or layout jumps.

### All shows the full recorded nutrient history

ID: micronutrient-all-range-uses-recorded-history · Coach & insights · Reviewed 2026-09-08

Staging Build 34 contains the correction for 1Y to All remaining stuck at one year when recorded history is shorter. It uses the actual history span and retains Build 33 work. A related regular Build 470 correction remains separate; full phone acceptance is still open.

Next: On Staging Build 34, test repeated 1Y to All switching with less than and more than a year of history, including empty history, without closing the screen.

### Nutrient target markers remain visible

ID: micronutrient-target-markers-remain-visible · Coach & insights · Reviewed 2026-09-08

Staging Build 34 restores solid nutrient target markers across standard, overview and History cards. Values and positions are retained, and automated visual tests pass. Phone acceptance remains open.

Next: On Staging Build 34, verify marker visibility in light and dark modes across nutrient card styles while retaining the same targets, positions and ranges.

### Nutrient values and spacing match the agreed design

ID: micronutrient-formatting-and-spacing · Coach & insights · Reviewed 2026-09-08

Staging Builds 29/30 added the agreed numeric presentation and tighter legend-to-Today spacing, retained by Build 33. Further regular Build 470 formatting corrections are local and unreleased. These are presentation changes, not nutrition-data changes.

Next: Check Today, Daily average, History, tooltips, percentages and small positive values on the intended build. Retain stored precision and verify the final regular/staging formatting agrees.

### Micronutrient coverage loads in regular TRAK

ID: micronutrient-coverage-production-retry-error · Coach & insights · Reviewed 2026-09-08

Build 470 restored the intended nutrient screen, then production backend 2715 fixed the coverage endpoint that was returning an error because of an environment mismatch. The backend correction is verified live. The full phone experience, including separate chart issues, remains open.

Next: Retry coverage in existing regular Build 470; no new app build is needed for the endpoint repair. Record the phone result and keep any range or marker defect on its own card.

### Show weight units before Small, Medium and Large

ID: weight-units-before-named-food-portions · Food editing · Reviewed 2026-09-08

Staging Build 30 changed the serving-chip order to g, oz, lb before named portions such as Small, Medium and Large. Build 33 retains it. The change does not alter portion weights or food ranking.

Next: Check several foods with named servings on Build 33, including scroll/overflow behaviour and correct calories after selecting a weight unit or named portion.

### Remember the serving set with the pack calculator

ID: remember-calculator-serving-when-food-is-reopened · Food editing · Reviewed 2026-09-08

Staging Build 34 includes the fix that saves calculated grams to the account and restores them through Search, Recents, barcode and restart. For example, 500 g divided by four servings reopens at 125 g. Phone acceptance remains open.

Next: On Staging Build 34, test every reopening route, correct calories, manual overrides, existing diary amounts and account switching. A failed save must be reported; cold offline restoration and older web-app preference migration are not included.

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

The selected goal, nutrient, Search and Health bundle reached regular Builds 469/470 with matching backend support. Newer staging transport, diagnostics, serving and nutrient follow-ups are separate; Coach also remains unreleased. There is no blanket approval that every staging change is production-ready.

Next: The release owner must reconcile exact accepted changes into the latest regular baseline, preserve concurrent work, pair any required backend first and verify signed artifacts and phone behaviour before promotion.

## Planned

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

ID: confirmed-small-backend-fixes-from-the-muse-sol-deep-review-verification · Release & reliability · Reviewed 2026-08-31

Several independently verified reliability and hardening items remain. Sensitive implementation details stay in the private engineering records.

Next: Address them as small tested changes, separately from mechanical refactoring.

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

## In progress

### Complete the full Coach effectiveness review

ID: coach-outcome-evaluation-before-full-signoff · Coach & insights · Reviewed 2026-09-08

The expanded simulation completed 360 paired cases, including Maintain, Set new goal, delays and cancellations. All 68 eligible plan changes passed the cycle and reset checks. Only 20 of 34 maintenance journeys ended within the selected range; all 34 eligible new-goal journeys attained the next goal. The comparison users never triggered official completion, so their next-plan outcomes were not measured. The original failed score is preserved.

Next: The Coach owner must investigate maintenance misses and the selected-range mismatch, add coverage for comparison users completing a goal, and retain the recorded results. Full effectiveness sign-off and physical staging checks remain open; this does not establish that the recent fixes worsened outcomes.

### Compare Gemini Flash 3.8 across AI features

ID: gemini-flash38-ai-feature-evaluation · Recipes & custom foods · Reviewed 2026-09-08

The all-feature quality, speed and cost comparison is requested, and prior evaluation suites have been located. Small food-verifier experiments are preliminary and prompt-sensitive; they do not establish a production winner or complete the broader evaluation. No all-feature model switch is approved.

Next: Use fixed current baselines and unseen labelled examples for meal photos, recipe photos/import, label scans, chat and food verification. Count retries and external calls in cost, and report a keep/switch decision per feature.

### Strengthen evidence checks for barcoded foods

ID: barcode-verification-requires-product-evidence · Search & catalogue · Reviewed 2026-09-08

An all-region verification safeguard is implemented and tested locally, separate from the live one-off catalogue repairs. Review, a stale audit assumption about later diary additions, and the final Search cost check remain before backend rollout. No new phone build is required for that backend change.

Next: The food-verification owner must preserve original records while allowing later additions, rerun independent review and Search timing, then complete the separately approved backend rollout and live checks.

## Resolved live

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

## Earlier sign-off

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
