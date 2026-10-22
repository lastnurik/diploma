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

A person can describe a game story in ordinary language, but turning it into a working game also requires coherent rules, controls, scene data and an achievable ending. A prose outline or generated code file does not by itself demonstrate a playable result. We propose to investigate a browser-based tool for story authors, teachers and small creative teams who may want a quick game prototype. Whether these groups need this tool, which mechanics matter to them and what compromises they accept remain research questions. The [relevance section](evidence/relevance.md) separates current evidence from those assumptions.

## Aim and preliminary objectives

The proposed aim is a platform that transforms a user-provided storyline and selected parameters into a playable browser game with a beginning, meaningful player actions and an ending. We will examine how faithfully it can preserve the central story if mechanics must be simplified. Preliminary objectives are:

1. Investigate intended users, comparable tools and relevant research; collect actual stakeholder input.
2. Determine a feasible range of game mechanics and a representation of story goals, scenes, player actions and endings.
3. Design and build a browser authoring and play experience with a platform service and an AI-assisted generation component.
4. Evaluate actual outputs for launch, central player actions, observed ending and fidelity to the story; report failures and limitations.

The October submission addresses objective 1 only in its initial desk-research form. Further input will inform the precise requirements and acceptance measures in late November to mid December.

## Intended outcome and boundaries to decide

The intended final outcome is a working prototype that accepts a story and launches a game in the browser that a person can complete. The concept includes a browser interface, a service for projects and generation workflow, and a component that interprets the story. The exact division, game types, AI method, supported actions, simplification policy, data contract and technologies are **not yet approved**. A generated outline alone is an intermediate artifact rather than the intended final result. We will choose a bounded first scope based on the evidence and feasibility work, and distinguish supported behavior from transparently simplified or rejected requests.

## Team contribution

| Student | Preliminary area of independent contribution |
| --- | --- |
| Almadi Madiuly | Frontend and UX/UI: investigate author workflow and expectations; later implement and evaluate the browser experience. |
| Zhaksylyk Aldiyar | Backend and platform: investigate integration and delivery constraints; later implement the service and end-to-end path. |
| Yessengeldi Nurgeldi | AI and generation: investigate generation, validation and fidelity; later implement and evaluate the generation component. |

All three will agree shared interfaces and evaluation criteria after the research phase. [October tasks](october-tasks.md) assign the limited submission and the next input collection.

## Provisional stages

| Period | Checkpoint |
| --- | --- |
| By 24 October 2026 | Submit project proposal, honest relevance analysis, minimal shared repository and tasks. |
| Late October–November 2026 | Gather user/supervisor input, compare research and existing tools, test feasibility assumptions. |
| Late November–mid December 2026 | Agree bounded scope, requirements, acceptance measures and architecture using those findings. |
| January–May 2027 | Implement, integrate, evaluate and document the agreed prototype; refine dates after scope review. |

## First pre-defense status

The limited October package does not claim a built or evaluated system, conducted interviews, finalized requirements, approved architecture or supervisor acceptance of technical choices. It gives the committee a concrete proposal and exposes what evidence is still needed. Earlier detailed working drafts are retained separately for later review and are not part of this submission.

**Source:** Supplied supervisor proposal, *Представление научного руководителя о готовности обучающихся к выполнению дипломного проекта*, pp. 1–5. This text extracts the project description and role division; the separate form contains personal academic information and should not be published in a public repository. The October scope follows the supervisor's later message supplied by the user.
