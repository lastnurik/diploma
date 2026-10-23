# Author Use Cases

**Status:** Proposed first-version design, 22 October 2026. [Editable diagram](../diagrams/use-case.mmd) and [readable SVG](../diagrams/use-case.svg). The single author actor covers a story writer, teacher or small team member. Exact account roles and access policy remain implementation decisions. The optional external model provider is a service integration in the [system context diagram](../diagrams/system-context.mmd), not a direct participant in these author goals.

| ID | Author goal and success condition | Frontend requirements | Consolidated requirements | Planned screen |
| --- | --- | --- | --- | --- |
| UC-01 | Enter or revise a storyline, genre intent, desired goal and main action; invalid fields are corrected before submission. | FE-01, FE-02, FE-10 | R-01, R-13 | SCR-1 story form |
| UC-02 | Submit the reviewed request once and obtain a traceable project version/job. | FE-03 | R-02 | SCR-1 → SCR-2 progress |
| UC-03 | Read current `queued`, `generating`, `validating`, `ready` or `failed` state; on failure see a safe explanation and next action, with state restored on reload. | FE-04, FE-11 | R-03, R-12, R-13 | SCR-2 progress/failure |
| UC-04 | Inspect the ready result and any requested-to-actual mechanic substitutions with reasons; a misrepresented request fails rather than masquerading as equivalent. | FE-05, FE-06 | R-06, R-09 | SCR-3 result |
| UC-05 | Load the selected immutable ready version, understand controls, perform a supported action, reach an explicit ending and replay. Invalid or unverified artifacts never offer a misleading completed game. | FE-06, FE-07 | R-08, R-09 | SCR-3 → SCR-4 game/ending |
| UC-06 | Find accessible projects and their versions, including failures and an earlier ready result, without silently replacing old results. | FE-08 | R-10 | SCR-5 catalogue/versions |
| UC-07 | Edit a retained failed or successful request and deliberately generate a new linked version while preserving its predecessor. | FE-09 | R-11 | SCR-2/SCR-3 → SCR-1 |

The normal path is UC-01 → UC-02 → UC-03 → UC-04 → UC-05; the author may use UC-06 to return to a version and UC-07 to retry. A failed UC-03 goes to UC-07, then UC-02. These are proposed flows, not an implemented application. `SCR-*` labels identify the [static storyboard](../prototype/README.md); detailed [frontend flows](requirements/frontend.md) are UF-1 through UF-3. Generation, validation, reachability and publication are system responsibilities specified in [requirements](requirements.md) R-04–08 and Q-01–03.
