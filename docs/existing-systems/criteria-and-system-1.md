# Existing Systems Comparison Criteria and Rosebud AI

**Evidence checked:** 22 October 2026. This is a desk review of public product documentation, not a hands-on benchmark. The same nine criteria and evidence labels apply to all three systems. A feature not documented in the inspected sources is **undocumented**, not proven absent.

## Selection and comparison method

The project aims to turn a user's story into a playable, finite 2D browser game while preserving the main premise, disclosing simplifications and checking game completion. Three products cover different parts of that workflow:

1. **Rosebud AI Game Maker:** closest direct comparator; natural-language prompts produce editable, browser-playable games. [R1][R2]
2. **GDevelop with AI Agent:** a browser-capable game editor whose AI builds requested scenes, objects, events and mechanics into an existing project, with user inspection and iteration. It is a useful comparator for editable rule-based game creation. [G1]
3. **AI Dungeon:** browser-accessible AI-driven interactive storytelling with player actions, editing and retry. It is a narrative interaction comparator; its official guide describes a text adventure rather than a generated 2D browser game. [D1]

These products differ in output type and authoring workflow, so the final analysis must not rank them by a simple total score. Compare concrete capabilities and where human intervention is expected.

| ID | Criterion | Operational question for every product |
| --- | --- | --- |
| C1 | Story or natural-language input | Can an author start from a free-form story or game idea? What structure is required? |
| C2 | Genre and design control | Can the author express genre, goal, controls or constraints, and through which controls? |
| C3 | Playable browser output | Does the product provide a runnable game in a browser? Is the output 2D visual, 3D visual or text? |
| C4 | Gameplay actions and rules | Are player controls, state changes and rules created or editable? |
| C5 | Ending or completion condition | Can an author define a win/ending condition, and is its actual reachability evidenced? |
| C6 | Validation and playability checking | What documented preview, test or automated validation is available? Do not equate preview with guaranteed completion. |
| C7 | Simplification transparency | Does the product document a list of omitted or simplified requested mechanics and reasons? |
| C8 | Failure recovery and iteration | Can an author see problems, edit, retry or restore a previous result? |
| C9 | Sharing and version access | Can the resulting experience be shared or published, and can previous work be revisited? |

**Coding convention for the later matrix:** `Documented`, `Documented with qualification`, or `Undocumented in inspected sources`, followed by a short observation and citation. Do not use a bare yes/no where the format or limits matter.

## System 1: Rosebud AI Game Maker

Rosebud's official tutorial describes prompting for a small playable idea, waiting for a generated preview, testing controls, changing the game through chat and publishing a link. Its product page states that prompts generate code and assets, including 2D and 3D browser games. These are product documentation and claims, so no reliability or success rate is inferred. [R1][R2]

| ID | Evidence-based observation | Classification |
| --- | --- | --- |
| C1 | The author describes a game idea in plain English, including mechanics and visual style. The tutorial starts from a playable idea and recommends specifying the player's actions and ending. This documents idea prompting; it does not establish automatic extraction of arbitrary full story plots into a formal specification. [R1][R2] | Documented with qualification |
| C2 | Genre and mechanics can be described in prompts. The tutorial may present follow-up choices such as 3D, desktop and single-player for its example. It does not document a fixed, validated genre/goal parameter schema. [R1][R2] | Documented with qualification |
| C3 | Rosebud says it generates runnable browser games, including 2D, 3D and voxel styles; the editor has a playable Preview. Its game creation page says generated JavaScript is editable. [R1][R2] | Documented |
| C4 | Its tutorial instructs users to test A/D movement, Space jump, scoring and restart; another official 2D platformer guide builds controls, collectibles and win conditions through successive prompts. This evidences editable mechanics in examples, not reliable generation for every request. [R1][R3] | Documented with qualification |
| C5 | The tutorial asks authors to state what ends the game; the platformer guide adds a win condition and next-level transition through prompts. The inspected pages do not claim automatic reachability verification of generated endings. [R1][R3] | Documented with qualification |
| C6 | A Preview is provided, and the official tutorial explicitly asks the author to exercise controls, score and restart before and after publishing. Automated playthrough or formal validation is undocumented in these sources. [R1] | Documented manual testing; automated checks undocumented |
| C7 | The inspected product and tutorial pages do not describe a user-visible list of simplified or omitted requested mechanics with reasons. [R1][R2] | Undocumented in inspected sources |
| C8 | The author can request changes through chat, describe a malfunction, restart Preview, and inspect earlier versions in History. The tutorial warns that similar prompts can produce different outputs and advises retesting. [R1] | Documented |
| C9 | Publish creates a game URL to share; a later change can be released with Publish update. The tutorial documents History to inspect earlier editor versions. [R1] | Documented |

**Implication for our proposed system.** Rosebud is strong evidence that natural-language-to-browser-game creation already exists, so our rationale cannot be “no such platform exists.” Our narrower, testable design claim is an explicit game-specification contract, recorded simplifications, and validation of actions and reachable completion. The official Rosebud sources do not establish whether those internal checks or user-facing explanations exist; a hands-on study or additional technical disclosure would be required before claiming they do not. [R1][R2]

## Official sources

- **[R1]** Rosebud AI, “How to use Rosebud AI: Create, test, and publish your first game,” official tutorial, accessed 22 October 2026. https://rosebud.ai/tutorial
- **[R2]** Rosebud AI, “Create Games with AI Free, in Your Browser,” official product page, accessed 22 October 2026. https://rosebud.ai/ai-game-creator
- **[R3]** Rosebud AI, “Build a Platformer Game with AI (Mario-Style Guide),” official tutorial, accessed 22 October 2026. https://lab.rosebud.ai/blog/how-to-build-a-platformer-with-ai
- **[G1]** GDevelop, “GDevelop’s AI Agent: Create Game Features Automatically,” official product article, accessed 22 October 2026. https://gdevelop.io/blog/make-games-with-ai-agent-gdevelop-automated-prompt
- **[D1]** AI Dungeon, “Getting Started,” official help page, accessed 22 October 2026. https://help.aidungeon.com/getting-started
