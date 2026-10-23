# Project Milestones and Risks

**Status, October 2026:** Provisional windows, not completed milestones. Direct user/client input and feasibility work precede scope agreement in late November to mid-December. The [seven next-increment tasks](youtrack-backlog.md) specify owners, dependencies, acceptance and proposed priorities/deadlines; later work is listed there as milestones, not detailed or verified live YouTrack issues. [Supervisor guidance](supervisor-feedback.md) calls for concise initial coverage.

| Period | Milestone and evidence | Lead |
| --- | --- | --- |
| October 2026 | Proposal and analysis, comparisons, initial requirements, three editable diagrams, static UX concept and evaluation plan. | Shared |
| November–mid December | Anonymized user discussions or substantive client input; agreed first mechanics, requirements and acceptance after supervisor review. Record any missing evidence. | Almadi (input), Nurgeldi (scope) |
| Mid December–January | Shared game/job contract with valid and invalid fixtures; prospective-user UX walkthrough; one hand-authored browser game with an action, ending, restart and safe invalid-data response. | Aldiyar (contract), Almadi (UX/runtime) |
| January–March | Offline bounded generation pilot and a fixture-backed request → status → browser-ending path; then integrate AI output with independent publication and failure/retry checks. Do not count the fixture path as generated play. | Nurgeldi (generation), Aldiyar (integration) |
| March–May | Fixed-corpus evaluation with all attempts/failures, defect revisions, supervisor-response record and final demonstration. | Nurgeldi (evaluation); shared review |

The first increment is agreed actions → shared fixture/contract → parallel runtime, fixture-backed API/UI and offline AI pilot → reproducible fixture-backed play. Later integration adds the AI worker, publication gate and controlled delivery before fixed-corpus evaluation. Move a dependent window if its prerequisite is not evidenced.

## Main risks and responses

| Risk | Response and owner |
| --- | --- |
| Scope exceeds a reliably completable first game | Nurgeldi and the team agree a bounded action set and record unsupported requests and simplifications. |
| Model output is invalid, unfaithful or unsafe | Nurgeldi checks rules and a bounded winning path; Aldiyar independently gates publication and safe delivery. Fail clearly when repair or verification fails. |
| Queue failure or mismatched client/worker contracts | Aldiyar keeps a versioned contract, durable status and idempotent publication; all three review interfaces and test failure paths. |
| User evidence or supervisor review is missing | Almadi records qualifying direct input and disagreements; Nurgeldi seeks substantive supervisor comments and tracks unresolved findings. Do not claim approval or validated user needs without it. |
| Schedule, access or integration slips | Keep the first mechanic family small, review dependencies, preserve project and task links, and demonstrate one reproducible complete path before expanding. |

Each near-term task has a lead and a different reviewer. The team records changes to the shared game contract and decisions with their evidence.
