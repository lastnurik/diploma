# Initial diploma review presentation

**Status:** Draft presentation, 22 October 2026. Ten slides summarize the eleven written components at minimal depth. The deck distinguishes prepared analysis/design from empirical evidence, implementation and review still pending.

- [PowerPoint presentation](output/diploma-initial-review.pptx)
- [Editable authoring source](source/create.mjs)
- [Validation receipt](source/validation.json)
- [Slide previews](renders/)

## Coverage and evidence

| Slide | Written component | Main repository evidence |
| --- | --- | --- |
| 1 | 1. Proposal, team and contribution areas | `docs/proposal.md` |
| 2 | 2. Relevance and direct input | `docs/evidence/relevance.md`, `docs/evidence/questionnaire.md` |
| 3 | 3. Literature | `docs/literature.md` |
| 4 | 4. Existing systems | `docs/existing-systems.md` |
| 5 | 5. Technology alternatives | `docs/technology-comparison.md` |
| 6 | 6. Requirements | `docs/requirements.md`, `docs/decisions/scope-and-contract.md` |
| 7 | 7. Architecture | `docs/architecture.md`, `diagrams/component.svg` |
| 8 | 8. UX concept | `prototype/README.md`, `prototype/result-play.svg` |
| 9 | 9. Verification | `docs/verification-plan.md`, `tests/evaluation-prompts.md` |
| 10 | 10. Management and 11. Supervisor response | `docs/project-plan.md`, `docs/project-task-plan.md`, `docs/supervisor-feedback.md`, `docs/october-submission.md` |

Paths on slides and in speaker notes are relative to `work/diploma/`. The notes retain source context and fuller caveats. Slides 2, 8, 9 and 10 explicitly show the missing user evidence, absent prototype evaluation/running game, pending substantive supervisor review and open remote/YouTrack setup. The static prototype is an embedded illustration, not a product demonstration.

## Verification performed

The Presentations skill workflow created the deck with Artifact Tool. The finalizer confirmed ten slides, valid package structure, expected 16:9 size, heading/layout geometry, declared DejaVu Sans usage, and successful first-party import. The receipt records zero layout or package findings. Every slide was rendered at 1280 × 720 and inspected individually for clipping, wrapping, readability and consistency. No native Microsoft PowerPoint execution was performed. A separate LibreOffice PDF conversion was unavailable in the restricted environment and supplies no verification claim.

## Rebuild

The source uses `@oai/artifact-tool` and the Presentations skill finalizer from the bundled runtime. Run it from the repository's parent workspace directory with that runtime's Node executable and `RUNTIME_NODE_MODULES` set. Make the runtime package directory available as `source/node_modules` through a local symlink before running. The runtime locations in the source reflect this preparation environment. The embedded prototype PNG lives in `assets/`.

Choose a new final output filename in the source before rebuilding because the finalizer does not overwrite an existing final file. Rendering produces `renders/slide-01.png` through `slide-10.png`. The finalizer writes its receipt under `source/`. Temporary candidate files stay under the ignored `build/` directory. The existing receipt retains its original recorded path as provenance of the completed validation run; moving the receipt does not change the validated PPTX hash.
