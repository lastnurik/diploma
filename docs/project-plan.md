# Project Milestones Dependencies and Risks

**Status, October 2026:** Provisional project schedule informed by the [work packages](youtrack-backlog.md) and [supervisor scope guidance](supervisor-feedback.md). Research and feasibility assessment precede scope agreement in late November to mid-December. Dates are planning windows.

## Milestones and evidence

| Period | Deliverable and completion evidence | Lead development owner |
| --- | --- | --- |
| October 2026 | Initial proposal and analysis, research comparisons, requirements, three editable diagrams, static UX storyboard, evaluation plan and presentation. | Shared. |
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

## Risk register

| Risk and trigger | Consequence | Owner and response |
| --- | --- | --- |
| Mechanics/genre scope expands before a tested first slice | No reliably completable game | Nurgeldi owns simplification policy; all approve a bounded mechanic vocabulary and document unsupported requests. |
| Model produces invalid or semantically wrong rules | Broken or misleading output | Nurgeldi validates schema, references and reachable ending; bounded repair, otherwise explicit failure; evaluate on fixed prompts. |
| Generated content executes with platform privileges | Untrusted code or content could affect users/data | Aldiyar owns safe serving and trust boundary; use validated data through fixed runtime, restrict assets and browser permissions; test delivery. |
| Queue handoff, duplicate delivery or worker failure | Stuck jobs or duplicate artifacts | Aldiyar defines idempotent generation IDs, durable status and bounded retries; integration tests exercise failure paths. |
| Client/server/AI contracts diverge | Late integration failure | Aldiyar maintains versioned contract; Almadi and Nurgeldi review changes before merge; run a manual game integration spike early. |
| User evidence lacks qualifying discussions/client agreement | Intended-user needs remain uncertain | Almadi coordinates qualifying direct research and records recruitment, differing views and any scope implications. |
| Supervisor review cannot happen before submission | Requirement 11 and improvements absent | Nurgeldi requests a review slot early and supplies drafts; track actual response and unresolved feedback transparently. |
| Repository or issue-tracker access unavailable | Traceability between project work and reviewed changes is limited | Aldiyar maintains the repository; Almadi coordinates the task tracker and project links. |
| Three-person schedule slips | Integration or evaluation is compressed | Use the bounded mechanic set and review dependencies at each milestone. |

## Working rhythm and review

Each work package has one lead and a separate reviewer. Changes to the shared game specification require agreement across the frontend, platform and generation areas. Review records and subsequent decisions are kept with the relevant artifact.
