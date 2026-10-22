# Conceptual author journey

**Status:** Low-fidelity UX discussion artifact, 22 October 2026. These are static SVG wireframes, not a runnable product or evidence of implemented generation, validation, persistence or gameplay. The examples and timestamps are illustrative. The supported mechanics, preferences, layout and messages remain proposals for review.

The intended author is a person with a game idea or story and no programming or game-engine experience. The proposed outcome is a playable 2D browser game with an objective, meaningful actions and a reachable ending. These screens explore how the author could understand and review that outcome.

## Open the screens

- [A · Input and progress](authoring-flow.svg): screens 1–2.
- [B · Result and play](result-play.svg): screens 3–4.
- [C · Catalogue and recovery](catalogue-recovery.svg): screens 5–6.

Open each SVG in a browser or image viewer. Read left to right, then continue with the next file. The drawn buttons are labels for the walkthrough; they do not perform actions.

## Navigation and state notes

| Screen | Author action | Intended destination and retained state |
| --- | --- | --- |
| 1. Idea and preferences | Generate version | 2. Create a job for a new version using the entered story and preferences. |
| 1. Idea and preferences | Catalogue | 5. Return to project/version list; draft retention needs research. |
| 2. Generation | Wait for service updates | 3 only after a ready result; 6 after terminal failure. Display recorded stages and last update, without invented percentages or an unsupported time estimate. |
| 2. Generation | Catalogue / return later | 5; reopening the in-progress version returns to 2 and its current recorded state. Leaving the view does not imply job cancellation. |
| 3. Result | Play | 4, opening the exact reviewed version. Explain requested mechanics, actual replacement and reason before launch. |
| 3. Result | Revise idea | 1, prefilled from that version. Generating again creates a new version; earlier versions remain identifiable. |
| 4. Play | Move / interact | The player changes game state toward the visible objective. The clinic interaction after carrying medicine illustrates an ending, rather than a text-only synopsis. |
| 4. Ending | Restart / result / catalogue | Reset only this play session, return to 3, or return to 5. The ending inset shows an alternative state of the same play screen. |
| 5. Catalogue | Open a version | 2, 3 or 6 according to that version's status; choose a ready version to review and play it. |
| 6. Failure | Edit idea | 1 with original story/preferences. Failed version retains its reason and cannot be launched. |
| 6. Failure | Retry unchanged | 2 with the same input in a new version/job; do not silently overwrite the failed attempt or an earlier ready game. |

**Suggested walkthrough:** 1 → 2 → 3 → 4 → ending → 5 → failed version → 6 → edit or retry. An alternative failure path is 1 → 2 → 6. Show the reviewer each transition manually.

## What to review with prospective users

1. Can a nontechnical author explain what to enter and what will be produced?
2. Does the progress screen distinguish an active stage from a completed result without implying measured progress that is unavailable?
3. Can the author identify the gameplay simplification and decide whether to play or revise?
4. Can the player find the objective, controls and completion state?
5. Can the author distinguish ready, in-progress and failed versions and recover without losing their original input?

These are review prompts, not completed usability findings. The screens do not settle supported genres, authentication, sharing, asset editing or production architecture. They follow the intended outcome in [the proposal](../docs/proposal.md); the bounded scene and version workflow illustrate the [proposed scope](../docs/decisions/scope-and-contract.md), which is not approved scope.
