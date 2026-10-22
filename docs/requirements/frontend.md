# Frontend Functional Requirements and User Flows

**Status:** Draft for the first pre-defense, 22 October 2026. These are requirements for the eventual product, not a claim of implemented screens. The proposed first executable game is a bounded top-down 2D scene with move, inspect, collect, interact, dialogue choices and an explicit goal. The team and supervisor must approve the contract before implementation.

**Source keys:** P = [`docs/proposal.md`](../proposal.md), extracted from the supplied supervisor proposal; S = [`docs/decisions/scope-and-contract.md`](../decisions/scope-and-contract.md), proposed first-version boundary; T = [`docs/technology/browser-runtime.md`](../technology/browser-runtime.md), conditional browser runtime recommendation; L = [`docs/literature/ux-and-evaluation.md`](../literature/ux-and-evaluation.md), UX research implications. **Priority:** Must = necessary to demonstrate the proposal's request-to-playable-game path; Should = valuable for usable first release but not a reason to claim the first pre-defense is incomplete without working software. These requirements need reconciliation with API and AI requirements in task 20.

## Functional requirements

| ID | Priority | Source | Requirement and observable acceptance |
| --- | --- | --- | --- |
| FE-01 | Must | P, S | **Create/edit a story request.** The author can enter a storyline in a labeled text field and revise it before submission. Given a saved draft, reopening it restores the text; given an empty or invalid request, submission is blocked and the field explains the problem. Client limits follow the agreed API contract rather than an invented fixed number. |
| FE-02 | Must | P, S, L | **Set game parameters.** The form presents genre intent, desired goal and main action as explicit, editable choices/text alongside the story; it explains that genre intent is not a guarantee of unsupported mechanics. On review before submit, the chosen parameters and story are visible together; changing one does not silently erase the other. Exact allowed values follow the agreed specification. |
| FE-03 | Must | P, S | **Submit and identify a generation request.** On submit, the client sends the current story/parameters once, displays the returned project/version/job identifiers in application state, and takes the author to that job's progress view. Repeated clicks while a request is pending do not create an unintended duplicate; a deliberate new generation uses a new version. The precise API shape is agreed with the platform owner. |
| FE-04 | Must | P, S | **Show truthful progress and failure.** A job view displays `queued`, `generating`, `validating`, `ready` or `failed` from server state, with a clear message and latest update. Reloading the page restores that job's current state. A failed job never shows a Play action as if a valid game exists; it shows the returned safe error and a next action. Internal repair attempts need not be exposed as separate public states. |
| FE-05 | Must | P, S, L | **Explain simplifications.** For a ready result, display each requested mechanic, the actual supported replacement and the reason supplied by the validated result. If the list is empty, do not imply a change occurred. The intended genre and actual supported mechanic family remain distinguishable; a materially misleading transformation must surface failure instead of being labeled as an equivalent game. |
| FE-06 | Must | P, S, T | **Preview and play a ready version.** The Play action is available only for a validated ready artifact. It loads the exact immutable specification version associated with the selected result, displays its title, premise, objective and control instructions, then launches the trusted runtime. Invalid/missing artifact data yields a controlled message, not a blank or partly running game. |
| FE-07 | Must | P, S, T | **Support the first playable loop.** In the proposed top-down first slice, the visible controls allow movement and the supported inspect/collect/interact actions; available choices and state changes are understandable. When the declarative goal is reached, the client displays an explicit ending and offers replay. An unreachable or unverified ending is not presented as a completed game. This criterion becomes executable after the runtime exists. |
| FE-08 | Must | P, S | **List projects and versions.** The catalogue shows each accessible project with title and most recent status; opening a project lists its versions with creation time, status and a link to that version's request/result. Selecting an older ready version opens that version, not a silently replaced latest result. Empty and failed states have distinct labels. Authentication and exact list pagination are platform contract decisions. |
| FE-09 | Must | P, S, L | **Retry deliberately.** From a failed result the author can edit the retained request and resubmit; from a ready result the author can revise the story/parameters and regenerate. A retry creates a new version with its own job/status; the earlier version remains identifiable. The interface states what will be submitted before the action. |
| FE-10 | Should | P, L | **Help the author understand scope.** Near the request form, show a short supported-actions explanation and one concise example; do not promise platformer, racing or card-game mechanics in the first slice. In a usability walkthrough, a participant can identify which selected action is supported and where a simplification will appear. |
| FE-11 | Should | P, L | **Support recovery from interruption.** If a request is in progress and the author navigates away, the catalogue/job link returns to the same status. If the network loses contact, show connection uncertainty and a retry-to-check action without falsely changing the server job to `failed`. |

## Non-functional requirements for the client

| ID | Priority | Source | Requirement and acceptance check |
| --- | --- | --- | --- |
| FE-N01 | Must | P | **Responsive authoring UI.** Story entry, parameters, status, catalogue and result views fit test viewports at 375 px, 768 px and 1280 px width without clipped essential controls or horizontal page scrolling. The game canvas may maintain aspect ratio but must remain wholly visible with its controls and objective available. These widths are proposed test fixtures, not claims of full device coverage. |
| FE-N02 | Must | P, L | **Keyboard and clear feedback.** All authoring controls, navigation, submission, version selection and retry can be reached and operated by keyboard with visible focus. Inputs have persistent labels; validation errors identify the field and explain correction; statuses and errors are conveyed in text rather than color alone. The playable slice has documented keyboard controls and an explicit way back to the result view. |
| FE-N03 | Should | L | **Assistive status announcements.** When a job status changes or a form is rejected, the update is announced without requiring a user to find it visually; focus is placed predictably after navigation or error. Validate with a keyboard walkthrough and one screen reader/browser combination rather than claiming formal conformance without an audit. |
| FE-N04 | Must | S, T | **Safe content rendering.** Story text, generated titles, messages and simplification descriptions render as text, not executable HTML or script. The client receives only server-approved artifact URLs and a validated specification; it does not execute model-generated JavaScript. Security controls and deployment origin policy require platform review. |
| FE-N05 | Should | P, S | **State clarity.** Loading, empty, ready and failed states are visually and textually distinct. During a manual walkthrough, no screen offers an action that is invalid for the current job/version state. |

## Key user flows and planned screen links

The following use case IDs are proposed labels for the task 22 diagram; that task should preserve or explicitly reconcile them with the consolidated requirements in task 20.

| Use case | Author action | Requirements | Planned mockup |
| --- | --- | --- | --- |
| UC-01 | Enter/edit story and parameters | FE-01–02, FE-10 | SCR-1 |
| UC-02 | Submit generation request | FE-03 | SCR-1, SCR-2 |
| UC-03 | Check job progress or failure | FE-04, FE-11 | SCR-2 |
| UC-04 | Inspect result and simplifications | FE-05–06 | SCR-3 |
| UC-05 | Preview/play, finish and replay | FE-06–07 | SCR-3, SCR-4 |
| UC-06 | Browse catalogue and versions | FE-08 | SCR-5 |
| UC-07 | Edit and retry or regenerate | FE-09 | SCR-2, SCR-3, SCR-1 |

| Flow | Ordered user steps | Use cases | Mockup screens for task 24 |
| --- | --- | --- | --- |
| UF-1 Create game | Catalogue/new project → enter/edit story and parameters → review → submit → follow queued/generating/validating → ready → inspect simplifications → preview → perform action → ending/replay | UC-01–05 | SCR-1 Story form, SCR-2 Progress, SCR-3 Result, SCR-4 Game/ending |
| UF-2 Recover failed generation | Open failed job → read error → return to retained story → change request → submit as new version → inspect new status | UC-03, UC-07, UC-02 | SCR-2 Failure state, SCR-1 Edited form, SCR-3 Result |
| UF-3 Compare versions | Open catalogue → choose project → inspect version list → open older ready game/result → revise selected request → generate a new version | UC-06, UC-04, UC-07 | SCR-5 Catalogue/version list, SCR-3 Result, SCR-1 Form |

The screen IDs are handoff labels for future mockups, not existing files. Task 20 must reconcile identifiers and API behavior with platform and generation requirements; task 24 must produce the matching mockups. User testing should observe whether participants can submit, recognize a simplification, find a prior version, recover from failure, understand controls and reach the ending without guidance. No user-testing results are claimed here.
