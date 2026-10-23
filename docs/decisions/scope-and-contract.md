# First Version Scope and Game Contract

**Status, October 2026:** Proposed first-version design boundary. Technology and supervisor assessment may revise it.

## First executable slice

The first implementation target is one **top-down 2D scene game** with a small reusable action set: move in a grid or bounded scene, inspect, collect, interact, choose between dialogue/options, and reach a defined goal. A trusted browser runtime interprets validated game data. Story, text, object placement and rules can vary within that set. The first slice must let a player start, perform a meaningful action and reach an explicit ending. This choice is a proposed scope reduction to make validation and completion testable; it is not evidence that platformers, racing or card games have been built.

Genre requested by the user is retained as intent and disclosed when the runtime cannot realize its mechanics. For example, a racing narrative might become a timed sequence of route choices and interactions within the supported game family; this is a simplification only if the user is told exactly what changed and the core story objective remains recognizable. If that transformation would misrepresent the request, generation fails transparently rather than producing a mislabeled game. Later engines or mechanic families can be added behind a versioned contract.

## Actors and boundaries

1. **Browser authoring client:** story and parameters, project list, job progress, simplification list, playable preview and retry.
2. **Platform API:** authenticated project/version and job records, request validation, queueing, statuses, artifact metadata, logging and controlled game delivery.
3. **Generation service:** extracts intent, proposes a specification, validates and repairs bounded errors, emits game data or a failure reason.
4. **Trusted game runtime:** renders only allowed assets and actions from validated data, applies state transitions and exposes start, progress and ending events.
5. **External model provider, if used:** receives only the minimum story input and returns untrusted model output; provider selection remains subject to the technology comparison.

Generated text and model output are untrusted inputs. The server validates them before storage/publication. The browser runtime does not execute model-generated JavaScript in the first slice. The security model and exact deployment controls require implementation review.

## Proposed versioned specification

The contract is a design draft. Each field should eventually have a JSON Schema or equivalent strict validator, an explicit size limit and a documented default/error behavior.

| Field | Meaning and proposed validation |
| --- | --- |
| `schemaVersion` | Version marker; reject unknown major versions. |
| `title`, `premise`, `genreIntent` | Bounded user-facing text, with safe rendering. `genreIntent` records the request, not a guarantee of mechanics. |
| `goal` | Text explaining the objective plus a machine-readable ending predicate. |
| `scenes` | Non-empty bounded list of scene IDs, layout/tile data and starting scene; all references resolve. |
| `entities` | Unique IDs, allowed type, initial state, allowed location and safe asset reference. |
| `actions` | Supported action kind, actor/target, explicit preconditions and effects on declared state. Unknown operations are rejected. |
| `winCondition`, `loseCondition` | Declarative predicates over reachable state; at least one reachable win condition is required. |
| `simplifications` | List of requested mechanic, actual replacement and reason, shown to the user. Empty if none. |
| `controls`, `instructions` | Mapped to supported inputs and visible before/during play. |

The game data should be separated from platform metadata (user, project, version, job and artifact IDs). The same immutable specification version should be used by validator, evaluator and runtime. No draft schema is declared final until M, A and N agree on it and a manually authored example can run through the chosen client.

## Job and error states

The platform records `queued → generating → validating → ready` on success, with `failed` for terminal errors and a bounded internal repair attempt before failure. Each state has a timestamp, stable project/version ID and safe user-facing message. A repeated request creates a new version rather than silently replacing an earlier artifact. The API exposes the latest status and a result only after validation; clients can poll initially, while transport alternatives remain open in the technology comparison.

Failure classes include invalid user request, unavailable model service, schema error, unsupported mechanic with no acceptable simplification, missing references, unreachable or unverified ending, game build/runtime error and unsafe content. Distinguish validation failure from a timeout: a bounded search timing out means completion is unverified, not impossible.

## Completion and acceptance for the eventual product

Success requires valid schema and references, safe launch in supported browsers, functioning central actions, a start and ending reachable in the supported state space, and an explanation of any simplification. Human review assesses whether the result keeps the user's premise; machine validation alone cannot establish narrative fidelity. An evaluator will record each criterion independently and report denominator, conditions and failures. The manually authored game is the baseline for the runtime and presentation before automated generation is integrated.
