# Project Plan

**Method:** Agile iterative and incremental development. This is one proposed increment, not completed work or live tracker issues. Its outcome is a real storyline → AI-generated game data → validated, playable browser game. The runtime interprets generated data rather than hardcoding a game. Weeks are relative to kickoff; agree mechanics and calendar dates with the team.

## Part 1 — Platform

1. **Define database tables** — Zhaksylyk Aldiyar · Critical · Week 1. Done when migrations store projects, story versions, jobs and game references.
2. **Save story versions** — Zhaksylyk · Critical · Week 2. Done when an edit creates a new version without replacing the old story.
3. **Create story submission API** — Zhaksylyk · Critical · Week 2. Done when valid input returns version and job IDs; invalid input creates no job.
4. **Create job status API** — Zhaksylyk · Critical · Week 3. Done when queued, running, ready or failed status survives a reload.
5. **Serve validated games** — Zhaksylyk · Critical · Week 5. Done when only the exact validated version is available to its owner.

## Part 2 — AI and game data

6. **Define game-data format** — Yessengeldi Nurgeldi · Critical · Week 1. Done when the team agrees scenes, actions, state, goals, assets and limits.
7. **Implement AI generation** — Yessengeldi · Critical · Week 3. Done when a storyline produces candidate game data or a clear failure.
8. **Validate generated data** — Yessengeldi · Critical · Week 3. Done when invalid references, actions and unsafe content are rejected with reasons.
9. **Check game endings** — Yessengeldi · Critical · Week 4. Done when a bounded check finds a winning path or marks the result failed/unverified.
10. **Publish validated results** — Zhaksylyk · Critical · Week 5. Done when a job becomes ready only after checks pass and its game version is recorded.

## Part 3 — Browser and user interface

11. **Build story input screen** — Almadi Madiuly · High · Week 3. Done when a user can submit a storyline and correct field errors.
12. **Build progress and result screens** — Almadi · High · Week 4. Done when they show actual job state and offer Play only for a ready game.
13. **Load and render generated games** — Almadi · Critical · Week 5. Done when the reusable browser runtime displays a validated generated game.
14. **Implement gameplay actions and ending** — Almadi · Critical · Week 5. Done when the generated game's central action changes state and its ending appears.

## Part 4 — Integration

15. **Test the complete workflow** — Zhaksylyk · Critical · Week 6. Done when another team member reproduces story submission, AI generation, validation and browser play at a recorded commit; a failed job cannot launch.

Dependencies follow the flow: data format before generation and validation; database/API before screens; validation before publication and play; all parts before the complete-workflow test. Later increments can address recovery and broader evaluation. The fixed [story corpus](../tests/evaluation-prompts.md) will use three attempts per story and the first integrated generator version as a baseline for later revisions. Record every outcome, browser action/ending, configuration and two reviewers' story-fidelity judgments. No results exist yet. Main risks are scope, invalid output, job failure and missing user/supervisor input; keep the first mechanic set small, reject unverified games and record unresolved evidence.
