# Technology Comparison

**Status, 22 October 2026:** Provisional choices for one bounded top-down 2D game family, not benchmarked or installed. We compare three decisions with three alternatives each. The deciding criteria are fidelity to the requested actions, a complete playable result, inspectable validation and recovery, and delivery effort for three students. Source analyses: [server and jobs](technology/server-and-jobs.md), [AI generation](technology/ai-generation.md), [browser runtime](technology/browser-runtime.md).

## 1. Server and asynchronous work

| Option | Fit and main tradeoff |
| --- | --- |
| **Spring Boot + PostgreSQL + RabbitMQ + Python worker — provisional choice** | Fits the platform and AI owners' Java/Python experience and separates job ownership from generation. More services and a cross-language contract must be tested. [S1][S2] |
| FastAPI + PostgreSQL + Celery/Redis | Shared Python types can simplify integration, but platform ownership shifts away from the backend owner's stronger Java/Spring background. Broker state cannot replace the project record. [S3][S4] |
| Go/Gin + PostgreSQL + Asynq/Redis + Python service | Feasible retries and deadlines, but adds a Go-worker/Python-service boundary. [S5][S6] |

The API must return project/version/job IDs promptly, while the database records durable status. A queue handoff or worker failure cannot silently strand a job or publish twice. An integration spike must test recovery and idempotency before choosing the stack.
PostgreSQL is held constant across these options; this table does not claim a separate database comparison.

## 2. Game generation and validation

| Option | Fit and main tradeoff |
| --- | --- |
| One-shot HTML/JavaScript | Broad mechanic freedom and quick examples, but launch does not prove correct actions or an ending; generated code needs strong isolation. [A1][A2] |
| Staged code with execution feedback | Repairs code errors but needs more orchestration and still may miss wrong game rules. [A2][A5] |
| **Versioned game specification + fixed runtime — provisional choice** | Restricts mechanics but makes actions, references, simplifications and a winning path inspectable. The browser runs approved data, not model-generated JavaScript. Schema/runtime work comes first. [A1][A2][A3][A4][A5] |

A strict validator must reject invalid references and unsupported operations. A bounded ending search should retain a winning trace; a timeout means **unverified**, not impossible. Browser play and human story-fidelity review remain separate checks. If an essential requested mechanic cannot be represented acceptably, the result should fail clearly.

## 3. Browser game runtime

| Option | Fit and main tradeoff |
| --- | --- |
| **Phaser 3 — provisional choice** | Browser-native scenes and input suit the first game. The team must still write the specification adapter, rules and ending logic. [R1] |
| PixiJS 8 | Flexible 2D rendering, but more gameplay infrastructure must be built. [R2] |
| Godot 4 web export | Strong editor/game facilities, with a larger web packaging and data-loading boundary. [R3] |

The first integrated proof of concept must load a validated **AI-generated** specification, perform a consequential action, reach an ending and reject invalid data in the target browsers. No runtime alone guarantees a completable game.

## Decision gate

The three choices depend on one shared, immutable game/job contract. The platform owns versions and publishes only independently validated artifacts; the worker returns candidate data and findings; the runtime accepts only approved schema versions and assets. Agree exact schema, limits, error and retry rules, asset policy and deployment boundary across the three owners, then run the queue and browser proof-of-concept checks. Change a provisional choice if those checks fail. Performance and cost claims require measurements on this project.

## Primary sources

**Server and jobs:** [S1] [Spring Boot AMQP](https://docs.spring.io/spring-boot/reference/messaging/amqp.html); [S2] [RabbitMQ Reliability Guide](https://www.rabbitmq.com/docs/reliability) and [Acknowledgements and Confirms](https://www.rabbitmq.com/docs/confirms); [S3] [Celery tasks](https://docs.celeryq.dev/en/stable/userguide/tasks.html); [S4] [FastAPI background-task caveat](https://fastapi.tiangolo.com/tutorial/background-tasks/#caveat); [S5] [Gin documentation](https://gin-gonic.com/en/docs/); [S6] [Asynq official repository and worker model](https://github.com/hibiken/asynq) and [task retry](https://github.com/hibiken/asynq/wiki/Task-Retry).

**AI generation:** [A1] [STORY2GAME preprint](https://arxiv.org/abs/2505.03547); [A2] [ByteSized32, EMNLP 2023](https://doi.org/10.18653/v1/2023.emnlp-main.830); [A3] [SINE, Applied Sciences 2026](https://doi.org/10.3390/app16062932); [A4] [GameDAI, ACL 2026](https://doi.org/10.18653/v1/2026.acl-demo.84); [A5] [Spec2Game preprint](https://arxiv.org/abs/2610.04253).

**Browser runtime:** [R1] [Phaser 3.90.0 Scene API](https://docs.phaser.io/api-documentation/3.90.0/class/scene) and [LoaderPlugin](https://docs.phaser.io/api-documentation/3.90.0/class/loader-loaderplugin) (the unversioned API currently opens a later major version); [R2] [PixiJS ecosystem](https://pixijs.com/8.x/guides/getting-started/ecosystem), [scene graph](https://pixijs.com/8.x/guides/concepts/scene-graph), and [events](https://pixijs.com/8.x/guides/components/events); [R3] [Godot stable web export](https://docs.godotengine.org/en/stable/tutorials/export/exporting_for_web.html) (a moving documentation target; recheck against the selected Godot 4 release). Further official references and criteria are in the three source analyses under `docs/technology/`.
