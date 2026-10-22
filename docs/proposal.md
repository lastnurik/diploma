# Project Proposal

## Identification

**English title:** Development of an AI-Assisted Platform for Generating Playable Browser Games from User-Provided Storylines  
**Russian title:** Разработка платформы для генерации готовых к запуску браузерных игр на основе пользовательских сюжетов с использованием искусственного интеллекта  
**Programme:** Software Engineering, SE-2417, Astana IT University  
**Team:** Almadi Madiuly; Zhaksylyk Aldiyar; Yessengeldi Nurgeldi  
**Supervisor:** Shyngys Alshynov  
**Period:** October 2026 to May 2027  
**Format:** Group diploma project

## Problem and intended users

A user can describe a game story in ordinary language, but turning it into a working game also requires consistent rules, controls, scene data and an achievable ending. A prose outline or generated source file does not itself demonstrate a playable result. The proposed platform addresses that gap for story authors, teachers and small teams that need a quick browser-based 2D game prototype. The relevance of these user groups and their precise needs remain hypotheses until supported by the planned user research.

## Aim and objectives

The aim is to build a platform that transforms a user-provided storyline and selected parameters into a complete, playable 2D browser game with a beginning, core gameplay and an ending. The system should preserve the central premise when simplifying mechanics that cannot be reliably generated. Its objectives are to:

1. Let the user enter/edit a story and game parameters and view project versions and generation progress.
2. Interpret the story into a structured game specification describing genre, objective, scenes, entities, supported player actions, state changes and completion conditions.
3. Validate the specification and produced game data, attempt a bounded correction where appropriate, and report an actionable failure otherwise.
4. Use a controlled browser game client to preview and run the generated result; show the user what was simplified.
5. Provide server APIs, asynchronous generation jobs, artifact/version storage and safe delivery of game content.
6. Evaluate launch, presence of requested core actions, ability to reach an ending, and the fidelity of simplifications on varied story prompts.

## Proposed system boundary and outcome

The browser client collects the request and renders a playable game; the platform server manages projects, versions, jobs and delivered artifacts; the generation service maps a story to a verifiable specification and game data. The first supported mechanic set will be deliberately bounded. Unsupported requests will be simplified transparently or rejected with an explanation. A specification alone is an intermediate artifact, not a successful final game.

The expected final outcome is a working prototype that takes a story, creates and checks a game specification, reveals simplifications and launches a game in the browser that can be completed. Planned evaluation prompts include different genres, such as platformer, racing and card-game ideas, with any out-of-scope mechanic explicitly identified. Launch, main actions and completion will be checked separately. Functional reliability has priority over visual sophistication.

## Individual contribution and integration

| Student | Development responsibility and independently assessable output |
| --- | --- |
| Almadi Madiuly | Frontend and UX/UI: story entry, parameters, progress, simplifications, project catalogue, preview/play and retry; client application and checked user scenarios. |
| Zhaksylyk Aldiyar | Backend and platform architecture: data model and versions, API, jobs, statuses, logging, artifact storage/publication, safe content delivery; documented service, integration tests and reproducible deployment. |
| Yessengeldi Nurgeldi | AI engineering and generation backend: genre/goal/action extraction, structured specification, scenes/rules/data, simplification, validation, repair/failure handling; generation service and evaluation on varied prompts. |

The team jointly agrees the specification format, simplification policy and evaluation corpus. Integration must demonstrate a complete request-to-playable-game path; each member presents the result and evidence of their own module. Non-development pre-defense work is divided across all three in the task plan.

## Stages

| Period | Checkpoint |
| --- | --- |
| October–November 2026 | Agree scope, specification and acceptance criteria; show story input and launch a prewritten game. |
| December 2026 | Build client, server and executable mechanics; manually made games launch and end. |
| January–February 2027 | Connect generation to the platform; show simplifications and handle failures. |
| March–April 2027 | Evaluate varied prompts, measure successful generation and resolve defects. |
| May 2027 | Complete documentation, final demonstration and review responses. |

## First pre-defense status

The 24 October 2026 submission is the analysis and design checkpoint. It contains the project scope, relevance evidence, literature and alternatives, verifiable requirements, three architecture diagrams, UX prototype, evaluation plan, milestones and reviewed repository history. It does not assert that the final application or measured generation results already exist.

**Source:** Supplied supervisor proposal, *Представление научного руководителя о готовности обучающихся к выполнению дипломного проекта*, pp. 1–5. This text extracts the project description and role division; the separate supervisor-readiness form contains personal academic information and should not be published in a public repository.
