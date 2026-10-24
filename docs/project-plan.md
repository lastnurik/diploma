# Project Plan

**Status, October 2026:** This is a proposal-stage plan, not completed work or live tracker issues. Seven tasks define the first executable increment: a hand-authored game that passes checks and reaches an ending in the browser, a fixture-backed author flow, and a separate offline AI pilot. Agree supported actions (`move`, `inspect`, `collect`, `interact`, `choose`), asset limits and acceptance with all three owners before implementation. Deadlines are proposed weeks after development kickoff; assign dates in the project tracker. Scope choices remain subject to direct user/client input and substantive supervisor review.

## Part 1 — Shared game contract

### 1. Define the game schema and hand-authored key/door fixture

**Owner:** Zhaksylyk Aldiyar · **Reviewer:** Yessengeldi Nurgeldi · **Priority:** Critical · **Due:** Week 1. **Depends on:** agreed action set and limits.

Deliver a versioned game-data schema, one valid key/door fixture and a start-to-win action trace. Keep project/job IDs outside game data. **Accept when:** collecting the key permits opening the door and reaching an explicit ending, opening the door first fails, and unknown schema versions or oversize inputs have defined errors. Almadi and Nurgeldi review the shared contract. Requirements: `R-04–05`, `R-08`, `Q-03`.

### 2. Implement schema, reference and action validation

**Owner:** Yessengeldi Nurgeldi · **Reviewer:** Zhaksylyk Aldiyar · **Priority:** Critical · **Due:** Week 2. **Depends on:** task 1.

Deliver a callable validator that returns `{valid, schemaVersion, findings[]}` without silently changing input. **Accept when:** the valid fixture passes; unknown version/action, broken reference, undeclared state, unsafe asset and oversize content each fail with a specific finding. Retain valid and invalid fixtures and reports for the independent publication gate. Requirements: `R-05`, `R-07`, `Q-01`, `Q-03`.

## Part 2 — Fixture-backed browser path

### 3. Play the hand-authored fixture in the browser

**Owner:** Almadi Madiuly · **Reviewer:** Yessengeldi Nurgeldi · **Priority:** Critical · **Due:** Week 4. **Depends on:** tasks 1–2.

Build the fixed runtime for approved scenes, actions, controls, ending and restart; Phaser 3 is provisional. **Accept when:** a reviewer cannot open the door before taking the key, can reach the ending afterward, can restart, and sees a controlled error for invalid data. Record fixture hash and browser version; never execute model-generated JavaScript. Requirements: `R-08–09`, `Q-01`, `Q-06`.

### 4. Create a project/version API and fixture-backed job

**Owner:** Zhaksylyk Aldiyar · **Reviewer:** Almadi Madiuly · **Priority:** Critical · **Due:** Week 3. **Depends on:** task 1.

Persist projects, immutable story versions and job status; a development-only worker returns the validated fixture and is visibly labelled fixture-backed. **Accept when:** submission returns project/version/job IDs promptly, reload preserves actual status, a deliberate second attempt has a new version, invalid input creates no job, and foreign or unknown IDs disclose no story or artifact. The fixture result must never appear as AI generation. Requirements: `R-01–03`, `R-10`, `Q-02`.

### 5. Connect the story form and job-progress view

**Owner:** Almadi Madiuly · **Reviewer:** Zhaksylyk Aldiyar · **Priority:** High · **Due:** Week 4. **Depends on:** task 4.

Connect story/goal/action fields and progress to the API, using the [static prototype](../prototype/README.md) as a design reference. **Accept when:** field errors are actionable, one submission shows its IDs, reload recovers server status, pending/failed jobs have no Play action, network loss reports uncertainty, and keyboard/375–1280 px checks reveal no clipped essentials. Label fixture results clearly. Requirements: `R-01–03`, `Q-04`.

## Part 3 — AI pilot and reproducible integration

### 6. Generate one candidate under the shared game schema

**Owner:** Yessengeldi Nurgeldi · **Reviewer:** Zhaksylyk Aldiyar · **Priority:** High · **Due:** Week 5. **Depends on:** tasks 1–2.

Run an **offline pilot**, not a production generation endpoint: a versioned request yields candidate game data, interpreted actions/goal and `simplifications[]`, or a classified failure. **Accept when:** a supported story yields validated data and a replayable winning path or a clear failure; malformed references and unsupported essential actions do not pass; search timeout is `unverified`, never ready. Record prompt/config, candidate hash and reasons. One success is not a measured success rate. Requirements: `R-04–08`, `Q-03`, `Q-07`.

### 7. Reproduce the fixture-backed author-to-play path

**Owner:** Zhaksylyk Aldiyar · **Reviewer:** Almadi Madiuly · **Priority:** High · **Due:** Week 6. **Depends on:** tasks 3–5.

Document clean start and automate the API/browser smoke path from form submission through persisted status, exact-version launch, key/door action and ending. **Accept when:** another team member reproduces IDs, fixture hash, state change and ending at a recorded commit; an invalid fixture or failed job cannot launch. Preserve one negative trace. Call this a hand-authored integration baseline, not a generated game. Requirements: `R-01–03`, `R-08–09`, `Q-06–07`.

## Part 4 — Later integration and evaluation

After the first increment, integrate the AI worker with queue recovery and bounded repair, independent validation, immutable publication, authorized delivery, version history and retry screens. Then evaluate the fixed [E01–E08 story corpus](../tests/evaluation-prompts.md) with three independent trials per story (24 planned trials), while the hand-authored key/door game remains the runtime baseline. Freeze schema, model, prompts, limits, browser and commit before scoring. For every trial record validity, safe launch, central-action fidelity, reachable **and observed** ending, simplification disclosure, latency, cost, failures and exact artifact IDs/hashes; report numerators against all initiated trials. Two reviewers assess story fidelity and retain disagreements. No trial has been run yet.

**Main risks and responses:** Agree a small action set to contain scope; reject unsafe or unverified game data; test queue restarts and duplicate delivery before claiming reliable jobs; record missing user/client and supervisor evidence rather than implying approval. The intended windows are scope/input review in November–mid December, fixture baseline by January, integration through March and measured evaluation by May. Shift dependent work when its prerequisite is not evidenced.
