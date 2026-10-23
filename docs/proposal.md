# Project Proposal

**Status, October 2026:** Initial project proposal. The intended users, first-version scope and technical solution remain hypotheses; further analysis and input will inform requirements in late November to mid-December.

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

Initial research, proposed scope and requirements, architecture and UX drafts, and a verification plan address these objectives at the proposal stage. Implementation and measured evaluation remain later work.

## Intended outcome and boundaries to decide

The intended final outcome is a working prototype that accepts a narrative game concept and produces a browser-playable game with an identifiable objective, consequential player input and a reachable conclusion. The proposed system comprises an authoring and play interface, a service that manages projects and generation requests, and a component that interprets the narrative for game generation. Supported genres and mechanics, the AI method, system architecture, data contract and evaluation thresholds are **not yet approved**. A synopsis or code fragment alone would not satisfy the intended outcome. The research and feasibility phase will establish how to handle requests outside the supported scope, including when to simplify a mechanic and when to explain that generation is infeasible.

## Team contribution

| Student | Preliminary area of independent contribution |
| --- | --- |
| Almadi Madiuly | Frontend and UX/UI: study the authoring workflow; subsequently implement and evaluate the browser interface. |
| Zhaksylyk Aldiyar | Backend and platform: assess integration constraints; subsequently implement the service and generation workflow. |
| Yessengeldi Nurgeldi | AI and generation: assess generation and validation methods; subsequently implement and evaluate the generation component. |

All three share research synthesis and interface decisions. The [project work packages](youtrack-backlog.md) outline the proposed development sequence; shared interfaces and evaluation criteria remain provisional.

## Provisional stages

| Period | Checkpoint |
| --- | --- |
| October 2026 | Initial proposal, relevance analysis, research and technology comparisons, requirements, three diagrams, UX concept, verification plan and presentation. |
| Late October–November 2026 | Gather actual user/supervisor input, preserve divergent needs and investigate feasibility assumptions before scope agreement. |
| Late November–mid-December 2026 | Agree bounded scope, requirements and acceptance criteria using that input. |
| Mid–late December 2026 | Freeze the proposed shared game/job contract with valid/invalid fixtures and recorded checks; review the static UX journey with users in December after scope agreement. |
| Late December 2026–January 2027 | Target one manually authored browser-playable game with a meaningful action, ending and restart. |
| January–February 2027 | Target one bounded AI generation/validation pilot with explicit simplification and failure handling. |
| February–March 2027 | Integrate the first complete request-to-play journey across client, platform and generation. |
| March–April 2027 | Evaluate the slice under fixed conditions, report failures and revise defects. |
| May 2027 | Reconcile final review, documentation and demonstration. |

These provisional windows follow the [project plan](project-plan.md) and depend on evidence, feasibility and supervisor/team review.

## Current stage

The [academic manuscript](../submission/diploma-final-proposal-and-analysis.docx) summarizes the initial analysis, while this repository holds editable supporting material. No runnable generator, measured game evaluation, qualifying user discussions or substantive supervisor artifact review is evidenced at this stage.

**Source:** Supervisor project proposal, *Представление научного руководителя о готовности обучающихся к выполнению дипломного проекта*, pp. 1–5. The later scope guidance is summarized in the [supervisor record](supervisor-feedback.md).
