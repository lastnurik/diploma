# Prospective Creator Survey

**Evidence status, 23 October 2026:** A team-supplied CSV export of this questionnaire contains 142 records. The [creation script](../../tools/create-google-survey.gs) documents the instrument. Recruitment, collection settings, consent records and distinct-participant checks are not independently documented. The export's origin has not been reconciled sufficiently to substantiate a claim of 142 student or prospective-creator participants. The [relevance analysis](relevance.md) therefore reports only descriptive file-level distributions.

## Form title and introduction

**Title:** From a Game Idea to a Playable Browser Game

> We are Software Engineering students at Astana IT University studying a proposed tool that would turn a game idea or storyline into a short, playable 2D browser game without requiring the author to code. This survey takes about five minutes. Participation is voluntary; you can leave at any time or skip optional questions. We do not ask for your name or email. We will report combined results in our diploma work. Please do not include personal details, confidential material or someone else's story text. The proposed tool is not available for testing yet. Continue only if you agree to use your answers for this academic study.

The instrument includes an agreement checkbox. The settings used during collection, including sign-in and email handling, are not documented by the CSV alone.

The Google Apps Script source specifies the questions. It does not provide a collection log or establish respondent provenance.

## Questions and intended use

| No. | Question and response format | Why it is asked |
| --- | --- | --- |
| 1 | **What best describes you?** Check all that apply: I have a game idea but have not made a game; I write stories; I teach or create learning material; I design/develop games; I work in a creative team; Other. | Identify the mix of prospective creators. |
| 2 | **How comfortable are you with programming or a game engine?** One: no experience; beginner; intermediate; experienced. | Separate nontechnical respondents from developers. |
| 3 | **Have you tried to turn a game idea or story into a playable game?** One: finished one; tried but did not finish; have an idea but have not tried; no current interest. | Distinguish actual attempts from hypothetical interest. |
| 4 | **What are the main obstacles for you?** Choose up to two: programming; turning a story into gameplay rules; art/audio; level or scene design; testing/finishing the game; time/cost; I have not tried; Other. | Identify practical barriers. |
| 5 | **Which outcome would be most useful to you?** One: immediately playable game in a browser; editable project/source; interactive story without a game world; images/video concept; none of these; Other. | Check whether the proposed output matches the respondent's goal. |
| 6 | **Which two qualities would matter most in a short generated game?** Choose up to two: retains the central idea; includes the main player action; has a clear goal and achievable ending; lets me edit the result; is easy to share; has appealing visuals; is produced quickly; Other. | Establish priorities. |
| 7 | **What should a player be able to do in a game based on your idea?** Optional short text, one concrete action, not a full story. | Find likely mechanics and out-of-scope requests. |
| 8 | **If the tool cannot produce a requested mechanic reliably, what should it do?** One: explain and offer a simpler playable alternative; ask me to revise my request; let me choose among simpler alternatives; explain that generation cannot continue; Other. | Inform the proposed simplification and failure policy. |
| 9 | **What would make an otherwise opening game unacceptable?** Choose up to two: main idea is lost; core action missing; game cannot be completed; game crashes; controls unclear; changes hidden; result cannot be shared/edited; Other. | Define candidate failure criteria. |
| 10 | **Would you consider trying a prototype if it became available?** One: yes; maybe; no. Optional: **What would make it useful for you?** short text. | Gauge stated willingness, not actual adoption. |

The agreement checkbox precedes Q1. Questions 1–6, 8–10 are required; Q7 and the final follow-up are optional. The form contains **no request for interview contact details**. The creation script implements these questions and the two-selection limits.

## Collection and analysis

The current analysis describes counts from the supplied export and does not publish raw responses or free-text answers. Interpretation is limited by the unrecorded recruitment and distinct-participation evidence. The [relevance analysis](relevance.md) separates observed file values from project hypotheses.

**Checklist limitation:** The supplied evidence criterion names 3–5 discussions with user representatives or substantive agreement with an actual client. The survey is useful preliminary input but does not itself prove that criterion. No interviews are planned for the immediate submission; record the criterion as unmet unless the supervisor expressly accepts a different evidence route or qualifying discussions/client agreement later occur.
