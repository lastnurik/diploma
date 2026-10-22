# AI Generation and Validation Method Comparison

## Decision and requirements

The platform must turn a free-form user story into a **playable 2D browser game**, preserve its core idea, show any necessary simplifications, and either verify a reachable ending or report failure. Its first version needs a bounded scope that a three-person team can implement and test. This comparison concerns the **generation method**, not the choice of LLM vendor, prompt framework, browser engine or hosting provider.

Three plausible methods are compared below. Ratings are **reasoned design estimates**, not measurements of this project. “Cost” means both model calls during generation and engineering work needed to make the output dependable; it is not a currency estimate.

| Criterion | A. Directly generate complete HTML/JavaScript game | B. Generate game code in stages with execution feedback and repair | C. Generate a constrained game specification; render it with a fixed browser runtime |
| --- | --- | --- | --- |
| Output and flexibility | Produces free-form files from the story in one model response. Can express novel mechanics in principle, but behavior and interfaces vary per game. | Produces code in stages (for example, state, rules, rendering); runs checks and asks the model to revise failing parts. Broad mechanic freedom remains. | Produces versioned JSON or another typed format: scenes, entities, supported actions, state transitions, goals, ending and simplifications. A tested runtime interprets only supported mechanics. |
| Control of rules and user intent | Low. The model decides both game design and implementation; unsupported actions can disappear silently. | Medium. Tests and repair can catch observed problems, but generated code still defines its own rules and may pass a smoke test while breaking gameplay. | High within the supported mechanic set. Every required action and goal has a schema field and check. Novel mechanics must be simplified visibly or rejected. Creative range is intentionally limited. |
| Playability checks | Syntax and browser launch are easy to check; rule fidelity and reachable ending require game-specific inspection or generated tests. | Staged execution catches more coding errors. Behavioral tests still need explicit expectations and may miss missing or incorrect victory conditions. | Schema, reference integrity, allowed actions, initial state and terminal state can be checked deterministically. Reachability can be checked for finite rule/state models; browser interaction still needs an end-to-end test and human review. |
| Repair and failure | A full regeneration is simple but may change unrelated behavior; errors can be opaque. | Can feed failing checks back to the model in a bounded repair loop, then reject if checks continue failing. More iterations and interfaces to manage. | Repair the invalid specification or request a supported simplification without rewriting the engine; reject after a bounded number of attempts with specific validation errors. Runtime defects remain separate engineering bugs. |
| Safety and reproducibility | Every generated script is untrusted executable content and needs strict isolation. Model variability makes debugging difficult. | Same code-execution boundary as A, plus a sandbox for generation-time tests. Test logs improve diagnosis but repairs may introduce new changes. | Generated data is parsed and constrained by the runtime, reducing the executable attack surface. Save input, schema version, model/configuration and output for repeatable inspection; identical generation is not guaranteed by that logging alone. |
| Cost and implementation burden | Lowest initial architecture work; potentially high manual debugging and failed-generation cost. No measured API or maintenance cost yet. | Higher model/test calls and engineering complexity for sandboxed execution, orchestration and regression checks. No measured cost yet. | Upfront work to define schema, supported mechanics and runtime; later generation can be bounded to structured outputs and deterministic checks. Savings in model calls are a hypothesis, not a proven result here. |

## Recommendation

Choose **C, a structured game specification interpreted by a fixed browser runtime**, for the first version. Implement the smallest mechanics that can produce a complete game and explicitly enumerate them in the specification contract. The AI service should first extract genre, goal, primary actions and narrative elements, then map them to supported mechanics. It should return both the generated specification and a list of changes from the original request. This follows the proposal's emphasis on a playable game and disclosed simplification. It also gives frontend and backend developers a stable contract they can build against independently.

The suggested validation sequence is:

1. Parse against a versioned schema with required fields and size limits. Reject missing or unsupported values.
2. Check semantic invariants: every referenced scene/entity exists, actions have valid preconditions and effects, the initial state is valid, and at least one explicit goal/end state exists.
3. For a finite rule model, search reachable states for a winning path and detect obvious dead ends. Where motion or timing makes this analysis incomplete, mark the check limited and run browser-level scripted/manual play tests.
4. If validation fails, pass the specific errors into a bounded repair attempt. If the requested mechanic is outside the supported set, propose a documented simplification that retains the main goal and action. If checks still fail, return a clear failure status; do not publish a broken game.
5. Store the story, selected settings, schema version, generated output, validation findings, simplification list and final status for debugging and evaluation. Keep confidential prompts and model credentials out of the repository.

This recommendation does **not** establish that a single runtime can handle platformer, racing and card games equally well. The first-version scope and test corpus must distinguish supported mechanics from future genre examples. B remains a later option for expanding mechanics or generating code under sandboxed execution. A is useful as a quick research baseline, but a browser-launching example alone should not be accepted as the finished product.

## Evidence and decision limits

The recommendation is an **inference** from published research and the diploma requirements, not a head-to-head measurement of A, B and C on our stories. STORY2GAME shows that compiled actions can have incorrect effects; ByteSized32 reports a runnability gain when errors are fed back for repair; GameDAI and SINE use structured contracts and validation in constrained game domains; Spec2Game finds that execution and specification fidelity diverge, especially for rules and endings. The papers study text games, educational templates or Pygame, so their success percentages should not be reused as predicted browser-platform metrics. We will compare output validity, browser launch, intended actions, reachable ending, simplification fidelity, failure rate, latency and measured generation cost on our own held-out story prompts before making performance claims.

### Sources

- Zhou et al. (2025), *STORY2GAME: Generating (Almost) Everything in an Interactive Fiction Game* (preprint): https://arxiv.org/abs/2505.03547
- Wang et al. (2023), *ByteSized32*, EMNLP: https://doi.org/10.18653/v1/2023.emnlp-main.830
- Rogosch and Schrader (2026), *Automated Generation and Evaluation of Interactive-Fiction Serious Games with Open-Weight LLMs*, Applied Sciences: https://doi.org/10.3390/app16062932
- Agarwal et al. (2026), *GAMED.AI*, ACL System Demonstrations: https://doi.org/10.18653/v1/2026.acl-demo.84
- Cai et al. (2026), *Spec2Game* (preprint): https://arxiv.org/abs/2610.04253
