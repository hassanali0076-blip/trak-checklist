# Staging changes awaiting production

Updated 10 September 2026. Astra maintains this list at every staging release and
production promotion. [Visual checklist](https://trak-checklist.hassanali0076.chatgpt.site/staging-to-production).

Current staging is **app Build 45 + backend 2721**. Build 45's reported graph
fix is accepted on the phone. Regular TRAK retains its separate production build;
production backend **2718** is independently confirmed live.

## Release readiness

Astra has brought all 18 staging groups onto the latest production source in
isolated candidates, preserving widgets, Health, search identities and recipe
household amounts. **This is not deployed yet.** The combined backend passes
1,826 tests and 348 subtests; a separate disposable PostgreSQL run passes 90
checks, including real transactions and offline replay. The combined app passes
4,261 current sign-in tests and 122 older sign-in tests, with no failures.
Unsigned iOS compilation also passes. Hosted checks cannot currently start;
the equivalent checks have passed locally. Signed release and artifact acceptance
remain separate steps.

The production database needs two additive tables for serving-calculation
validation. A read-only dry run confirmed they are missing and made no changes.
The normal older deployment migration will not create them. Astra owns the
reviewed migration and release sequence; no live data has been changed.

The previous 443/142 file counts were an old comparison snapshot. The new
candidate inventory records the actual integrated changes and deliberate
production protections. It is not a blanket copy of staging.

## All 18 staging groups included in the candidate

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
| Faster prepared nutrient graphs, short ALL history, retries and navigation safeguards | Build 45 retains earlier preparation, normal transition and swipe-back, and corrects first-frame shading, bar scaling and reference edges. The reported Build 45 graph fix has phone acceptance. |
| Clearer initial food nutrient loading and failure diagnostics | The candidate now recovers an interrupted same-account read and one transient failure; phone verification remains separate. |
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
fix; it does not close unrelated checks or the production integration gate.

## Fixes not delivered yet

| Work | Current state |
| --- | --- |
| Food micronutrients sometimes finish with Retry | A same-account Health refresh and a first temporary server failure now recover automatically. All 21 focused cache/recovery tests pass, including account isolation. The original phone incident has not been conclusively traced; this new correction is not yet on the phone. |
| Recipe Edit waits before opening | The candidate opens the editor immediately with a loading state, fetches full ingredients without nutrient enrichment, retries one transient failure and offers Retry if needed. Household amounts remain intact. It does not silently edit an old cached recipe. |
| Recipe-save precision pilot | Separate local candidate; excluded from this batch because it was not delivered by staging. |
| Older backend test-database gaps | Repaired in the integration candidate. The combined backend and real PostgreSQL checks now pass, with account, cancellation and transaction checks retained. |

## Keep the newer production work

Production already has work missing from staging. A promotion must preserve:

- Home-screen widgets and their sign-out, snapshot and deep-link integration, including newer selectable nutrient rings, configurable Quick actions and fibre data.
- Automatic Health weight pickup, Apple Health writes and Health Connect behaviour.
- Saved-food Search cache invalidation and icon persistence after edits, deletion,
  imports and app restart.
- AI, voice, recipe and recurring-food identity, icons and serving calculations.
- Production release checks, configuration, current release notes and signing.
- The separately released backend 2716 recipe matching and recovery when an AI ingredient identity becomes stale.
- Backend 2718 persists original recipe household amounts alongside one gram calculation total, supports household-unit editing, and avoids counting the same amount twice. These newer production changes are preserved in the combined candidate.

## How this stays current

Astra updates both this public list and the private source ledger for each
staging release or production port. Each item retains its delivery state,
owner, remaining checks and production completion evidence. The private checker
detects a stale file inventory or changed fetched production source. A green
build or an old commit message does not close phone regressions.

Next: Astra completes hosted checks and immutable release review,
then handles the guarded database migration, backend verification and production
app build through the release process. Build 45 graph acceptance remains valid;
there is no need to repeat that test merely because the checklist changed.
Updating this list deploys neither the app nor the backend. Research and other
unimplemented master-checklist requests are separate from this release.
