# Project Relevance — October 2026

**Status, 22 October 2026:** This is an initial rationale for the [project proposal](../proposal.md), not a finding from users. No survey responses, user interviews, client agreement or product trial have been documented. The [draft questionnaire](questionnaire.md) is an instrument only. Final requirements and claims about user demand should wait for quality analysis and further input in late November to mid-December.

## Problem and proposed contribution

A person may have a story or game idea but lack the technical skills to create a playable game from it. The project proposes an AI-assisted path from an ordinary-language storyline or narrative game idea to a **ready-to-play 2D browser game**. It aims to let a nontechnical creator try the result in the browser without building it in a game engine or writing code. Turning a story into coherent player actions, game state and an achievable ending is the engineering challenge behind that promise. This is a proposed problem and solution, not evidence of user demand or a working product. Story authors, educators and small creative teams are possible groups to study; their skills and priorities remain unknown.

Related tools confirm that this is an active design space, so “games from prompts” alone is not a distinct contribution. [Rosebud AI's tutorial](https://rosebud.ai/tutorial) describes prompt creation, playable preview, iteration and publishing; [GDevelop's AI Agent](https://gdevelop.io/blog/make-games-with-ai-agent-gdevelop-automated-prompt) edits objects and event logic in an existing project and recommends incremental requests; [AI Dungeon's guide](https://help.aidungeon.com/getting-started) describes open-ended interactive storytelling. These are official descriptions of different workflows, not independent benchmarks. A detailed comparison remains a working research draft for the next phase. It does not establish that those products lack internal validation or that users prefer this proposal.

Research supports **questions to investigate**, rather than a projected success rate. Wang et al.'s [ByteSized32 study](https://aclanthology.org/2023.emnlp-main.830/) distinguishes whether generated text games run from fidelity and winnability, in a setting unlike browser games from free-form stories. [Human-AI interaction guidelines](https://www.microsoft.com/en-us/research/publication/guidelines-for-human-ai-interaction/) motivate clear capability and failure communication. The broader literature review remains working research for the next phase; none of its results measures this platform.

## Hypotheses and next evidence

| Question to test | Focused input needed before fixing requirements |
| --- | --- |
| Do people with game ideas but without game-development skills want a playable browser result, and for what purpose? | Ask candidate users about their ideas, technical skills, prior creation attempts, barriers and desired outputs; record roles, dates, anonymized statements and disagreements. Do not equate stated interest with adoption. |
| Which story elements and mechanics must survive simplification? | Ask users to rank premise, central actions and ending against examples that replace unsupported mechanics; compare judgments rather than assume one genre-independent rule. |
| What makes the generated result acceptable? | Review a small manually authored playable example and several story scenarios; ask observers whether controls, goal, failure explanation and ending are understandable. Later test actual generated outputs separately. |
| What feasible technical boundary should the team promise? | Complete a critical alternatives and literature review, agree a bounded mechanic set and verification criteria with the supervisor, then revise the proposal and requirements in light of the evidence. |

For the October checkpoint, submit the proposal and this qualified relevance rationale with a minimal traceable repository and task record. During November and early December, collect and analyze genuine user/client input and supervisor feedback, record how findings change scope, and finalize requirements only in the late-November to mid-December window. Until then, the proposed differentiator—transparent simplification plus separate playability and completion checks—is a **testable hypothesis**, not a demonstrated advantage.
