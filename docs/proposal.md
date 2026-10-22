# Project Proposal

**Status:** Draft for the first pre-defense, 22 October 2026. Following the supervisor's instruction as clarified by the team, the October package prepares **all eleven sections at minimal depth**, together with the repository, YouTrack and presentation. The proposed users, first-version scope and technical solution remain hypotheses; further analysis and input are expected to clarify requirements in late November to mid-December. Concise coverage does not establish that evidence, student review or external submission requirements have been met.

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

The October package introduces all four objectives through initial research, proposed scope and requirements, architecture and UX drafts, and a verification plan. Implementation and measured evaluation remain later work. Further input will inform the precise requirements and acceptance measures in late November to mid-December; current design drafts are open to revision.

## Intended outcome and boundaries to decide

The intended final outcome is a working prototype that accepts a narrative game concept and produces a browser-playable game with an identifiable objective, consequential player input and a reachable conclusion. The proposed system comprises an authoring and play interface, a service that manages projects and generation requests, and a component that interprets the narrative for game generation. Supported genres and mechanics, the AI method, system architecture, data contract and evaluation thresholds are **not yet approved**. A synopsis or code fragment alone would not satisfy the intended outcome. The research and feasibility phase will establish how to handle requests outside the supported scope, including when to simplify a mechanic and when to explain that generation is infeasible.

## Team contribution

| Student | Preliminary area of independent contribution |
| --- | --- |
| Almadi Madiuly | Frontend and UX/UI: study the authoring workflow; subsequently implement and evaluate the browser interface. |
| Zhaksylyk Aldiyar | Backend and platform: assess integration constraints; subsequently implement the service and generation workflow. |
| Yessengeldi Nurgeldi | AI and generation: assess generation and validation methods; subsequently implement and evaluate the generation component. |

All three share research, writing, interface decisions and peer review. The [36-task preparation plan](project-task-plan.md) assigns the eleven sections, repository, YouTrack and presentation; it is not the software implementation backlog. Shared interfaces and evaluation criteria remain proposed until reviewed. The [plan reconciliation](plan-reconciliation.md) records local drafts and outstanding acceptance conditions.

## Provisional stages

| Period | Checkpoint |
| --- | --- |
| By 24 October 2026 | Prepare concise proposal, relevance/evidence record, literature, existing-system and technology comparisons, requirements, three diagrams, UX concept, verification plan, project organization and supervisor-response record; prepare the repository, YouTrack and presentation. Report missing evidence and review openly. |
| Late October–November 2026 | Gather actual user/supervisor input, preserve divergent needs and investigate feasibility assumptions before scope agreement. |
| Late November–mid-December 2026 | Agree bounded scope, requirements and acceptance criteria using that input. |
| Mid–late December 2026 | Freeze the proposed shared game/job contract with valid/invalid fixtures and recorded checks; review the static UX journey with users in December after scope agreement. |
| Late December 2026–January 2027 | Target one manually authored browser-playable game with a meaningful action, ending and restart. |
| January–February 2027 | Target one bounded AI generation/validation pilot with explicit simplification and failure handling. |
| February–March 2027 | Integrate the first complete request-to-play journey across client, platform and generation. |
| March–April 2027 | Evaluate the slice under fixed conditions, report failures and revise defects. |
| May 2027 | Reconcile final review, documentation and demonstration. |

These provisional windows follow the [separate proposed project backlog](youtrack-backlog.md) and [project plan](project-plan.md); they are subject to evidence, feasibility and supervisor/team review, not approved dates or verified delivery commitments. They replace the older accelerated implementation schedule retained in the historical preparation plan.

## First pre-defense status

The October package presents the project concept and concise material for all eleven sections. Local research, requirements, diagram, UX and verification artifacts are preparation drafts for review, not excluded future sections. The separate academic DOCX summarizes this initial analysis; the [repository index](../README.md) links editable supporting material. No runnable generator, generated-game evaluation, recorded user discussions or substantive supervisor artifact review is evidenced. Finalized requirements, approved architecture, actual YouTrack/remote-review links and presentation/submission evidence remain pending as detailed in the reconciliation. A working application is the intended later result, not a claimed October achievement.

**Source:** Supplied supervisor proposal, *Представление научного руководителя о готовности обучающихся к выполнению дипломного проекта*, pp. 1–5. This text extracts the project description and role division; the separate form contains personal academic information and should not be published in a public repository. The October depth follows the supervisor's later message supplied by the user and the team's clarification that every section remains included; see the [feedback record](supervisor-feedback.md).
