# Existing Systems Comparison

**Method, 22 October 2026:** Desk review of official product documentation, not hands-on reliability testing. “Not documented” means the cited pages did not establish a feature; it does not prove the product lacks it. [Rosebud](existing-systems/criteria-and-system-1.md) is the closest browser-game comparator; [GDevelop](existing-systems/gdevelop.md) shows AI-assisted rule editing; [AI Dungeon](existing-systems/ai-dungeon.md) shows open-ended text play. The same nine criteria are applied below.

| Criterion | Rosebud AI | GDevelop AI Agent | AI Dungeon |
| --- | --- | --- | --- |
| Story input | Prompt and iterative edits; arbitrary full-story parsing is unproven. [R1][R2] | Prompts edit an existing project. [G1][G7] | Scenario prompt and text turns. [D1][D3] |
| Genre/design control | Mechanics and endings can be requested; no documented validated parameter form. [R1][R2] | Directly editable objects and events. [G1][G2] | Plot and instruction controls for a text adventure. [D3][D5] |
| Browser output | Preview and published 2D/3D game link. [R1][R2] | Editor project can publish to the browser. [G3–G4] | Browser text adventure, not a documented 2D game artifact. [D1][D2] |
| Actions/rules | Examples add movement, items, scoring and win conditions; general reliability is unproven. [R1][R3] | Explicit event conditions and actions. [G1][G2] | `Do`/`Say`/`Story` turns; optional scripts. [D2][D6] |
| Ending | User can request a win condition; reachability checking is not documented. [R1][R3] | Authored event can end a level; automatic whole-game check is not established. [G5][G7] | No documented checked win predicate per adventure. [D1][D3][D6] |
| Validation | Manual preview; automated playthrough not documented. [R1] | Preview and experimental input-driven gameplay tests. [G3][G8] | Manual scenario/script testing documented. [D3][D6] |
| Simplification record | Requested-to-actual mechanic list and reasons not documented. [R1][R2] | Plans/progress visible; consolidated mechanic-change list not established. [G7] | Such a list not documented. [D1][D2][D3] |
| Recovery | Chat revisions, Preview restart and History. [R1] | Pause, inspect, restore and retest. [G3][G7] | Undo, Retry and Edit for narrative turns. [D1][D2] |
| Sharing/versions | Published link and editor History. [R1] | Published link and project versions. [G4][G6] | Saved/shared adventures; game-artifact versions not established. [D1][D3][D7] |

## What this means for the diploma

Rosebud shows that prompt-to-browser-game creation already exists; GDevelop offers stronger direct rule editing; AI Dungeon offers freer narrative play in a different format. Our proposed contribution is to test a **bounded game specification**, a visible record of simplifications, and a publication gate that checks actions and a reachable ending before offering Play. GDevelop already documents experimental gameplay tests, so automated testing alone is not a novel distinction. The public sources do not establish whether competitors have the full proposed gate internally. Better fidelity or completion remains a hypothesis to evaluate, not a claimed result. The first slice therefore limits mechanics rather than promising every genre.

## Official sources

All sources were accessed 22 October 2026. Product descriptions are the vendors' claims and guides; no independent product trial was conducted. Current guides take precedence over older announcement posts where their scope differs. Account limits, prices and plan-dependent availability were not compared, so this table does not imply that all features are freely available to every account.

**Rosebud AI:** [R1] [Tutorial](https://rosebud.ai/tutorial); [R2] [AI game creator](https://rosebud.ai/ai-game-creator); [R3] [Platformer guide](https://lab.rosebud.ai/blog/how-to-build-a-platformer-with-ai).

**GDevelop:** [G1] [AI Agent guide](https://gdevelop.io/blog/make-games-with-ai-agent-gdevelop-automated-prompt); [G2] [Events editor](https://wiki.gdevelop.io/gdevelop5/interface/events-editor/); [G3] [Preview](https://wiki.gdevelop.io/gdevelop5/interface/preview/); [G4] [Publishing](https://wiki.gdevelop.io/gdevelop5/publishing/web/); [G5] [Level-ending tutorial](https://wiki.gdevelop.io/gdevelop5/tutorials/space-shooter/12-levels/); [G6] [Games and project versions](https://wiki.gdevelop.io/gdevelop5/interface/games/); [G7] [Current GDevelop AI guide](https://wiki.gdevelop.io/gdevelop5/interface/ai/); [G8] [Experimental gameplay tests](https://wiki.gdevelop.io/gdevelop5/interface/gameplay-tests/).

**AI Dungeon:** [D1] [Getting Started](https://help.aidungeon.com/getting-started); [D2] [How to play](https://help.aidungeon.com/faq/how-to-play); [D3] [Scenarios](https://help.aidungeon.com/faq/what-are-scenarios); [D4] [Story mode](https://help.aidungeon.com/faq/story-mode); [D5] [System settings](https://help.aidungeon.com/understanding-settings); [D6] [Scripting](https://help.aidungeon.com/scripting); [D7] [My Stuff](https://help.aidungeon.com/faq/my-stuff).
