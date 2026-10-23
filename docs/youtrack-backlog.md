# Next Diploma Development Increment

**Status, October 2026:** Seven proposed repository tasks for the next technical increment, ready to transfer into YouTrack. They are not live issues or implemented features. Deadlines are proposed ends of weeks after development kickoff; assign calendar dates when scheduling. The team first agrees the bounded top-down action set (`move`, `inspect`, `collect`, `interact`, `choose`) and asset limits described in the [scope draft](decisions/scope-and-contract.md). The [technology comparison](technology-comparison.md) identifies provisional Spring Boot/PostgreSQL/RabbitMQ, Python worker and Phaser 3 options; no stack is final here.

**Increment outcome:** The same hand-authored game data passes strict checks and runs to an ending in a browser. A small project/job API and author UI exercise the seam with an explicitly labelled fixture-backed job. Separately, the AI pilot produces or rejects one candidate under the same schema. This increment does not claim an integrated, reliable story-to-game generator.

## Define the game schema and hand-authored key/door fixture

- **Owner/reviewer:** Zhaksylyk Aldiyar (platform) / Yessengeldi Nurgeldi (generation). **Priority:** Critical. **Deadline:** End of Week 1.
- **Depends on:** All three owners agreeing the supported actions, asset allowlist and first-game limits.
- **Build:** Versioned JSON Schema or equivalent, one valid key/door game fixture and one documented start-to-win action trace. Keep project/user/job IDs separate from game data.
- **Input → output:** Candidate with `schemaVersion`, scenes, entities, initial state, actions, goal/win predicate, controls and simplifications → a game-data file the validator and runtime can both consume.
- **Steps:** Fix field types, action preconditions/effects and size limits; author the fixture; record expected action/state transitions.
- **Acceptance:** Collecting the key permits opening the door and triggers an explicit ending; trying the door first does not. Unknown schema major version and out-of-limit data have defined errors. Almadi and Nurgeldi review the same fixture/contract.
- **Trace:** `R-04–05`, `R-08`, `Q-03`; `V02`, `V05`.

## Implement schema, reference and action validation

- **Owner/reviewer:** Yessengeldi Nurgeldi (generation) / Zhaksylyk Aldiyar (platform). **Priority:** Critical. **Deadline:** End of Week 2.
- **Depends on:** Define the game schema and hand-authored key/door fixture.
- **Build:** Callable validator with fixture-based checks and stable error codes; retain reports for later independent platform-gate tests.
- **Input → output:** Game-data JSON → `{valid, schemaVersion, findings[]}`; never silently alter the candidate.
- **Steps:** Check schema/limits, start scene, unique and resolved IDs, allowed operations, declared state variables and approved asset references.
- **Acceptance:** The valid fixture passes. Unknown action/version, broken target, undeclared state, unsafe asset and oversize content each fail with a specific finding; no invalid fixture is reported valid.
- **Trace:** `R-05`, `R-07`, `Q-01`, `Q-03`; `V02–V04`.

## Play the hand-authored fixture in the browser

- **Owner/reviewer:** Almadi Madiuly (frontend/runtime) / Yessengeldi Nurgeldi (generation). **Priority:** Critical. **Deadline:** End of Week 4.
- **Depends on:** Define the game schema and hand-authored key/door fixture; implement schema, reference and action validation.
- **Build:** Fixed runtime adapter for the agreed top-down scene, action preconditions/effects, visible goal/controls, ending and restart. Phaser 3 remains a provisional renderer choice.
- **Input → output:** Valid fixture game data → rendered scene and start/action/ending events; restart → initial state.
- **Steps:** Parse approved data, render allowed assets, apply declarative actions, show state feedback, and handle invalid/missing data.
- **Acceptance:** A reviewer cannot open the door before collecting the key, can reach the ending afterward, and can restart. Invalid data displays a controlled error rather than partial play. Record fixture hash and browser version; no model-generated JavaScript executes.
- **Trace:** `R-08–09`, `Q-01`, `Q-06`; `V14–V15`.

## Create a project/version API and fixture-backed job

- **Owner/reviewer:** Zhaksylyk Aldiyar (platform) / Almadi Madiuly (frontend). **Priority:** Critical. **Deadline:** End of Week 3.
- **Depends on:** Define the game schema and hand-authored key/door fixture.
- **Build:** Draft project create/read, generation submission and status operations backed by persistent project, version and job records. A development-only worker returns the validated hand-authored fixture; it must be labelled as fixture-backed.
- **Input → output:** Authenticated story and parameters → project/version/generation IDs and immediate `queued`; status read → IDs, timestamp, actual state and safe message; completed fixture job → reference to the exact fixture version.
- **Steps:** Store immutable version input, return before job work, persist allowed state transitions and use an explicit development fixture handoff.
- **Acceptance:** Reload returns the same job/version state; a second deliberate attempt has a new version without replacing the first. Invalid input makes no job; foreign or unknown IDs reveal no story or artifact. The fixture route does not masquerade as AI generation.
- **Trace:** `R-01–03`, `R-10`, `Q-02`; `V01`, `V06`, `V11`.

## Connect the story form and job-progress view

- **Owner/reviewer:** Almadi Madiuly (frontend/UX) / Zhaksylyk Aldiyar (platform). **Priority:** High. **Deadline:** End of Week 4.
- **Depends on:** Create a project/version API and fixture-backed job.
- **Build:** Editable story, genre intent, goal and main-action form plus a progress view, using the [static prototype](../prototype/README.md) only as design reference.
- **Input → output:** Reviewed form values → one API submission and displayed project/version/job IDs; generation ID → polled server status after navigation or reload.
- **Steps:** Add labels and field errors, connect API calls, prevent accidental duplicate clicks, poll until terminal state and explain fixture-backed results.
- **Acceptance:** Saved values match the reviewed form; empty fields show corrections. Reload preserves the same job and real status. A failed/pending job has no Play action; network loss says status is uncertain, not failed. Keyboard and 375/768/1280 px checks find no clipped essentials.
- **Trace:** `R-01–03`, `Q-04`; `V01`, `V06`, `V17`.

## Generate one candidate under the shared game schema

- **Owner/reviewer:** Yessengeldi Nurgeldi (AI generation) / Zhaksylyk Aldiyar (platform). **Priority:** High. **Deadline:** End of Week 5.
- **Depends on:** Define the game schema and hand-authored key/door fixture; implement schema, reference and action validation.
- **Build:** Bounded worker pilot for one supported story, with a malformed-output case and an unsupported-essential-mechanic case. This is an offline pilot, not a production generation endpoint.
- **Input → output:** Versioned request `{generation_id, project_version_id, spec_version, story_ref, parameters}` → candidate game data, interpreted goal/actions and `simplifications[]`, or a classified failure without a playable artifact.
- **Steps:** Extract intent, map only to approved actions, generate candidate scenes/rules, run full validator and bounded winning-path check, then retain report and trace.
- **Acceptance:** A supported story yields schema-valid data with goal, central action and replayable winning path or a clear failure. Broken references and unsupported essential actions do not pass; search timeout is `unverified`, not ready. Record prompt/config, candidate hash and simplification reasons. One success is not reported as a general success rate.
- **Trace:** `R-04–08`, `Q-03`, `Q-07`; `V02–V05`, `V16`.

## Reproduce the fixture-backed author-to-play path

- **Owner/reviewer:** Zhaksylyk Aldiyar (platform integration) / Almadi Madiuly (frontend). **Priority:** High. **Deadline:** End of Week 6.
- **Depends on:** Play the hand-authored fixture in the browser; create a project/version API and fixture-backed job; connect the story form and job-progress view.
- **Build:** Clean-start instructions and one automated/API plus browser smoke test for the fixture-backed request, status, exact-version launch and ending.
- **Input → output:** Fixed story/request and known fixture hash → correlated project/version/job/fixture trace and browser recording; injected invalid fixture or failed job → controlled failure with no Play action.
- **Steps:** Start documented services, submit through the form, capture status sequence, launch the selected fixture and replay the key/door path; exercise one negative case.
- **Acceptance:** Another team member reproduces the same IDs, fixture hash, action state change and ending from a recorded commit. Invalid fixture or failed job never launches. Evidence explicitly calls this a hand-authored runtime and integration baseline, not a generated game.
- **Trace:** `R-01–03`, `R-08–09`, `Q-06–07`; `V06`, `V14–V15`, `V18`.

## Later implementation milestones

These are sequencing markers, not detailed tickets for this submission. Create implementable issues when the first increment's schema, runtime and API behavior are verified:

1. Integrate the AI worker with durable queue recovery, bounded repair, independent platform validation, immutable publication and authorized game-data delivery.
2. Complete ready-result, simplification, project-history and deliberate-retry screens against the approved API; verify negative and accessibility paths.
3. Run the [fixed-corpus evaluation](../tests/evaluation-prompts.md) under the [verification protocol](verification-plan.md), reporting every trial, browser ending, narrative-fidelity judgment and failure.
