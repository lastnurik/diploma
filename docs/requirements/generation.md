# Generation Service Requirements

**Status, October 2026:** Initial requirements for the proposed product, not implementation claims. The first executable slice is a bounded top-down 2D scene as described in `docs/decisions/scope-and-contract.md`. Specification fields and precise limits remain provisional.

**Source codes:** `P` = `docs/proposal.md`, derived from the supervisor proposal; `C` = `docs/decisions/scope-and-contract.md`, the proposed first-version boundary; `R` = the academic requirement for testable functional and non-functional requirements. The supplied questionnaire records have unresolved respondent provenance and are not represented as a verified source. **Priority:** Must = required for a successful first integrated version; Should = useful but may follow that version. **Verification:** M = deterministic machine check; H = human judgment with a written rubric; B = both.

## Functional requirements

| ID | Priority | Source | Requirement | Observable acceptance and method |
| --- | --- | --- | --- | --- |
| GEN-F01 | Must | P, C | Given a story and optional requested genre/parameters, extract a proposed genre intent, central goal and primary player actions before building a game. Preserve the original request alongside the interpretation. | For each evaluation prompt, a structured intent record contains non-empty genre intent, goal and action list, or a documented `failed` reason. A reviewer compares the three fields with the prompt using the evaluation rubric; malformed fields fail schema validation. **B** |
| GEN-F02 | Must | P, C | Map the interpreted request to the supported top-down scene mechanics: move, inspect, collect, interact and choose. Record each requested action that is unsupported or transformed. | All emitted action kinds belong to the versioned allowed set; the output names every changed/omitted requested mechanic in `simplifications`. A reviewer checks whether the central premise and main objective remain recognizable. An unacceptable transformation causes failure rather than a misleading game. **B** |
| GEN-F03 | Must | P, C | Produce a versioned, machine-readable game specification with title/premise, original genre intent, goal, scenes, entities, actions, controls/instructions, ending predicates and simplifications. Keep platform project/user/job metadata separate. | A strict validator accepts every `ready` result; unknown major schema versions, missing required fields, oversized content, unsupported operations and unresolvable IDs are rejected. The same immutable specification version is supplied to validation and runtime. **M** |
| GEN-F04 | Must | P, C | Create enough scene/layout and entity data for a game to start and for its principal action and goal to be represented. All action preconditions/effects refer to declared state and supported operations. | A parser resolves the starting scene, entity IDs, asset references and action state references; a validated generated specification loads in the client. A reviewer checks that scene text and principal action reflect the story. **B** |
| GEN-F05 | Must | P, C | Encode a machine-readable win condition and any applicable loss condition; explain the goal and controls to the player. | A finite-state search finds a path from initial state to a winning state for every `ready` game in the supported rule model. The browser test executes a representative path and observes an ending event. If a bounded search times out, label completion **unverified**, never “unreachable” or `ready` on that evidence alone. **M** plus browser inspection |
| GEN-F06 | Must | P, C | Validate schema, references, allowed mechanics, start state, action transitions, goal definition and known unsafe content before publication. Keep per-stage findings. | Deliberately invalid fixtures for each class are rejected with a specific internal error code. The server cannot expose a `ready` game unless all required checks pass; test status transitions and artifact gating with the backend module. **M** |
| GEN-F07 | Must | P, C | On a recoverable validation error, attempt a configured, bounded repair using the failing checks; rerun the full validation after any repair. | Inject a repairable invalid output: the service either returns a newly valid specification within its limit or records `failed`. Logs show attempt count and errors without credentials or confidential story data. An unrepairable fixture terminates within the configured bound. **M** |
| GEN-F08 | Must | P, C | Return a safe, actionable failure reason when generation, validation, repair or acceptable simplification cannot complete. Distinguish invalid request, unavailable provider, schema/reference error, unsupported mechanics, unverified ending and runtime integration failure. | Fault-injection tests exercise each class and yield `failed` with a stable code and a non-sensitive user message; no broken artifact is marked publishable. Timeout is distinct from proved impossibility. **M** |
| GEN-F09 | Must | P, C | Give the platform a specification/game-data artifact, validation outcome, simplification list and status under the project/version/job IDs supplied by the platform. | Contract tests verify a `ready` result can be read by the backend and browser runtime, and a failure returns no playable artifact. A repeated request creates a new version through the platform contract. **M** |
| GEN-F10 | Should | P, C | Preserve enough intermediate intent and validation evidence to explain why a mechanic was simplified or generation failed. | A reviewer can trace an evaluated prompt through extracted intent, proposed mapping, validation findings and final outcome without exposing private raw model traces publicly. **B** |

## Non-functional requirements

| ID | Priority | Source | Requirement | Observable acceptance and method |
| --- | --- | --- | --- | --- |
| GEN-N01 | Must | P, C, R | Treat all model output as untrusted data; the first slice must not send model-generated JavaScript to the browser runtime. | Tests reject scripts, unknown action kinds, unsafe asset URLs and disallowed content; a code review confirms the runtime interprets validated data only. Broader sandbox/deployment controls receive a separate security review. **B** |
| GEN-N02 | Must | P, C, R | Make generation runs auditable and evaluation reproducible to the extent the provider allows. | Record schema version, prompt/corpus ID, model identifier/configuration, timestamps, attempt count, validation result and artifact hash. Replaying a saved valid specification yields the same deterministic rule outcomes; regenerated model text need not be byte-identical. **M** |
| GEN-N03 | Must | P, C, R | Apply bounded resource use and terminate cleanly. | Configure limits for story length, scene/entity/action counts, model timeouts, repair attempts and reachability exploration; boundary tests reject or stop over-limit cases with a status and reason. Exact numeric limits are selected during implementation and recorded in the contract. **M** |
| GEN-N04 | Must | P, R | Evaluate quality separately for validity, browser launch, required actions, reachable ending and fidelity of disclosed simplifications. | The evaluation plan defines a fixed prompt corpus, denominators, conditions, a manual/prewritten-game baseline, human rubric and failure categories; each run records results for these distinct criteria. No success rate is claimed until measured. **B** |
| GEN-N05 | Should | P, C | Keep the specification contract extensible for later mechanic families without breaking stored games. | A schema-version test loads an older valid artifact under its supported version; incompatible major versions are rejected clearly. Addition of a new mechanic requires new validation/runtime support and regression tests. **M** |

## Illustrative specification checks

The examples below illustrate **draft contract semantics**; they are not a finalized JSON Schema. The agreed schema must define exact types, predicate syntax, limits and defaults before implementation. Generated output should be validated and executed in the chosen browser runtime.

### Valid candidate for the proposed mechanic set

```json
{
  "schemaVersion": "0.1.0",
  "title": "The Lighthouse Key",
  "premise": "Find the key and open the lighthouse door.",
  "genreIntent": "adventure",
  "goal": {"text": "Open the lighthouse door", "predicate": {"equals": ["state.doorOpen", true]}},
  "scenes": [{"id": "shore", "layout": {"width": 2, "height": 1, "walkableCells": [0, 1]}, "start": true}],
  "entities": [
    {"id": "key", "type": "collectible", "scene": "shore", "cell": 0},
    {"id": "door", "type": "interactable", "scene": "shore", "cell": 1}
  ],
  "initialState": {"playerCell": 0, "hasKey": false, "doorOpen": false},
  "actions": [
    {"kind": "collect", "target": "key", "requires": {"equals": ["state.playerCell", 0]}, "effects": {"hasKey": true}},
    {"kind": "move", "target": "cell:1", "requires": {"equals": ["state.playerCell", 0]}, "effects": {"playerCell": 1}},
    {"kind": "interact", "target": "door", "requires": {"all": [{"equals": ["state.hasKey", true]}, {"equals": ["state.playerCell", 1]}]}, "effects": {"doorOpen": true}}
  ],
  "winCondition": {"equals": ["state.doorOpen", true]},
  "loseCondition": null,
  "simplifications": [],
  "controls": {"move": "arrow keys", "interact": "E"},
  "instructions": "Collect the key, move to the door, and open it."
}
```

**Expected machine check:** starting at cell 0, collect the key, move to cell 1, interact with the door, and reach `doorOpen=true`. Every entity target and state variable resolves; movement stays in a walkable cell. **Human check:** confirm that this tiny sequence still represents the intended story; the machine cannot decide narrative faithfulness from syntax alone. The exact layout and control types need formal encoding.

### Invalid candidate

```json
{
  "schemaVersion": "0.1.0",
  "scenes": [{"id": "shore", "start": true}],
  "entities": [],
  "initialState": {"doorOpen": false},
  "actions": [],
  "winCondition": {"equals": ["state.dragonDefeated", true]}
}
```

**Expected machine check:** reject missing required fields and the undeclared `dragonDefeated` state reference. Even if missing fields were supplied, there is no action path to a win. Report schema/reference and reachability findings; never publish this as `ready`. The invalid fixture is deliberately partial, not a second full example.

## Open decisions for integration

The team must freeze the exact JSON Schema, asset catalogue, state/predicate language, input limits, repair bound and runtime event contract with the frontend and platform owners. Reachability applies to a bounded model; any mechanic outside that model needs a stated alternative verification route. User interviews and supervisor feedback may change priorities or scope, and such changes must update this file, diagrams and tests together.
