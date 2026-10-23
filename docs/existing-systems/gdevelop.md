# Existing System 2: GDevelop AI Agent

**Evidence checked:** 22 October 2026. This desk review uses the nine criteria C1–C9 defined in `criteria-and-system-1.md`. It examines the GDevelop editor with its AI Agent, not a tested generation run. Product documentation is evidence of documented features and workflow, not independent proof of reliability.

GDevelop is a game engine with editable scenes, objects, event rules and browser publishing. Its AI Agent works inside a project: a user describes a feature; the agent plans and changes scene objects/events, shows progress, and expects inspection and iterative refinement. GDevelop explicitly says the agent is not an instant complete-game button and recommends breaking complex requests into smaller steps. [G1]

| ID | Evidence-based observation | Classification |
| --- | --- | --- |
| C1 | The AI Agent accepts plain-language requests inside an opened GDevelop project; official examples ask it to add a coin-collection system or health mechanics. The documented workflow starts with a project and feature requests. Conversion of an arbitrary complete storyline into a finished game in one step is not documented; GDevelop explicitly advises incremental requests for complex systems. [G1] | Documented with qualification |
| C2 | Authors can specify mechanics and numbers in prompts, such as damage and respawn. The agent can create/modify scenes, objects, events and behaviors, while the human can edit these directly in the engine. The sources do not show a dedicated, validated story-genre/goal input form. [G1][G2] | Documented with qualification |
| C3 | GDevelop projects can be previewed as games, and the gd.games publishing route hosts them for play in a browser on desktop or mobile. This is an editor-based workflow that requires a project and publication, rather than a documented single story-to-game conversion. [G3][G4] | Documented with qualification |
| C4 | The AI Agent can add objects and event logic; GDevelop's event system uses conditions and actions for rules. The official examples include collectibles, enemy behavior, menu transitions and health. The developer can inspect and revise the rules. [G1][G2] | Documented |
| C5 | GDevelop supports user-authored end rules: its official level tutorial defines a FinishLine collision and updates a level variable. That establishes expressibility, not automatic inference of an ending from a story or proof that every generated level has a reachable finish. [G5] | Documented with qualification |
| C6 | Preview/live preview, network preview, debugger and profiler support human testing. The AI Agent documentation tells authors to test its changes. The inspected sources do not describe an automated solver or guaranteed playability/reachability check on AI-created games. [G1][G3] | Documented manual tools; automated checks undocumented |
| C7 | The inspected AI Agent and publishing documentation does not describe a structured, user-facing list of mechanics it simplified or omitted with reasons. It does advise authors to split overly broad requests. [G1][G4] | Undocumented in inspected sources |
| C8 | The agent displays a plan/progress and can be paused. GDevelop recommends saving or copying a project before a large request; authors can inspect, change and refine results. A live preview can be updated after edits. These actions rely on author review. [G1][G3] | Documented |
| C9 | gd.games gives a shareable browser game link and supports a new published version, including a separate link for a test version. The Games section organizes multiple local/cloud project versions. [G4][G6] | Documented |

**Implication for our proposed system.** GDevelop shows a strong alternative model: AI assistance within a full authoring engine. Its explicit limitations and repeated author review make it inappropriate to claim that it already promises automatic finished games from unconstrained narratives. Our project could offer a narrower low-effort path from a storyline to a validated finite game, but that distinction is a proposed product goal, not an experimentally established advantage. GDevelop's editable rule/event model also supports our decision to expose or at least validate state-changing mechanics and ending conditions. [G1][G2][G5]

## Official sources

- **[G1]** GDevelop, “GDevelop’s AI Agent: Create Game Features Automatically,” product article dated 9 October 2025, accessed 22 October 2026. https://gdevelop.io/blog/make-games-with-ai-agent-gdevelop-automated-prompt
- **[G2]** GDevelop documentation, “Events editor,” accessed 22 October 2026. https://wiki.gdevelop.io/gdevelop5/interface/events-editor/
- **[G3]** GDevelop documentation, “Previewing your game,” accessed 22 October 2026. https://wiki.gdevelop.io/gdevelop5/interface/preview/
- **[G4]** GDevelop documentation, “Publishing your game on gd.games,” accessed 22 October 2026. https://wiki.gdevelop.io/gdevelop5/publishing/web/
- **[G5]** GDevelop documentation, “Space Shooter, Part 12: Levels,” accessed 22 October 2026. https://wiki.gdevelop.io/gdevelop5/tutorials/space-shooter/12-levels/
- **[G6]** GDevelop documentation, “Games,” accessed 22 October 2026. https://wiki.gdevelop.io/gdevelop5/interface/games/
