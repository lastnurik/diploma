# Repository and review audit — preparation task 34

**Local snapshot: 22 October 2026. Owner: Zhaksylyk Aldiyar; reviewer: Almadi Madiuly. Status: draft audit, not accepted or submitted.** This record inspects local files and Git evidence; it does not create student review, verify remote permissions or establish completion of task 34.

## Scope and current user clarification

The 36-task plan is **our internal preparation plan for producing the document and repository**. It is not the diploma project's YouTrack backlog and must **not be imported wholesale into YouTrack**. The separate [proposed project backlog](youtrack-backlog.md) now contains eight proposed diploma-project issues with owners, reviewers, priorities, provisional windows, dependencies, deliverables and acceptance criteria. It has no real YouTrack IDs or completed statuses. The preparation plan and README now direct setup to this separate backlog; the actual YouTrack project, access, issue entry and links remain absent from the verified evidence.

The first checkpoint retains concise coverage of all eleven sections, the repository, project task tracking and presentation. Future software implementation, user research and executed evaluation remain separate from preparing their initial drafts. Local draft presence is checkable; acceptance and collaborative process require real external evidence.

## Local checks actually performed

| Check | Observed evidence | Verdict and remaining action |
| --- | --- | --- |
| Repository and revision | `git rev-parse --short HEAD` returned `6feada1`; active branch `pre-defense-draft`. | **Local checked.** This is the existing HEAD, not the reviewed submission revision. |
| Working tree | Modified tracked documents and untracked diagram/research/requirements/prototype/test/presentation material are present. | **Open.** Current files are not all committed at HEAD. Review intended changes before committing; do not stage everything indiscriminately. |
| Remote and tag | `git remote -v` and `git tag` returned no entries. | **Pending.** No continuing remote URL, pushed reviewed baseline or submission tag is verified. |
| Structure | README, proposal/evidence/research/comparison/requirements/management drafts, three `.mmd` diagram sources with SVG exports, prototype SVGs/navigation and prompt/test plans exist. `config/` is empty; no runnable application code is evidenced. | **Draft content present.** Empty directories are not preserved by Git. Record config/code as deferred; add safe examples and run/test instructions when applicable. |
| Local links | Script checked **89 local Markdown link paths**, with zero missing targets before creating this audit file. | **Local checked, bounded.** This tests path existence, not anchors, external URLs, factual content or rendered readability. Recheck after packaging. |
| Literature and comparisons | Consolidated drafts record 14 scholarly sources, three systems/nine criteria, and three technology decisions. | **Draft.** Counts and reported source checks do not establish student approval or a validated product. |
| UX and evaluation | Three static SVG files cover six screen states with navigation notes. Verification plan specifies V01–V18 and the proposed 24-trial protocol. | **Draft.** No recorded user walkthrough, generated game, executed test or metric result. |
| Presentation | `presentation/output/diploma-initial-review.pptx`, README, build/validation files and slide renders exist at this snapshot. | **Draft present.** This audit did not open the deck or verify its rendering/content. Student speaking allocation, review and rehearsal remain pending; do not report slides as absent. |
| Ignore rules | `.gitignore` contains environment/key/build/log/raw-response/contact exclusions. `git check-ignore --no-index` matched `.env` and sample raw/contact paths; `config/.env.example` was not ignored. | **Local checked, bounded.** Ignore rules do not remove previously tracked files or prove history is free of confidential data. |
| Confidentiality scan | Scanned 45 current text files (`.md`, `.mmd`, `.svg`, `.json`, `.mjs`, `.gitignore`) for selected private-key/API-token patterns; no matches. | **Partial check only.** Binary artifacts, Git history, unrecognized secrets and personal research content need human review. Do not treat this as a full security clearance. |
| Commit authors | Recent history includes `Codex Draft` and `last_nurik` author strings. | **Unverified contributions.** No verified own-account contribution from all three students or different-student peer review is established. Do not rewrite attribution or create artificial contribution history. |

## External and substantive evidence gate

“Not recorded” means not established by the inspected repository, not proof an action never occurred. Replace each **not recorded** entry with an actual evidence link only after verification; no issue IDs or URLs are invented here.

| Required evidence | Current record | Concrete next check |
| --- | --- | --- |
| One continuing repository, visibility and license | **Pending — not recorded.** | Account holder records the real repository URL and license decision; verify pushed history and reviewed `main`. |
| Three students, supervisor and committee access | **Pending — not recorded.** | Check each actual account's accepted access/invitation and committee-readable revision/tag; retain permission evidence without exposing credentials. |
| Separate minimal project YouTrack backlog | **Local proposal present.** [Eight proposed issues](youtrack-backlog.md); actual YouTrack project, access and issues are not recorded. | Have the team review the proposals and dates, create the real project/issues, record genuine IDs, and verify owners, priorities and milestones. Link the real board and repository in both directions. Do not copy the 36 internal preparation tasks. |
| Issue → branch → commit/PR → artifact links | **Pending — not recorded.** | For real tracked project work, open one actual issue and follow its links to an attributable revision and deliverable; check meaningful descriptions and verification evidence. |
| Contributions from all three students | **Pending — not verified.** | Match account identities to each student and inspect their genuine work; documentation/research/design contributions count when actually authored/reviewed. |
| Different-student PR review | **Pending — not recorded.** | Inspect actual PR reviewer, comments, requested changes and revisions before merge; local commit author strings are insufficient. |
| Actual user evidence | **Pending.** [Relevance record](evidence/relevance.md) reports no live form, survey responses, qualifying discussions or client agreement. | Preview and launch the [prepared survey](evidence/questionnaire.md), document actual dates and results if available, and disclose that the separate discussion/client threshold remains unmet. No interviews are scheduled for the immediate submission. |
| Substantive supervisor review and responses | **Pending.** [Feedback record](supervisor-feedback.md) contains a relayed scope instruction, not artifact review. | Record real reviewed versions, date, specific comment, owner, decision and resulting change; check fixes against feedback. |
| Presentation review and rehearsal | **Pending.** Deck draft exists; no rehearsal record inspected. | Review all eleven topics and each student's contribution, rehearse, and trace real repository/task/review evidence during the walkthrough. |
| Reviewed `main`, immutable `pre-defense-1` and committee handoff | **Pending — not recorded.** | After review, verify tag equals the accepted commit and is pushed/readable; record actual repository/tag/summary/limitations/open tasks in the [submission record](october-submission.md). |

## Reproducible checks before acceptance

Run from the repository root; these are **read-only checks**, not claims that the external steps have happened:

```sh
git status --short
git branch --show-current
git remote -v
git log --all --format='%h %an <%ae> %s'
git diff --check
git diff --stat
git ls-files
git ls-files --others --exclude-standard
git check-ignore --no-index .env docs/evidence/raw/example.csv docs/evidence/contacts/example.csv
git tag --list
```

Inspect tracked and untracked changes together: `git diff` alone omits untracked artifacts. Review confidential content in current files and history without copying secret values into logs. Resolve local Markdown targets relative to each source file and open the final diagrams/deck separately for readability. Inspect actual issue/PR links in the connected services rather than inferring them from branch names.

After the real remote and tag exist, run the following checks. Failures mean the evidence is still unavailable; never invent a hash to fill the record:

```sh
git rev-parse main
git rev-parse 'pre-defense-1^{commit}'
git show --no-patch --format=fuller pre-defense-1
git ls-remote --heads origin main
git ls-remote --tags origin 'refs/tags/pre-defense-1*'
```

Confirm both local revisions equal the reviewed commit and distinguish the annotated tag object's hash from its peeled commit hash. Compare remote refs, then test committee access separately. Do not move an already submitted tag.

## Acceptance record — unfilled

- Accountable owner acceptance: **not recorded**.
- Different-student reviewer acceptance and actual PR link: **not recorded**.
- Real project YouTrack board/issue links: **not recorded**.
- Approved revision, remote URL and submission tag evidence: **not recorded**.
- Review findings resolved: **not recorded**; open gates are listed above.

**Conclusion:** Local preparation artifacts, bounded checks and a separate eight-issue project-backlog proposal exist. The collaborative review, actual YouTrack project/issues, qualifying empirical evidence and release/access workflow are still unverified. Task 34 remains a draft audit until its real acceptance evidence is supplied. The [reconciliation](plan-reconciliation.md) tracks the internal preparation tasks; it does not define the project's YouTrack backlog.
