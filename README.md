# AI-Assisted Browser Game Generation

**Diploma project · Astana IT University · Software Engineering (SE-2417)**
**Students:** Almadi Madiuly (frontend and UX/UI), Zhaksylyk Aldiyar (platform), Yessengeldi Nurgeldi (AI generation). **Supervisor:** Shyngys Alshynov.

The proposed platform turns a user-provided storyline into a short, playable 2D browser game with meaningful actions and a reachable ending. This repository contains proposal-stage research and design, not a working generator or measured game results.

**Provisional technologies:** Spring Boot, PostgreSQL, RabbitMQ, a Python generation worker, a versioned game specification with a fixed runtime, and Phaser 3. The [comparison](docs/technology-comparison.md) records the alternatives and feasibility checks before final selection.

## Start here

1. [Proposal and initial analysis](submission/diploma-final-proposal-and-analysis.docx) — the eleven required sections and references.
2. [Presentation](submission/diploma-final-presentation.pptx) — the concise committee overview.
3. [Architecture](docs/architecture.md) and [static UX prototype](prototype/README.md) — see the proposed system and author journey.

## Supporting sections

- **Why and for whom:** [proposal](docs/proposal.md), [relevance and evidence limits](docs/evidence/relevance.md), [literature](docs/literature.md), [existing systems](docs/existing-systems.md).
- **What and how:** [technology comparison](docs/technology-comparison.md), [requirements](docs/requirements.md), [architecture](docs/architecture.md), [prototype](prototype/README.md).
- **How it will be checked and managed:** [project plan and seven tasks](docs/project-plan.md), [supervisor record](docs/supervisor-feedback.md).

The questionnaire export contains 142 response records, but recruitment and distinct participation are unverified. It does not replace the required 3–5 user discussions or substantive client agreement. The [questionnaire note](docs/evidence/questionnaire.md) records its limits. Scope, mechanics and technology choices remain provisional; the [game contract draft](docs/decisions/scope-and-contract.md) and [evaluation prompts](tests/evaluation-prompts.md) are plans, not test results. The prototype is a static storyboard. There are no application setup commands yet.

[Repository on GitHub](https://github.com/lastnurik/diploma) · [YouTrack project workspace](https://aitu-gamegen.youtrack.cloud/) · [Editable diagram sources](diagrams/)
