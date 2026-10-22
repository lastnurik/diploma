# AI-Assisted Browser Game Generation — Diploma Proposal

Software Engineering group diploma project at Astana IT University (SE-2417), supervised by **Shyngys Alshynov**. The proposed AI-assisted platform would transform a user-authored game concept or storyline into a playable 2D browser game without requiring the user to program or work in a game engine. Writers, educators and small creative teams are candidate user groups; their needs and preferred workflows require direct investigation.

## Current status and October review

This repository currently holds the **minimal October proposal and planning files**, not a working game. The team reports that the supervisor narrowed this checkpoint to the proposal, relevance evidence, and a minimal repository with traceable tasks; the exact revised wording still needs to be recorded. Detailed research and design drafts are kept separately as future material. No technology stack has been approved or implemented here.

Read these in order:

1. [Project proposal](docs/proposal.md) — aim, scope, proposed outcome, stages and team responsibilities.
2. [Relevance and evidence status](docs/evidence/relevance.md) — what is evidenced, what remains an assumption, and the proposed user-input protocol. No survey responses or qualifying discussions have been recorded here yet.
3. [October task board](docs/october-tasks.md) — bounded deliverables, owners, reviewers, dependencies and open conditions for this checkpoint.

## Team responsibilities

| Student | Planned development area |
| --- | --- |
| Almadi Madiuly | Browser frontend, UX/UI, authoring and playable client. |
| Zhaksylyk Aldiyar | Platform API, projects/versions, asynchronous jobs, storage and safe delivery. |
| Yessengeldi Nurgeldi | Story interpretation, game specification, AI generation, validation and evaluation. |

The team will agree the shared specification and integration contract together. These are responsibilities for planned development, not a claim that the modules have been implemented.

## Next evidence step

Use the draft [questionnaire](docs/evidence/questionnaire.md) to collect dated, anonymized responses from prospective users, then seek 3–5 follow-up discussions or substantive client input if required by the review criteria. Record response counts, methods, findings and resulting decisions in the relevance record. Confirm the revised October expectations with the supervisor and maintain the task board as work proceeds.

There are no application setup or run instructions yet because this repository has no runnable application.

## Repository workflow and pending setup

The uploaded repository rules require one continuing GitHub or GitLab repository, individual student accounts, a YouTrack project, task branches, peer-reviewed pull/merge requests, and a `pre-defense-1` tag identifying the exact submitted revision. This working tree is local; it has no remote, verified collaborator access, YouTrack IDs, completed student reviews or submission tag. Do not present those items as complete.

1. One student creates a private repository, adds this project as its initial contents, and grants the other two students and supervisor access. Arrange committee access before the review. Record the URL in `docs/october-submission.md`.
2. Create the assigned tasks in YouTrack with owner, deadline, deliverable and acceptance criteria; add the real project URL and issue IDs to this repository. Use the issue ID in each subsequent branch and commit or pull-request description.
3. Each student reviews and revises their own assigned draft from their own identifiable Git account. Use a task branch, open a pull request describing the change and its checks, obtain another student's review, and merge into `main` only after the task's criteria are met. Link the pull request or commit from YouTrack.
4. After the actual submission revision is reviewed and merged, tag that commit `pre-defense-1` and record the repository URL, tag, completed work, limitations and open tasks in `docs/october-submission.md`. Continue later stages in the same repository without moving the submitted tag.

The selected technology stack remains undecided and will be recorded here after the research and scope review. Add setup, run and test commands when executable code exists. Keep secrets and personal data out of Git.
