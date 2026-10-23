# AI-Assisted Browser Game Generation

**Diploma project — Astana IT University, Software Engineering (SE-2417)**

The project investigates a platform that turns a user-provided game idea or storyline into a short, playable 2D browser game without requiring programming or a game engine. The intended result has consequential player actions, a goal and a reachable ending. This repository contains the project proposal and initial analysis, research synthesis, requirements and design drafts, static interface mockups, and an evaluation protocol. It does not contain an implemented game generator or measured product results.

**Students:** Almadi Madiuly (frontend and UX/UI), Zhaksylyk Aldiyar (backend and platform), Yessengeldi Nurgeldi (AI generation and validation). **Supervisor:** Shyngys Alshynov.

## Academic materials

| Material | Contents |
| --- | --- |
| [Proposal and initial analysis](submission/diploma-final-proposal-and-analysis.docx) | Twelve-page manuscript with the eleven required sections and references. |
| [Presentation](submission/diploma-final-presentation.pptx) | Twelve-slide summary of the proposal, research, design and evaluation plan. |
| [Project proposal](docs/proposal.md) and [relevance](docs/evidence/relevance.md) | Problem, intended users, objectives, preliminary questionnaire distributions and evidence limitations. |
| [Literature](docs/literature.md) and [existing systems](docs/existing-systems.md) | Critical research synthesis and three-product comparison using nine shared criteria. |
| [Technology comparison](docs/technology-comparison.md) and [requirements](docs/requirements.md) | Three provisional technology decisions and prioritized functional and quality requirements. |
| [Architecture](docs/architecture.md) and [diagrams](diagrams/) | Proposed context, use-case and component views with editable Mermaid sources and SVG exports. |
| [UX concept](prototype/README.md) and [verification plan](docs/verification-plan.md) | Static authoring/play storyboard and planned checks, measures and baseline. |
| [Project plan](docs/project-plan.md), [project task outline](docs/youtrack-backlog.md), [supervisor record](docs/supervisor-feedback.md) | Team responsibilities, milestones, risks, proposed work packages and documented scope guidance. |

The manuscript is the concise academic account. The linked Markdown and editable diagrams provide detail and traceability for its design claims.

## Research and design status

A supplied Google Forms export has 142 response records. Its descriptive distributions are summarized in the [relevance analysis](docs/evidence/relevance.md); the [instrument and provenance note](docs/evidence/questionnaire.md) explains the collection limits. Respondent identities, distinct participation and recruitment have not been independently established. The figures therefore do not estimate demand or establish the priorities of the intended creator population. The separate requirement for three to five user discussions or substantive client agreement is not evidenced by the export.

The proposed first implementation uses a bounded set of 2D actions and a versioned game specification interpreted by a controlled browser runtime. The precise supported mechanics and stack require feasibility assessment. The [scope draft](docs/decisions/scope-and-contract.md), [module requirements](docs/requirements.md) and [evaluation prompts](tests/evaluation-prompts.md) describe hypotheses and planned checks, not implemented features. Prototype screens in `prototype/` are static illustrations. There are no application setup or execution commands yet.

## Repository structure

- `submission/` — current DOCX and PPTX.
- `docs/` — proposal, evidence, literature, comparisons, requirements, architecture, evaluation, project plan and supervisor record.
- `diagrams/` — editable `.mmd` sources and SVG exports for the three architectural views.
- `prototype/` — linked SVG storyboard covering authoring, progress, result, play, catalogue and recovery.
- `tests/` — proposed story-prompt corpus, with no executed test results.
- `tools/` — questionnaire creation source.

The repository is published at [github.com/lastnurik/diploma](https://github.com/lastnurik/diploma). The [project work packages](docs/youtrack-backlog.md) describe the planned development sequence independently of the initial analysis.
