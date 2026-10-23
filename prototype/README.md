# Academic UX prototype

**Status: proposed interface design, 23 October 2026.** This artifact presents the author journey for the diploma project *Development of an AI-Assisted Platform for Generating Playable Browser Games from User-Provided Storylines*. It is academic design evidence, not an implemented generator or a measured usability result.

## Open the prototype

Open [index.html](index.html) in a browser. It is a self-contained, navigable HTML/CSS storyboard with no build step, external assets, JavaScript, network requests or server dependency. The accompanying [stylesheet](styles.css) must remain beside it. The navigation and action links move between fixed screen states; native disclosure controls expose alternate feedback examples. Request fields are explicitly read-only examples. Generation, validation, persistence, editing and gameplay are represented, not executed.

The interface uses a restrained green accent, consistent status labels, persistent field labels, visible keyboard focus and responsive layouts. A scene diagram shows the proposed top-down game composition. All story content, dates, identifiers and outcomes are illustrative. Supported mechanics and the final contract remain provisional.

## Screen and requirement mapping

| Screen | Visible design evidence | Use cases | Requirements |
| --- | --- | --- | --- |
| [SCR-1 · Story request](index.html#story) | Story, genre intent, goal and main action; scope explanation; full request review; empty-field feedback example | UC-01, UC-02 | FE-01–03, FE-10 |
| [SCR-2 · Progress](index.html#progress) | Queued, generating, validating and pending-ready stages; job/version identity; latest update; connection uncertainty alternative | UC-03 | FE-04, FE-11 |
| [SCR-3 · Result](index.html#result) | Requested mechanic, actual replacement and reason; genre versus mechanic family; explicit selection of ready v2; missing-artifact and no-substitution alternatives | UC-04 | FE-05, FE-06 |
| [SCR-4 · Play concept](index.html#play) | Top-down scene, objective, inventory, nearby interaction, proposed keyboard controls and return to exact result | UC-05 | FE-06, FE-07 |
| [SCR-4b · Ending](index.html#ending) | Consequential collection and delivery sequence; explicit ending; replay and return actions | UC-05 | FE-07 |
| [SCR-5 · Catalogue](index.html#catalogue) | Ready, failed and validating versions with distinct identifiers/timestamps; earlier ready result; empty-catalogue alternative | UC-06 | FE-08 |
| [SCR-6 · Failure](index.html#failure) | Safe explanation of unsupported essential sailing mechanic; retained failed request; no play action for failed v3 | UC-03, UC-07 | FE-04, FE-09 |
| [SCR-1b · Retry review](index.html#retry) | Explicit change to failed request, complete revised input, new version 4 linked to v3 | UC-07, UC-02 | FE-02, FE-03, FE-09 |
| [SCR-2b · Retry progress](index.html#retry-progress) | Separate v4/job J-026; previous failure preserved; navigation back to catalogue | UC-03, UC-06 | FE-04, FE-08, FE-11 |

The mapping traces intended behavior to [frontend requirements](../docs/requirements/frontend.md), [author use cases](../docs/use-cases.md) and the [project proposal](../docs/proposal.md). Depicted acceptance behavior is not evidence of implemented acceptance criteria. For example, a read-only story example communicates the planned form but does not satisfy executable editing, persistence or submission requirements.

## Walkthroughs

1. **Create and play (UF-1):** story → progress → ready result → disclosed sailing simplification → play concept → ending → replay or result.
2. **Recover (UF-2):** failed version 3 → retained request → reviewed revision → separate version 4/job → catalogue. Version 3 remains failed; no valid game is implied by the retry.
3. **Choose an earlier version (UF-3):** catalogue → ready version 2 → its result → its play concept. The latest version 4 does not replace that selection.

Version 2's progress and ready screens are successive illustrative states. The catalogue depicts a later snapshot, after version 3 failed and version 4 began validating. The progress-to-failure link opens the separate v3 example; it does not change v2's outcome.

## Design status

This static storyboard illustrates proposed interface behavior. It does not demonstrate implemented generation, validation, persistence or gameplay, and no usability study is claimed.

## Earlier overview wireframes

The original SVG storyboards remain available as complementary low-fidelity overview figures:

- [Input and progress](authoring-flow.svg)
- [Result and play](result-play.svg)
- [Catalogue and recovery](catalogue-recovery.svg)

Their buttons are drawn labels, not interactive controls. The HTML storyboard is the primary detailed UX artifact and includes the explicit version history and retry review described above.
