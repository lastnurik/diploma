# AI-assisted browser game generation

Group diploma project, Astana IT University, Software Engineering (SE-2417). The proposed platform accepts a user's game idea or storyline and aims to produce a complete, playable 2D game in the browser. The first implementation scope, supported mechanics and evaluation thresholds are under investigation. **There is no runnable generator or game here yet.**

**Problem and users:** Nontechnical story authors, educators and small teams face programming and game-engine work when turning a story into an interactive game. The intended outcome is a browser game with meaningful player actions and a reachable ending, with unsupported mechanics simplified transparently. Whether this meets users' needs still requires actual user evidence.

**Team:** Almadi Madiuly — browser frontend and UX/UI; Zhaksylyk Aldiyar — platform and backend; Yessengeldi Nurgeldi — AI generation and validation. Supervisor: Shyngys Alshynov. Research, shared contracts, integration and manuscript review require contributions from all three students.

## Preparation materials

| Required section | Current artifact | State |
| --- | --- | --- |
| 1. Project proposal | [Proposal](docs/proposal.md) | Draft |
| 2. Relevance and actual input | [Relevance record](docs/evidence/relevance.md), [questionnaire](docs/evidence/questionnaire.md), [Google Forms creation script](tools/create-google-survey.gs) | Rationale and form prepared; no live form or recorded responses |
| 3. Literature | [Critical review](docs/literature.md) | Draft synthesis of 14 scholarly sources; team/source review pending |
| 4. Existing systems | [Comparison](docs/existing-systems.md) | Three systems, nine shared criteria; desk research only |
| 5. Technology alternatives | [Comparison](docs/technology-comparison.md) | Three provisional decisions; feasibility tests pending |
| 6. Requirements | [Prioritized specification](docs/requirements.md) | Draft acceptance criteria; user validation pending |
| 7. Architecture | [Architecture](docs/architecture.md), [editable diagrams and SVG exports](diagrams/) | Three proposed diagrams; integration pending |
| 8. UX concept | [Prototype navigation](prototype/README.md): [authoring and progress](prototype/authoring-flow.svg), [result and play](prototype/result-play.svg), [catalogue and recovery](prototype/catalogue-recovery.svg); [use cases](docs/use-cases.md) | Linked SVG mockups; user review pending; no working application |
| 9. Verification | [Test and evaluation plan](docs/verification-plan.md), [prompt corpus](tests/evaluation-prompts.md) | Test designs; no execution or measured results |
| 10. Management and risks | [Milestones and risks](docs/project-plan.md), [proposed project backlog](docs/youtrack-backlog.md), [preparation audit](docs/project-task-plan.md) | Separate proposed project backlog; external YouTrack absent |
| 11. Supervisor response | [Feedback record](docs/supervisor-feedback.md) | Scope instruction received; substantive artifact comments absent |

The [plan reconciliation](docs/plan-reconciliation.md) compares the original 36 **preparation tasks** with actual evidence and unfinished work. Those historical internal tasks organize our preparation of the eleven sections, repository and presentation. They remain a trace and audit record and must not be imported wholesale into YouTrack. The diploma project has a separate [minimal proposed backlog](docs/youtrack-backlog.md). The separate academic DOCX presents a concise version of all eleven sections. The repository carries editable material and future revisions.

## Preparation workflow

Each owner receives one unblocked task from the [chronological preparation plan](docs/project-task-plan.md), reviews its acceptance criteria, prepares its assigned artifact, and checks the result. A different member reviews it before merge. The coordinator reconciles shared terms, IDs, interfaces and citations before assigning dependent preparation tasks. AI-authored material remains a draft until the actual student owner and reviewer accept it; AI activity does not count as a student's contribution.

The submitted academic manuscript is a separate `.docx`. Source analysis, requirement IDs, diagrams, prototype, evaluation protocol, task links and review evidence live in this repository and are summarized in the manuscript. A separate, provisional [implementation roadmap](docs/project-plan.md) describes later project stages without converting the 36 preparation tasks into coding tickets.

## Proposed technologies

The [technology comparison](docs/technology-comparison.md) provisionally recommends a Spring Boot API, PostgreSQL, RabbitMQ and a separate Python generation worker. Generation would produce a versioned, structured game specification for validation and interpretation by a fixed Phaser 3 runtime. The proposed first slice is a bounded top-down 2D scene game. These choices require team review and feasibility checks; no stack has been installed or demonstrated for this project.

## Git and YouTrack handoff

This is a **local Git repository on `pre-defense-draft`** with no remote, no verified student/supervisor/committee access, no YouTrack project or issue IDs, no verified student peer-review history and no submission tag. Local preparation commits contain draft materials; committing them does not establish student acceptance or review. Existing history includes both `Codex Draft` and `last_nurik` identities, but does not establish contributions from all three students. AI draft commits are not evidence of individual student contributions.

**Connection status at the 22 October 2026 audit:** GitHub authenticated read access works as `lastnurik`. The available connected tools can work with an existing repository's files, commits, issues and pull requests, but provide no repository-creation, collaborator-invitation or tag-creation tool. No YouTrack connection or project access is established. The account holder must complete those setup steps through the service interfaces or another authenticated route before the external workflow can be verified:

1. Have the assigned students review the local preparation drafts and commit any accepted revisions with truthful attribution. Decide the repository name, visibility and license; create one continuing GitHub or GitLab repository, preserve and push the local history, and establish `main` as the reviewed baseline. Give all three students and the supervisor access, arrange committee access, and record and verify the URL and permissions.
2. Create the YouTrack project from the separate [minimal proposed diploma-project backlog](docs/youtrack-backlog.md), after team review of its scope, owners, priorities and acceptance criteria. Record real issue IDs and links only after the issues exist; the 36 internal preparation numbers are not issue IDs and are not an import list. Link repository and issue tracker in both directions.
3. Each student works from their own account on a branch named with the real issue ID. Use descriptive commits and a pull/merge request linking the issue, verification and deliverable; a different student reviews it before merging to `main`.
4. After actual review, create and push immutable `pre-defense-1` at the exact reviewed revision. Verify access, history, links, documents and tag during the walkthrough. Record the URL and commit in the [submission record](docs/october-submission.md).

No setup, run or test command exists for an application yet. Add configuration examples, instructions and executed verification evidence when code is introduced. Keep credentials and identifiable research responses out of Git.
