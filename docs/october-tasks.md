# October Pre Defense Task Board

**Checkpoint:** 24 October 2026. The team reports that the supervisor narrowed this checkpoint to the proposal, a reasoned relevance statement, a minimal shared repository and a small task list. Record the actual wording and date of that instruction when available. The uploaded written checklist is broader; until the change is documented, this difference remains open for supervisor review.

**Owners:** M = Almadi Madiuly; A = Zhaksylyk Aldiyar; N = Yessengeldi Nurgeldi. Each row has one accountable owner and a different reviewer. Numbers are local board numbers, not YouTrack issue IDs. A row is complete when its artifact is present and its listed check passes; external access or feedback that has not arrived is recorded as pending, never invented.

| Order / target | Owner · reviewer | Task and deliverable | Acceptance check and dependency |
| --- | --- | --- | --- |
| 1 · 22 Oct | N · M | Confirm the October scope in `docs/supervisor-feedback.md`, recording the supervisor's actual message or dated meeting notes, items due now, deferred items and any unresolved point. | Source and date are identifiable. If only a verbal summary exists, label it as the team's account and request confirmation. This establishes the basis for tasks 2–6. |
| 2 · 22–23 Oct | N · A | Finalize `docs/proposal.md`: bilingual title, team and supervisor, problem, intended users, aim, objectives, expected playable browser result, preliminary boundary, individual roles and broad timeline. | Names and core concept match the signed/uploaded proposal; untested user needs and unapproved design choices are marked as hypotheses. Depends on 1 for checkpoint wording. |
| 3 · 22–23 Oct | M · N | Write `docs/evidence/relevance.md`: the problem and target users, why existing workflows motivate the project, cited evidence already available, explicit assumptions and missing validation, and the next questions to ask users. | Every empirical claim has a traceable source or is labeled an assumption. State the actual interview/survey count, including zero, and do not imply participants were consulted when they were not. Depends on 2 for consistent scope. |
| 4 · 22–23 Oct | A · M | Establish the minimal shared GitHub repository: `README.md`, `docs/proposal.md`, `docs/evidence/relevance.md`, `.gitignore` and a short `docs/` index only if useful. README links the proposal and relevance statement and names all three roles, the project status and next milestone. | Repository URL is recorded; links work; no secrets or personal data are committed. Each member's access is checked when available, with missing invitations noted as pending. README states accurately whether runnable code exists. Depends on 2–3 for final links and wording. |
| 5 · 23 Oct | M · A | Keep this board as the task register and, if YouTrack access is ready, enter tasks 1–6 there with real issue IDs, one assignee, due date and artifact link. Record the issue URLs here or in the README only after creation. | Local board is sufficient to find work and its status. Do not invent remote issues or make YouTrack integration a completion gate when access is unavailable. Depends on 1–4 for stable deliverables. |
| 6 · 24 Oct | A · N | Review the October package together and add a brief submission note in `docs/october-submission.md` with repository URL, file links, completed items, open evidence/access/feedback gaps and next decisions. | N and M check their own content and A checks links and repository state; note records actual reviews and limitations. Any unavailable supervisor feedback or access is listed as pending. Depends on 1–5. |

## Current status on 22 October

| Task | Status and next verifiable action |
| --- | --- |
| 1 | Forwarded wording transcribed in `docs/supervisor-feedback.md`; original date/channel and committee interpretation still need confirmation. |
| 2–3 | AI-prepared drafts exist; the named student owners and peer reviewers must inspect, correct and record actual review. |
| 4 | Local Git repository and README exist; shared GitHub remote and three-account access are pending. |
| 5 | This local task register exists; YouTrack issues and actual assignees are pending external setup. |
| 6 | `docs/october-submission.md` is a draft handoff; genuine team review and external submission remain pending. |

## Later research backlog (November–December)

These are provisional planning targets drawn from the earlier written checklist, not October completion gates or newly approved thresholds. Confirm their scale and dates with the supervisor, then split them into small owned tasks with evidence and checks.

| Window | Next work and decision | Coordinator |
| --- | --- | --- |
| November | Conduct real discussions with 3–5 relevant user representatives or document a substantive client agreement; use a common guide and anonymized notes, then revise the relevance claim and first playable scope. | M, with A and N each gathering evidence. |
| November | Review at least 12 sources, at least 8 scientific; compare 3–5 existing systems on 6–10 common criteria and state the project gap. | M synthesizes; A and N own allocated sources/systems. |
| Late November–early December | Compare three technology decisions with 2–3 alternatives each and record tradeoffs and choices. | A, N and M each own one decision. |
| Late November–mid December | Agree on priorities and observable requirements, game specification, diagrams, UX prototype and evaluation plan with metrics, conditions and a baseline; decide the manually authored runnable game slice for the next checkpoint. | A/N/M by development roles, with shared review. |

The original written checklist placed much of this research and design work by 24 October. This board follows the team's later report of a narrower supervisor checkpoint; task 1 must preserve the actual instruction or clearly mark it unconfirmed. Git history and team participation must reflect real work, without manufactured commits, reviews or findings.
