# Diploma Development Tasks

**Status, October 2026:** Proposed repository tasks ready to copy into YouTrack. They are not claims of live tracker issues or implemented features. Each task has one owner and a different reviewer. Dependencies refer to task titles below. Deadlines are proposed as ends of weeks after the development kickoff; assign calendar dates when copying the tasks into YouTrack. The target is one bounded top-down 2D story-to-browser-game slice; the [requirements](requirements.md) and [verification plan](verification-plan.md) specify detailed behavior.

## Specify supported actions and game schema

- **Owner:** Zhaksylyk Aldiyar (platform). **Reviewer:** Yessengeldi Nurgeldi (generation).
- **Priority:** Critical. **Deadline:** End of Week 1 after development kickoff (proposed).
- **Dependency:** None; agree the action set with Almadi (runtime) and Nurgeldi (generation) before freezing the schema.
- **Deliverable:** Versioned game/job schemas and one valid hand-authored game fixture with a goal and ending.
- **Acceptance:** Schemas define scene/entity IDs, allowed actions and effects, controls, ending predicate, simplifications, bounds, and project/version/job IDs. The fixture uses only agreed actions and has a replayable start-to-win sequence; all three owners can consume the same fields.
- **Trace:** `R-04–05`, `R-08`, `Q-03`; `V02`, `V05`.

## Validate game schema and references

- **Owner:** Yessengeldi Nurgeldi (generation). **Reviewer:** Zhaksylyk Aldiyar (platform).
- **Priority:** Critical. **Deadline:** End of Week 2 after development kickoff (proposed).
- **Dependency:** Specify supported actions and game schema.
- **Deliverable:** Strict validator and valid/invalid fixture set.
- **Acceptance:** The valid fixture passes; unknown schema version or action, duplicate/broken references, and disallowed assets fail with stable error codes. Record validator results against exact fixture hashes.
- **Trace:** `R-05`, `R-07`, `Q-01`; `V02–V04`.

## Persist projects, story requests and versions

- **Owner:** Zhaksylyk Aldiyar (platform). **Reviewer:** Almadi Madiuly (frontend).
- **Priority:** Critical. **Deadline:** End of Week 2 after development kickoff (proposed).
- **Dependency:** Specify supported actions and game schema.
- **Deliverable:** Project/version create and read API with stored story and parameters.
- **Acceptance:** A valid request returns stable IDs; two attempts create distinct immutable versions. Read/list returns the owner's records, while another user cannot read them; invalid input creates no version.
- **Trace:** `R-01–02`, `R-10–11`, `Q-02`; `V01`, `V11`.

## Queue jobs and expose durable status

- **Owner:** Zhaksylyk Aldiyar (platform). **Reviewer:** Yessengeldi Nurgeldi (generation).
- **Priority:** Critical. **Deadline:** End of Week 3 after development kickoff (proposed).
- **Dependency:** Persist projects, story requests and versions.
- **Deliverable:** Versioned worker handoff and status endpoint.
- **Acceptance:** Submission returns a generation ID and `queued` before worker completion. Polling after reload shows the same IDs, timestamps and allowed `queued → generating → validating → ready` or `failed` transitions. A worker receives the matching version and schema reference.
- **Trace:** `R-02–03`, `R-12`, `Q-02`; `V06`.

## Recover failed handoff and duplicate jobs

- **Owner:** Zhaksylyk Aldiyar (platform). **Reviewer:** Yessengeldi Nurgeldi (generation).
- **Priority:** High. **Deadline:** End of Week 4 after development kickoff (proposed).
- **Dependency:** Queue jobs and expose durable status.
- **Deliverable:** Bounded timeout/retry handling and idempotent job processing.
- **Acceptance:** Broker outage and worker restart resolve to recorded recovery or bounded failure, never a silent permanent `queued` state. Redelivery of one event retains one job and terminal outcome; a deliberate new request creates a new linked version. Retain fault-injection trace.
- **Trace:** `R-12`, `Q-02–03`; `V08–V10`.

## Run the hand-authored game in a fixed browser runtime

- **Owner:** Almadi Madiuly (frontend/runtime). **Reviewer:** Yessengeldi Nurgeldi (generation).
- **Priority:** Critical. **Deadline:** End of Week 4 after development kickoff (proposed).
- **Dependency:** Specify supported actions and game schema; validate game schema and references.
- **Deliverable:** Runnable browser scene driven by the valid fixture, with movement, interaction, ending and restart.
- **Acceptance:** A reviewer follows setup instructions, performs a consequential action, reaches the explicit ending, then restarts to initial state. Invalid fixture data shows a controlled error. The runtime interprets data and never executes model-generated JavaScript; retain browser version and play trace.
- **Trace:** `R-08–09`, `Q-01`, `Q-06`; `V14–V15`.

## Convert one story into a candidate game

- **Owner:** Yessengeldi Nurgeldi (AI generation). **Reviewer:** Zhaksylyk Aldiyar (platform).
- **Priority:** Critical. **Deadline:** End of Week 3 after development kickoff (proposed).
- **Dependency:** Specify supported actions and game schema.
- **Deliverable:** Worker pilot that extracts objective/actions from one supported story and emits a candidate specification or classified scope failure.
- **Acceptance:** Candidate keeps the stated goal and central actions within the agreed vocabulary. A changed mechanic records original request, replacement and reason; an unacceptable substitution returns a specific failure. Retain input/configuration and candidate hash.
- **Trace:** `R-04–06`, `Q-07`; `V16`.

## Check a candidate's winning path

- **Owner:** Yessengeldi Nurgeldi (AI generation). **Reviewer:** Almadi Madiuly (runtime).
- **Priority:** Critical. **Deadline:** End of Week 4 after development kickoff (proposed).
- **Dependency:** Validate game schema and references; convert one story into a candidate game.
- **Deliverable:** Bounded state exploration with a replayable action trace.
- **Acceptance:** A reachable fixture yields a path from start to win; a provably unreachable fixture fails; a search exceeding the configured bound is `unverified`, never ready. Retain bounds and traces for all three cases.
- **Trace:** `R-08`, `Q-03`, `Q-07`; `V05`.

## Repair or fail invalid generation output

- **Owner:** Yessengeldi Nurgeldi (AI generation). **Reviewer:** Zhaksylyk Aldiyar (platform).
- **Priority:** High. **Deadline:** End of Week 5 after development kickoff (proposed).
- **Dependency:** Validate game schema and references; check a candidate's winning path.
- **Deliverable:** Bounded repair loop and classified terminal worker result.
- **Acceptance:** Every repair reruns full validation and winning-path checks. A repairable fixture passes within the configured limit; exhausted, unsafe or unverified output returns `failed` with a reason and no playable artifact. Retain attempt count and reports.
- **Trace:** `R-07–08`, `Q-01`, `Q-03`; `V07`.

## Submit and edit a story in the browser

- **Owner:** Almadi Madiuly (frontend/UX). **Reviewer:** Zhaksylyk Aldiyar (platform).
- **Priority:** High. **Deadline:** End of Week 3 after development kickoff (proposed).
- **Dependency:** Persist projects, story requests and versions.
- **Deliverable:** Working story form based on the [static UX concept](../prototype/README.md).
- **Acceptance:** Valid story, goal and main action submit together and display the returned project/version IDs. Required-field and size errors identify the field to correct; editing a new attempt does not mutate an earlier version. Check keyboard access and 375, 768 and 1280 px layouts.
- **Trace:** `R-01–02`, `Q-04`; `V01`, `V17`.

## Show live progress and recoverable failure

- **Owner:** Almadi Madiuly (frontend/UX). **Reviewer:** Zhaksylyk Aldiyar (platform).
- **Priority:** High. **Deadline:** End of Week 4 after development kickoff (proposed).
- **Dependency:** Queue jobs and expose durable status; submit and edit a story in the browser.
- **Deliverable:** Progress and failure screens backed by the status API.
- **Acceptance:** Reload restores the actual job/version and current state. A failed job shows a safe reason and recovery action; pending or failed jobs show no Play action. Keyboard users can perceive state and error changes.
- **Trace:** `R-03`, `R-12–13`, `Q-04–05`; `V06`, `V08`, `V17`.

## Independently gate game publication

- **Owner:** Zhaksylyk Aldiyar (platform). **Reviewer:** Yessengeldi Nurgeldi (generation).
- **Priority:** Critical. **Deadline:** End of Week 6 after development kickoff (proposed).
- **Dependency:** Queue jobs and expose durable status; validate game schema and references; check a candidate's winning path; repair or fail invalid generation output.
- **Deliverable:** Version-bound result intake and server-side publication gate.
- **Acceptance:** Worker success alone cannot mark a game ready. Mismatched IDs, unknown schema/action, failed safety checks or unverified ending produce no Play URL. A valid result publishes once against the exact immutable version; duplicate delivery cannot publish twice.
- **Trace:** `R-05`, `R-07–08`, `R-12`, `Q-01–02`; `V03–V05`, `V10`.

## Serve only authorized game data and assets

- **Owner:** Zhaksylyk Aldiyar (platform). **Reviewer:** Almadi Madiuly (runtime).
- **Priority:** Critical. **Deadline:** End of Week 7 after development kickoff (proposed).
- **Dependency:** Independently gate game publication; run the hand-authored game in a fixed browser runtime.
- **Deliverable:** Exact-version artifact/data endpoint for the trusted runtime.
- **Acceptance:** Ready owner requests receive only approved data/assets with safe content types. Pending, failed, missing, foreign-user, wrong-version, traversal and unapproved-file requests are denied. No model-generated executable script is served.
- **Trace:** `R-09–10`, `Q-01–02`; `V12–V13`.

## Show results, history and deliberate retry

- **Owner:** Almadi Madiuly (frontend/UX). **Reviewer:** Zhaksylyk Aldiyar (platform).
- **Priority:** High. **Deadline:** End of Week 8 after development kickoff (proposed).
- **Dependency:** Show live progress and recoverable failure; serve only authorized game data and assets.
- **Deliverable:** Result, simplification, Play, catalogue and retry views backed by exact-version API data.
- **Acceptance:** A ready result shows controls and each simplification and launches its own version. Catalogue retains earlier ready and failed versions; retry creates a linked new attempt without replacing an old result. A failed or pending version has no Play action.
- **Trace:** `R-06`, `R-09–11`, `Q-02`; `V11`, `V14`.

## Reproduce one complete request-to-play run

- **Owner:** Zhaksylyk Aldiyar (platform integration). **Reviewer:** Almadi Madiuly (frontend).
- **Priority:** Critical. **Deadline:** End of Week 9 after development kickoff (proposed).
- **Dependency:** Recover failed handoff and duplicate jobs; show results, history and deliberate retry.
- **Deliverable:** Recorded run from a supported story through job status, validated artifact and browser ending, plus one provider-failure retry.
- **Acceptance:** Correlate request/version/job/artifact IDs and retain a browser play trace. The ready game reaches its ending; failure gives a safe reason, retry makes a new version, and an earlier ready game still launches. Another team member can repeat the run from documented commands and fixture hashes.
- **Trace:** `R-01–03`, `R-08–12`, `Q-06–07`; `V06`, `V08`, `V11`, `V14`, `V18`.

## Evaluate the fixed story corpus

- **Owner:** Yessengeldi Nurgeldi (AI evaluation). **Reviewer:** Almadi Madiuly (frontend).
- **Priority:** High. **Deadline:** End of Week 11 after development kickoff (proposed).
- **Dependency:** Reproduce one complete request-to-play run.
- **Deliverable:** Executed report using [fixed prompts](../tests/evaluation-prompts.md), the [verification protocol](verification-plan.md) and the hand-authored runtime baseline.
- **Acceptance:** Freeze prompt/code/schema/model configuration before runs; record every scheduled attempt and failure. Report separate denominators for valid specification, launch, central actions, reachable and observed ending, and simplification fidelity. Two reviewers annotate fidelity independently and retain disagreements; link defects to reproducible cases and mark blocked checks as blocked.
- **Trace:** `R-04–09`, `Q-07–08`; `V14`, `V16`, `V18` and fixed-corpus protocol.
