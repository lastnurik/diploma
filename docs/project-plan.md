# Project Milestones Dependencies and Risks

**Status:** Proposed plan prepared 22 October 2026 for supervisor review. The 24 October first pre-defense is an analysis and design checkpoint. Dates after October are target periods from the supervisor proposal, not approved delivery promises.

## Milestones and evidence

| Period | Deliverable and completion evidence | Lead development owner |
| --- | --- | --- |
| By 24 October 2026 | Proposal, relevance evidence or explicit gap, critical literature, existing and technology comparisons, requirements, three editable diagrams, UX prototype, evaluation plan, Git history, YouTrack and supervisor response; reviewed `pre-defense-1` tag. | Shared; each student owns the assigned plan tasks. |
| October–November 2026 | Signed-off first-version scope/schema; story input and a **prewritten** game start, core action and ending demonstrated in browser. | Almadi on client; Aldiyar/Nurgeldi agree interfaces. |
| December 2026 | Client, platform service and fixed mechanics; manually written game versions can be stored, launched and finished. | Module owners independently, joint integration. |
| January–February 2027 | AI service produces a valid specification from a story; queued job, simplifications, repair/error and browser result operate end to end. | Nurgeldi for generation, Aldiyar for jobs/API, Almadi for UX. |
| March–April 2027 | Prompt corpus evaluated under a fixed protocol; success and failure rates reported, defects reproduced and fixed. | Nurgeldi for evaluation, all for module defects. |
| May 2027 | Final explanation/documentation, supervisor changes and complete demonstration. | Shared. |

## Dependencies and parallel work

The minimal game specification is the shared contract between client, server and AI service. Proposal/scope (tasks 03–04) precede final requirements and diagrams. Literature, existing-system review and three technology comparisons can proceed in separate files. Module requirements (17–19) are then consolidated (20). Diagrams and prototype (21–24) should use that same vocabulary; evaluation prompts and verification (25–27) use its supported action/ending model. README, presentation and pre-defense report assemble the reviewed outputs. The repository and task tracker should exist early so every subsequent artifact has a task link and traceable history.

## Risk register

| Risk and trigger | Consequence | Owner and response |
| --- | --- | --- |
| Mechanics/genre scope expands before a tested first slice | No reliably completable game | Nurgeldi owns simplification policy; all approve a bounded mechanic vocabulary and document unsupported requests. |
| Model produces invalid or semantically wrong rules | Broken or misleading output | Nurgeldi validates schema, references and reachable ending; bounded repair, otherwise explicit failure; evaluate on fixed prompts. |
| Generated content executes with platform privileges | Untrusted code or content could affect users/data | Aldiyar owns safe serving and trust boundary; use validated data through fixed runtime, restrict assets and browser permissions; test delivery. |
| Queue handoff, duplicate delivery or worker failure | Stuck jobs or duplicate artifacts | Aldiyar defines idempotent generation IDs, durable status and bounded retries; integration tests exercise failure paths. |
| Client/server/AI contracts diverge | Late integration failure | Aldiyar maintains versioned contract; Almadi and Nurgeldi review changes before merge; run a manual game integration spike early. |
| User evidence lacks qualifying discussions/client agreement | Requirement 2 not fully evidenced | Almadi owns questionnaire/distribution; Nurgeldi seeks supervisor ruling on text follow-ups; recruit 3–5 actual participants or mark the gap. |
| Supervisor review cannot happen before submission | Requirement 11 and improvements absent | Nurgeldi requests a review slot early and supplies drafts; track actual response and unresolved feedback transparently. |
| Repository or YouTrack access unavailable | Traceability and required submission links missing | Aldiyar creates GitHub repository; Almadi creates YouTrack; arrange access and maintain local files until connected, then upload honestly with original timestamps/history. |
| Three-person schedule slips | Incomplete first pre-defense | All prioritize mandatory evidence, requirements, diagrams, prototype and repository; maintain daily status and explicit limitations. |

## Working rhythm and review

Each member owns assigned tasks, produces a bounded artifact on an issue branch, verifies its acceptance criteria and requests another member's review. Merge only reviewed material to `main`. Hold a weekly supervisor meeting with a short demo, record decisions and next tasks. During the 24 October deadline, reconcile the three modules and show the exact submitted tag, known limitations and remaining tasks. Actual review, user research and test results must be logged only after they occur.
