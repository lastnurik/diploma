# Proposed YouTrack Backlog for the Diploma Project

**Status, 22 October 2026:** Eight proposed issues for the diploma project, from user evidence to an evaluated story-to-game slice. No issue has a real YouTrack ID or completed status. Actual YouTrack project creation, access and issue entry remain pending. Copy these proposals into the real tracker after team review, then record the resulting links.

This backlog follows the [project proposal](proposal.md) and the [supervisor clarification](supervisor-feedback.md): prepare minimal initial material while collecting better input before fixing requirements. It is distinct from the internal [36-task document-preparation plan](project-task-plan.md). Those tasks prepare written sections and submission materials; the issues below advance the project itself. The [implementation roadmap](project-plan.md) supplies provisional periods, not approved deadlines. User evidence or feasibility findings may change order, scope and dates.

**Assignment rule:** Each issue has one accountable owner and a different student reviewer. Acceptance requires the named evidence and a recorded review, not a draft alone. Dependencies refer to proposed titles below, not real issue IDs. Priority is proposed as **High** for work blocking the first slice and **Normal** for a bounded review activity. Each implementation issue covers one small example or interface; further mechanics and production hardening require later issues.

## Collect initial user evidence

- **Owner:** Almadi Madiuly. **Reviewer:** Yessengeldi Nurgeldi. **Priority:** High.
- **Dependency:** None. Confirm with the supervisor which discussion or client-agreement format qualifies.
- **Window:** Late October–November 2026, before scope agreement.
- **Deliverable:** An anonymized synthesis of 3–5 actual user discussions, or substantive client agreement, using the [research questions](evidence/relevance.md) and [questionnaire draft](evidence/questionnaire.md).
- **Acceptance:** Record dates, participant roles, creation barriers, expected outputs, indispensable story/actions and disagreements. Distinguish interest from observed use. Link each proposed requirement change to actual input. Keep identifiable responses outside Git. If recruitment fails, record the gap and leave this issue open.

## Agree the first game scope and requirements

- **Owner:** Yessengeldi Nurgeldi. **Reviewer:** Zhaksylyk Aldiyar. **Priority:** High.
- **Dependency:** Collect initial user evidence.
- **Window:** Late November–mid December 2026.
- **Deliverable:** A reviewed revision of the [scope](decisions/scope-and-contract.md) and [requirements](requirements.md), limited to a small top-down 2D browser game with a goal, meaningful actions and an ending.
- **Acceptance:** Identify supported actions, unsupported mechanics, allowed simplification and rejection examples, and observable acceptance for the first slice. Record the three students' decisions and actual supervisor feedback or outstanding objections. Do not label user hypotheses as confirmed requirements.

## Freeze a minimal shared game and job contract

- **Owner:** Zhaksylyk Aldiyar. **Reviewer:** Yessengeldi Nurgeldi. **Priority:** High.
- **Dependency:** Agree the first game scope and requirements.
- **Window:** Mid–late December 2026.
- **Deliverable:** One versioned schema, one valid handwritten game fixture, invalid fixtures, and request/status/result examples aligned with the [architecture](architecture.md).
- **Acceptance:** Define scene/entity references, allowed actions and effects, goal/ending, controls, simplifications, size/retry/check bounds and schema version. Specify project/version/job identity and terminal states. A strict validator accepts the valid fixture and rejects an unknown action, broken reference and unsupported schema version. All three owners record agreement on interpretation.

## Walk through the author journey with users

- **Owner:** Almadi Madiuly. **Reviewer:** Zhaksylyk Aldiyar. **Priority:** Normal.
- **Dependency:** Agree the first game scope and requirements. Can proceed alongside contract work.
- **Window:** December 2026, before implementing the authoring screens.
- **Deliverable:** A short walkthrough record and revised [conceptual prototype](../prototype/README.md).
- **Acceptance:** At least two prospective users attempt to describe an idea, interpret recorded progress, identify a simplification, locate controls/ending, reopen a version and recover from failure. Record observed confusion, changes and unresolved issues. State the small sample and static-prototype limitations. Do not count this as generated-game evaluation.

## Run one manually authored browser game

- **Owner:** Almadi Madiuly. **Reviewer:** Yessengeldi Nurgeldi. **Priority:** High.
- **Dependency:** Freeze a minimal shared game and job contract; Walk through the author journey with users.
- **Window:** Late December 2026–January 2027.
- **Deliverable:** A reproducible browser runtime example using the valid fixture, with movement, one consequential interaction, an explicit ending and restart.
- **Acceptance:** A reviewer follows setup instructions, starts the exact fixture, observes a state change and reaches its ending. Restart resets play state. Invalid game data produces a controlled error. Retain fixture hash, browser/version and screenshots or a short recording. The runtime interprets validated data without executing model-generated JavaScript.

## Generate and validate one bounded story example

- **Owner:** Yessengeldi Nurgeldi. **Reviewer:** Zhaksylyk Aldiyar. **Priority:** High.
- **Dependency:** Freeze a minimal shared game and job contract. May start alongside the manual runtime slice.
- **Window:** January–February 2027.
- **Deliverable:** A generation worker pilot for one supported story, plus malformed-output and unsupported-mechanic fixtures, using the [generation requirements](requirements/generation.md).
- **Acceptance:** The pilot returns a schema-valid candidate with goal, actions, ending and disclosed simplifications, or a classified failure. Check references and a bounded winning path. Exhausted repair or unverified completion yields failure. Retain input/configuration, schema version, validation report and action trace. This pilot establishes no general generation success rate.

## Integrate the first request-to-play journey

- **Owner:** Zhaksylyk Aldiyar. **Reviewer:** Almadi Madiuly. **Priority:** High.
- **Dependency:** Run one manually authored browser game; Generate and validate one bounded story example.
- **Window:** February–March 2027.
- **Deliverable:** One integrated author request, asynchronous job, result review and exact-version browser launch, following the [platform requirements](requirements/platform.md).
- **Acceptance:** Retain a trace showing queued, generating, validating and ready or failed. The publication gate independently rejects invalid output. A ready game shows simplifications, plays and reaches an ending. A provider failure exposes retry, a retry creates a new version, and an earlier ready result remains available. Exercise one duplicate delivery without duplicate publication and deny delivery of a failed or foreign version.

## Evaluate the slice and reconcile review findings

- **Owner:** Yessengeldi Nurgeldi. **Reviewer:** Almadi Madiuly. **Priority:** High.
- **Dependency:** Integrate the first request-to-play journey.
- **Window:** March–April 2027 for evaluation; May 2027 for final review and demonstration.
- **Deliverable:** An executed report using the [verification plan](verification-plan.md) and [fixed prompt corpus](../tests/evaluation-prompts.md), plus an actual supervisor response record.
- **Acceptance:** Freeze prompt/configuration and commit versions before runs. Report denominators, conditions, failures and separate validity, launch, main-action, ending and narrative-fidelity outcomes. Use two independent fidelity annotations and record disagreements. Link defects to reproducible cases and record fixes or unresolved limits. Record actual supervisor comments, decisions and resulting revisions, then demonstrate the reviewed version. Do not omit failed cases or call blocked checks passed.

## Entering the real tracker

After setup, retain these titles or document agreed changes. Set the actual assignee, reviewer, priority, dependencies and provisional milestone on each issue, and link its repository deliverable and review. The team should refine the later implementation issues after the scope decision rather than treat this short backlog as a complete engineering task breakdown. Track repository/access/YouTrack setup separately in the [handoff record](october-submission.md).
