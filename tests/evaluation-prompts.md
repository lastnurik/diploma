# Story Prompt Evaluation Corpus

**Version:** 0.1, 22 October 2026. These are original synthetic prompts written for future evaluation; **no game has been generated or tested from them yet**. The first executable slice is a bounded top-down 2D scene game with move, inspect, collect, interact and choose actions. Genre labels record user intent and do not claim native platformer, racing or card mechanics. If the first-version scope changes, create a new corpus version rather than silently rewriting prompts or expected annotations.

## Fixed inputs

Use the quoted text verbatim as the `story` input. Unless a prompt says otherwise, submit no extra parameters; use the same default settings for every run and record them. `C` cases are development/calibration examples for designing the contract and checks. `E` cases are evaluation examples: do not use their expected answers to tune individual outputs before scoring. The expected goals/actions below are **human reference annotations**, not model outputs or measured results.

### Development and calibration

**C01 — Lighthouse key, in scope.**
> A keeper wakes on a small shore. The lighthouse door is locked. Find the brass key near the boat, carry it to the lighthouse, and open the door. The story ends when the lamp inside becomes accessible.

Reference: goal = open the lighthouse; central actions = move, inspect boat, collect key, interact with door. A two-location or bounded-scene layout is sufficient. No expected simplification.

**C02 — Museum clue, in scope.**
> You are a detective in a museum after a painting disappears. Inspect the empty frame and the guard's desk, find the torn ticket, then choose which of two visitors to question. Finish when you present the ticket to the guard and identify the suspect.

Reference: goal = identify a suspect with the ticket; central actions = inspect two sites, collect ticket, choose visitor, interact with guard. Exact suspect identity is not predetermined by this prompt; a generated coherent clue chain must support its chosen answer.

**C03 — Classroom specimens, in scope.**
> In a small science room, a teacher asks you to identify three labeled rock specimens. Walk to each display and inspect it. Collect the three labels, then choose which labeled specimen is volcanic at the teacher's desk. End after the teacher confirms the answer.

Reference: goal = choose the volcanic specimen after examining labels; central actions = move, inspect, collect, choose. The generated facts and answer must agree internally; a human checks scientific correctness if the model invents specimen names.

**C04 — Village permission, in scope.**
> A villager needs to enter the archive. Ask the librarian what proof is required, find the stamped note at the noticeboard, then choose a polite response and hand the note to the librarian. The story ends when permission is granted.

Reference: goal = gain archive permission; central actions = choose dialogue, move, collect note, interact. The specific wording may vary, but the note must be necessary and the ending reachable.

### Evaluation cases

**E01 — Bridge rescue, in scope.**
> A storm has trapped a dog across a short bridge. Explore the riverside, collect the crank handle, attach it to the bridge mechanism, and cross to the dog. End when you reach the dog and bring it back to the safe bank.

Reference: goal = rescue dog and return; central actions = move, inspect mechanism, collect handle, interact to repair, move to and from dog. A win triggered merely by finding the handle would violate the story.

**E02 — Space station repair, in scope.**
> In a two-room space station, the lights fail. Inspect the control panel, collect a spare fuse from storage, return and install it. Choose the restart command. The game ends when the lights turn on.

Reference: goal = restore power; central actions = inspect, move between rooms, collect fuse, interact with panel, choose restart. The restart choice must require the fuse; no expected simplification.

**E03 — Two routes, in scope.**
> A messenger must deliver a letter to the city gatekeeper. At a fork, choose either the quiet garden path or the guarded road. On either route, find a way past one obstacle and deliver the letter to the gatekeeper. End only after delivery.

Reference: goal = deliver letter; central actions = choose route, move, interact with route-specific obstacle, interact with gatekeeper. Both offered routes need coherent paths to the same goal; one dead route is a failure.

**E04 — Lost observatory, in scope with bounded complexity.**
> Explore a small observatory with an entrance hall, a library and a telescope room. Read a clue in the library, collect a star chart, and use it at the telescope to reveal a code. Choose the matching code at the exit panel. End when the roof opens.

Reference: goal = open roof; central actions = move across three scenes, inspect clue, collect chart, interact with telescope, choose code. The code must be derivable from clues; simplify scene count only if the clue chain and goal survive and the change is disclosed.

**E05 — Rooftop platformer request, conditional simplification.**
> Make this a platformer: a courier jumps between rooftops, avoids gaps, collects a parcel and delivers it to the clock tower. Missing a jump sends the courier back to the start. End when the parcel is delivered.

Reference: goal = deliver parcel; requested central actions = precise jumping, avoiding gaps and collecting. The first runtime has no jump/physics mechanic. A top-down route with obstacles could preserve the delivery story **only if** the simplification explicitly says jumping and fall/restart behavior were replaced. A human reviewer decides whether that still respects the core gameplay; otherwise the expected outcome is a transparent `failed` response. Native platformer support is a later stretch case.

**E06 — Real-time racing request, stretch/unsupported.**
> Make a racing game where I steer a car around a track, accelerate past rivals, manage lap time and win by crossing the finish line first on lap three. The car can crash into barriers and recover.

Reference: goal = win a three-lap race; requested central actions = continuous steering, acceleration, collisions and lap timing. These mechanics are outside the proposed first action set. A sequence of route choices is a substantial replacement, not native racing. The first version should either disclose that replacement and pass human fidelity review or return `failed`; never label a choice-only game as an unmodified race.

**E07 — Deck-building card duel, stretch/unsupported.**
> Make a card game in which I draw from a shuffled deck, spend energy to play attack and defense cards, discard used cards, and defeat the rival over several turns. I win when the rival's health reaches zero.

Reference: goal = defeat rival; requested central actions = draw, shuffle, spend energy, play cards, discard, take turns. The first runtime has no deck, hand, turn or combat rules. A simple dialogue choice does not preserve the central card mechanic; this case should be rejected with a clear explanation until a suitable mechanic family is implemented. Do not count that truthful rejection as a generated playable game.

**E08 — Complex world request, stretch/unsupported.**
> Build a huge open world with fifty cities, multiplayer trading, crafting from hundreds of recipes, an evolving economy and battles. Let every player create new quests. The game should have no fixed ending.

Reference: explicit scale, multiplayer, economy, battles and no ending conflict with the proposed bounded, completable single-player slice. A small single-player quest would change the request materially. The expected first-version outcome is a specific scope failure rather than silent truncation.

## Annotation and scoring procedure for later runs

1. Freeze this file at a corpus version and record its Git commit. Keep `C` and `E` inputs distinct. For each run record prompt ID, exact input hash, schema version, model/provider and configuration, generation attempt count, date, time limit and runtime version. The output artifact and validation log receive stable IDs; do not commit credentials or private user data.
2. Before looking at generated outputs, two team members independently annotate the **central premise, indispensable actions, goal/end condition, supported mechanic status and acceptable simplifications** for each `E` case. Discuss disagreements and save the adjudicated annotation and reasons. The reference notes above seed this process but do not settle ambiguous fidelity questions automatically.
3. Run each prompt under the same documented conditions. Record separate outcomes for schema validity, safe browser launch, requested central actions, reachable ending, visible simplification, fidelity judgment, failure class, attempts, latency and measured cost. Use the denominator of all attempted prompts for generation success and report unsupported cases separately; do not omit failed attempts or count an honest rejection as a playable success.
4. For finite state rules, test whether a win state is reachable from the initial state and record the path. Execute representative paths in the browser. A search timeout is **unverified**, not proof that no ending exists. Human reviewers judge whether story, action and simplification retain the user's intent. State any reviewer disagreement and the final decision.
5. Compare the generated outputs with the manually authored playable game baseline for runtime and interaction checks. Report results by `in scope`, `conditional simplification` and `stretch/unsupported` groups, with counts and conditions. No score or success percentage belongs in this document until actual runs occur.
