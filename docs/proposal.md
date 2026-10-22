# Project Proposal

**Status:** First pre-defense proposal, 22 October 2026. The supervisor has requested a limited October submission. The proposed users, scope and technical solution are hypotheses to refine with more analysis and input; detailed requirements are expected in late November to mid December.

## Identification

**English title:** Development of an AI-Assisted Platform for Generating Playable Browser Games from User-Provided Storylines  
**Russian title:** Разработка платформы для генерации готовых к запуску браузерных игр на основе пользовательских сюжетов с использованием искусственного интеллекта  
**Programme:** Software Engineering, SE-2417, Astana IT University  
**Team:** Almadi Madiuly; Zhaksylyk Aldiyar; Yessengeldi Nurgeldi  
**Supervisor:** Shyngys Alshynov  
**Period:** October 2026 to May 2027  
**Format:** Group diploma project

## Problem and proposed audience

Prospective game creators may possess an original concept or storyline without the programming and game-engine expertise needed to implement it as a playable digital game. The proposed platform would accept a user-authored narrative and selected game preferences, then generate a complete 2D game that can be launched and played in a web browser. The central technical problem is to convert an underspecified narrative into a consistent representation of game state, player actions, progression rules and a reachable ending while retaining the essential elements of the original concept. The intended primary users are people without game-development experience; writers, educators and small creative teams are candidate groups for investigation. Their actual needs, preferred workflows and tolerance for simplification remain to be established through direct research. The [relevance section](evidence/relevance.md) distinguishes existing evidence from these hypotheses.

## Aim and preliminary objectives

The aim is to design and evaluate an AI-assisted platform that transforms a user-provided storyline and selected constraints into a playable 2D browser game without requiring the user to program or operate a game engine. The evaluation will distinguish successful generation and launch from the ability to perform meaningful actions, reach an ending and recognize the intended story in the result. The preliminary objectives are:

1. Investigate intended users and their authoring needs through direct input, a review of relevant research and a comparison of existing tools.
2. Define a feasible initial set of game mechanics and a representation for narrative goals, scenes, player actions and endings.
3. Design and implement the browser interface, supporting platform service and AI-assisted generation workflow once the initial scope has been agreed.
4. Evaluate generated games for execution, player actions, attainable completion and correspondence to the source narrative; document failure cases and limitations.

The October submission addresses objective 1 only in its initial desk-research form. Further input will inform the precise requirements and acceptance measures in late November to mid December.

## Intended outcome and boundaries to decide

The intended final outcome is a working prototype that accepts a narrative game concept and produces a browser-playable game with an identifiable objective, consequential player input and a reachable conclusion. The proposed system comprises an authoring and play interface, a service that manages projects and generation requests, and a component that interprets the narrative for game generation. Supported genres and mechanics, the AI method, system architecture, data contract and evaluation thresholds are **not yet approved**. A synopsis or code fragment alone would not satisfy the intended outcome. The research and feasibility phase will establish how to handle requests outside the supported scope, including when to simplify a mechanic and when to explain that generation is infeasible.

## Team contribution

| Student | Preliminary area of independent contribution |
| --- | --- |
| Almadi Madiuly | Frontend and UX/UI: study the authoring workflow; subsequently implement and evaluate the browser interface. |
| Zhaksylyk Aldiyar | Backend and platform: assess integration constraints; subsequently implement the service and generation workflow. |
| Yessengeldi Nurgeldi | AI and generation: assess generation and validation methods; subsequently implement and evaluate the generation component. |

All three will agree shared interfaces and evaluation criteria after the research phase. [October tasks](october-tasks.md) assign the limited submission and the next input collection.

## Provisional stages

| Period | Checkpoint |
| --- | --- |
| By 24 October 2026 | Submit project proposal, honest relevance analysis, minimal shared repository and tasks. |
| Late October–November 2026 | Gather user/supervisor input, compare research and existing tools, test feasibility assumptions. |
| Late November–mid December 2026 | Agree bounded scope, requirements, acceptance measures and architecture using those findings. |
| January–May 2027 | Implement, integrate, evaluate and document the agreed prototype; refine dates after scope review. |

## First pre-defense status

The October package presents a defined project concept and the questions that the next research phase must resolve. It contains no implemented or evaluated system, completed interviews, finalized requirements or approved architecture. Earlier detailed working drafts are retained separately for later review and are outside this submission.

**Source:** Supplied supervisor proposal, *Представление научного руководителя о готовности обучающихся к выполнению дипломного проекта*, pp. 1–5. This text extracts the project description and role division; the separate form contains personal academic information and should not be published in a public repository. The October scope follows the supervisor's later message supplied by the user.
