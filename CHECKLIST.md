# TRAK — master checklist

Updated: 2026-08-31T18:33:54Z · Reviewed through 2026-08-31

- native: Build 462 · iOS TestFlight
- backend: Recurring first-day correction live · 31 August
- next: Install Build 462 and check Search opening, saved libraries, recurring refresh and safe logout. Android 462 is ready; Firebase distribution is unconfirmed.

> Public, read-only project status. No login needed.

> Historical checks are retained separately; a new regression is not closed by an older sign-off.

> Updates appear here after the shared checklist is published. Local edits and chat messages do not update it.

## Known issue

### Suggested and Recent cards arrive late when opening Search

ID: suggested-and-recent-foods-feel-immediate-and-relevant · Search & catalogue · Reviewed 2026-08-31

iOS TestFlight Build 462 includes the tested correction that lets ready server cards appear without waiting for disk-cache reads and prevents late cached cards replacing them. The reported phone delay and wider long-idle freeze remain open until checked.

Next: Install Build 462 and check fresh open, long-idle return and offline loading. Capture request-to-card timings if delay remains; an upload does not confirm the phone issue is resolved.

### Regional product typos can miss a valid result

ID: regional-verified-product-typos-recover-safely · Search & catalogue · Reviewed 2026-08-31

The reported regional-product typo is diagnosed. A general vocabulary and matching correction is not yet implemented.

Next: Fix general typo recovery with false-positive and Fast/Full regressions, not a product-specific alias.

### Immediate or offline reopen can hide a serving choice

ID: the-unit-chosen-in-food-editor-stays-chosen-everywhere · Food editing · Reviewed 2026-08-31

The persisted grams-versus-scoops fix is in Build 461. A narrower optimistic/offline row does not retain all portion choices before server confirmation.

Next: Carry serving choices into the initial diary row; test immediate reopen online and offline.

### iPhone inactive-state diagnostics need refinement

ID: an-iphone-inactive-moment-must-not-be-mislabeled-as-background · Release & reliability · Reviewed 2026-08-31

An inactive-but-visible moment can be classified as background. This affects diagnostics, not saved diary or Health records.

Next: Correct the lifecycle classification in a later native change and add regression tests.

### Large text still clips on some Android screens

ID: large-text-remains-usable-across-android-phones · Accessibility · Reviewed 2026-08-31

Real Samsung screenshots show clipping in macro labels, calorie insights and Recipe Builder fields despite earlier improvements.

Next: Reproduce with maximum font size and screen zoom; fix adaptive layout and recheck Pixel/iPhone.

### Food-source coverage review needs reconciliation

ID: custom-source-inventory-reconciliation · Search & catalogue · Reviewed 2026-08-31

A source-access assessment missed datasets already held locally. The assessment was corrected, but worldwide source exhaustion has not been established. This is a research/review issue, not a new phone regression.

Next: Reconcile existing source versions, nutrient coverage and recorded permissions before claiming remaining gaps cannot be filled. No automatic food or database changes.

## Next phone build

### Native code organization

ID: native-code-organisation-server-companion-later · Release & reliability · Reviewed 2026-08-31

The first native organization batch is tested and saved remotely, but not released. Later batches and backend restructuring are not included.

Next: Keep behavior unchanged; scope and approve the next batch separately.

## Needs checking

### Recipes and custom foods appear missing

ID: verify-saved-library-visibility-after-the-filter-correction · Recipes & custom foods · Reviewed 2026-08-31

The catalogue-filter correction is available in iOS TestFlight Build 462. Saved records were confirmed present. Android distribution and the exact phone trigger and recovery remain unconfirmed.

Next: Install Build 462 and test opening, filtering and logging from both libraries. Do not reset or recreate existing data.

### Offline and restart food-log recovery

ID: offline-and-restart-food-log-recovery · Diary & recurring · Reviewed 2026-08-31

Diary identity, offline replay and deletion handling are implemented. Full connectivity-change and restart acceptance remains.

Next: Add, edit, move, copy and delete while going offline; reopen and confirm the intended diary survives.

### Recurring foods log at their exact local time

ID: recurring-foods-become-real-entries-at-their-exact-local-time · Diary & recurring · Reviewed 2026-08-31

Backend and scheduler are live. Full open/background/closed-app acceptance remains. The separate native return-refresh correction is queued for the next build.

Next: Verify saved minutes, timezone changes and one diary entry per occurrence; repeat after the next native release.

### Coach check-in flag appears on the diary only when due

ID: coach-check-in-flag-appears-on-the-diary-only-when-due · Coach & insights · Reviewed 2026-08-31

The due-only diary flag is shipped. Complete on-phone timing and completion checks are still open.

Next: Confirm absent before due, visible when due, and cleared after completion or skip.

### Verified and Branded foods stay correctly classified and unique

ID: verified-and-branded-foods-stay-correctly-classified-and-unique · Search & catalogue · Reviewed 2026-08-31

The backend classification correction is live. Final checks of Common, Verified and Branded shelves remain.

Next: Check government foods in Common, reviewed products in Verified, and unreviewed products in Branded.

### Common foods use the correct household portions

ID: common-foods-use-the-correct-household-portions · Search & catalogue · Reviewed 2026-08-31

Build 461 includes reviewed portion families and wording fixes. Several foods passed; remaining oat-milk, onion and macro-ring checks are open.

Next: Check exact oat milk, onion portion scaling and the zero-to-filled macro-ring animation.

### Food and recipe sharing works between Android and iPhone

ID: food-and-recipe-sharing-works-between-android-and-iphone · Recipes & custom foods · Reviewed 2026-08-31

Recipe links open. One messaging-app path takes an extra browser permission step; full two-way import checks remain.

Next: Test food, custom food and recipe links in both directions, including Log once and Save/import.

### Coach repeatedly says it is settling

ID: coach-settling-recovery · Coach & insights · Reviewed 2026-08-31

The completed-goal mismatch is corrected and deployed. The affected phone's open/reopen check remains outstanding.

Next: Open Coach, leave and reopen it. Confirm the review appears without resetting the goal. No phone build needed.

### New recurring foods appear in upcoming slots today

ID: new-recurring-food-appears-in-today-s-still-upcoming-slot · Diary & recurring · Reviewed 2026-08-31

Deployed on 31 August. A new food scheduled later today is admitted today; elapsed or untimed slots start tomorrow. Existing skip flags are not cleared.

Next: Add a food a few minutes ahead; confirm it appears now and logs once at the saved time. No new phone build needed.

### Logout protects unsaved changes

ID: logout-protects-unsaved-changes · Account & onboarding · Reviewed 2026-08-31

Implemented, tested and reviewed; available in iOS TestFlight Build 462. Android distribution and phone verification remain open.

Next: Install Build 462 and verify Stay/Discard, failed-sync recovery and account isolation.

### Recurring foods refresh promptly after reopening

ID: recurring-foods-appear-promptly-after-reopening · Diary & recurring · Reviewed 2026-08-31

The tested and reviewed correction is available in iOS TestFlight Build 462. It waits for the real diary before removing due placeholders. Installation, Android distribution and phone acceptance remain open.

Next: Install Build 462; test short/long returns, slow connections and offline recovery.

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

### TRAK Custom reference-food publication

ID: trak-custom-food-publication · Search & catalogue · Reviewed 2026-08-31

Nine food profiles and expanded nutrient evidence have been reviewed offline. This does not mean those foods are published or available in Search. Some nutrient values remain unsupported.

Next: Test the publication adapter and nutrient mapping, then obtain separate approval for any live food publication. Preserve unknown values and existing reviewed snapshots.

## In progress

### Recurring cards transition without duplicates or gaps

ID: recurring-cards-transition-without-duplicates-or-gaps · Diary & recurring · Reviewed 2026-08-31

Local corrections for overlapping or disappearing cards, safe handling of ambiguous older entries and synchronized card/calorie updates have passed scoped review and tests. They are not released. This is separate from Build 462 return-refresh coverage.

Next: Coordinator closes the combined review findings and reruns final tests. Backend/schema release, a new phone build and on-device transition checks follow under separate approval.

### Edit a database food’s serving size

ID: edit-the-serving-size-of-a-database-food · Food editing · Reviewed 2026-08-31

The eight-unit backend contract and native editor are implemented and scoped-reviewed: slide-up unit/icon selectors, matching nutrition/review values and approved styling. Combined review found recipe-splitting snapshot, estimate-label and typography gaps. Repairs are active; not in a phone build.

Next: Finish the three final repairs, full tests and scoped re-review. Then separately approve backend/schema release and a phone build, followed by save/reopen, unit, nutrition and device checks.

## Resolved live

### Search History matches stay visible

ID: previously-logged-food-stays-visible-as-search-results-finish · Search & catalogue · Reviewed 2026-08-31

Deployed. The reported partial-name search now works on the phone. Broader Search regression checks remain.

Next: Check other partial brand/name searches, hidden foods and saved portions.

### Recurring foods can be added again

ID: adding-and-re-enabling-recurring-foods-succeeds · Diary & recurring · Reviewed 2026-08-31

Deployed. Adding recurring foods is confirmed working on the phone. Re-enable and batch-add checks remain.

Next: Check re-enable, multiple additions and duplicate prevention.

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
