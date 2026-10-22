# Project Milestones Dependencies and Risks

**Status:** Proposed plan prepared 22 October 2026 for supervisor review. The 24 October first pre-defense is an analysis and design checkpoint. The current proposed schedule follows the separate [project backlog](youtrack-backlog.md) and the [supervisor clarification](supervisor-feedback.md): gather input before agreeing scope and requirements in late November–mid-December. All dates are provisional planning windows, not approved delivery promises or completed work. They supersede the earlier accelerated implementation roadmap in the historical preparation plan.

## Milestones and evidence

| Period | Deliverable and completion evidence | Lead development owner |
| --- | --- | --- |
| By 24 October 2026 | Proposal, relevance evidence or explicit gap, critical literature, existing and technology comparisons, requirements, three editable diagrams, UX prototype, evaluation plan, Git history, YouTrack and supervisor response; reviewed `pre-defense-1` tag. | Shared; each student owns the assigned plan tasks. |
| Late October–November 2026 | Dated, anonymized user discussions or substantive client evidence, divergent needs and resulting scope questions; disclose any evidence gap. | Almadi; Nurgeldi reviews. |
| Late November–mid-December 2026 | Reviewed first mechanic set, requirements and acceptance criteria informed by user/supervisor input. | Nurgeldi; Aldiyar reviews, all agree interfaces. |
| Mid–late December 2026 | Versioned game/job contract, valid and invalid fixtures, status/result examples and explicit limits; strict validator checks recorded. | Aldiyar; Nurgeldi reviews. |
| December 2026 | Static author-journey walkthrough with prospective users and recorded UX revisions, alongside contract work after scope agreement. | Almadi; Aldiyar reviews. |
| Late December 2026–January 2027 | One manually authored browser game with reproducible startup, meaningful action, visible ending and restart; invalid data fails safely. | Almadi; Nurgeldi reviews. |
| January–February 2027 | One bounded story-generation/validation pilot with repair/failure fixtures and winning-path evidence; no general success-rate claim. | Nurgeldi; Aldiyar reviews. |
| February–March 2027 | First integrated request → status → validated game → action/ending journey, with simplification and failure/retry evidence. | Aldiyar; Almadi reviews, all integrate. |
| March–April 2027 | Fixed-corpus evaluation under frozen conditions; report all attempts/failures and reproduce defects. | Nurgeldi; Almadi reviews, all resolve module findings. |
| May 2027 | Final review, supervisor-response reconciliation, documentation and demonstration. | Shared. |

## Dependencies and parallel work

The [eight proposed project tickets](youtrack-backlog.md) define the current project sequence: actual user evidence → agreed scope/requirements → shared game/job contract. The UX walkthrough can proceed alongside contract work after scope agreement. The manually authored runtime slice and bounded generation pilot then progress against the same contract; both feed the integrated author-to-play journey, followed by fixed-corpus evaluation and final review. Move a dependent window if its evidence is missing rather than describing a planned prerequisite as complete.

The [36 historical preparation tasks](project-task-plan.md) separately organize production of the document/repository materials, including draft requirements, diagrams and tests. They are not the project YouTrack issues and must not be imported wholesale. Create the actual minimal project backlog after team review, with real issue links, dates and milestones; current local proposals do not establish tracker setup.

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
