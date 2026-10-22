/**
 * Run createCreatorSurvey once in script.google.com while signed into the
 * Google account that should own the form. The form starts unpublished.
 */
function createCreatorSurvey() {
  const form = FormApp.create('From a Game Idea to a Playable Browser Game', false);
  form.setDescription(
    'We are Software Engineering students at Astana IT University studying a proposed tool that would turn a game idea or storyline into a short, playable 2D browser game without requiring the author to code. This survey takes about five minutes. Participation is voluntary; you can leave at any time or skip optional questions. We do not ask for your name or email. We will report combined results in our diploma work. Please do not include personal details, confidential material or someone else\'s story text. The proposed tool is not available for testing yet. Continue only if you agree to use your answers for this academic study.'
  );
  form.setCollectEmail(false);
  form.setLimitOneResponsePerUser(false);
  form.setConfirmationMessage('Thank you for contributing to this academic study.');

  form.addCheckboxItem()
      .setTitle('I agree to the use of my answers for this academic study.')
      .setChoiceValues(['I agree'])
      .setRequired(true);

  addCheckbox(form, '1. What best describes you? Select all that apply.', [
    'I have a game idea but have not made a game',
    'I write stories',
    'I teach or create learning material',
    'I design or develop games',
    'I work in a creative team'
  ], true);

  addChoice(form, '2. How comfortable are you with programming or a game engine?', [
    'No experience', 'Beginner', 'Intermediate', 'Experienced'
  ]);

  addChoice(form, '3. Have you tried to turn a game idea or story into a playable game?', [
    'Yes, I finished one', 'Yes, but I did not finish',
    'I have an idea but have not tried', 'I have no current interest'
  ]);

  addCheckbox(form, '4. What are the main obstacles for you? Choose up to two.', [
    'Programming', 'Turning a story into gameplay rules', 'Art or audio',
    'Level or scene design', 'Testing and finishing the game',
    'Time or cost', 'I have not tried'
  ], true, 2);

  addChoice(form, '5. Which outcome would be most useful to you?', [
    'An immediately playable game in a browser', 'An editable project or source files',
    'An interactive story without a game world', 'Images or a video concept',
    'None of these'
  ]);

  addCheckbox(form, '6. Which two qualities would matter most in a short generated game?', [
    'Retains the central idea', 'Includes the main player action',
    'Has a clear goal and achievable ending', 'Lets me edit the result',
    'Is easy to share', 'Has appealing visuals', 'Is produced quickly'
  ], true, 2);

  form.addTextItem()
      .setTitle('7. What should a player be able to do in a game based on your idea?')
      .setHelpText('Optional: one concrete action, such as moving, choosing dialogue or collecting an item. Do not provide a full story.')
      .setRequired(false);

  addChoice(form, '8. If the tool cannot produce a requested mechanic reliably, what should it do?', [
    'Explain and offer a simpler playable alternative',
    'Ask me to revise my request',
    'Let me choose among simpler alternatives',
    'Explain that generation cannot continue'
  ]);

  addCheckbox(form, '9. What would make an otherwise opening game unacceptable? Choose up to two.', [
    'The main idea is lost', 'The requested core action is missing',
    'The game cannot be completed', 'The game crashes',
    'Controls are unclear', 'Changes are hidden',
    'The result cannot be shared or edited'
  ], true, 2);

  addChoice(form, '10. Would you consider trying a prototype if it became available?', [
    'Yes', 'Maybe', 'No'
  ]);
  form.addTextItem()
      .setTitle('Optional: What would make it useful for you?')
      .setRequired(false);

  Logger.log('Edit URL: ' + form.getEditUrl());
  Logger.log('Responder URL (publish only after review): ' + form.getPublishedUrl());
  return form.getEditUrl();
}

function addChoice(form, title, choices) {
  form.addMultipleChoiceItem()
      .setTitle(title)
      .setChoiceValues(choices)
      .showOtherOption(true)
      .setRequired(true);
}

function addCheckbox(form, title, choices, required, maxSelections) {
  const item = form.addCheckboxItem()
      .setTitle(title)
      .setChoiceValues(choices)
      .showOtherOption(true)
      .setRequired(required);
  if (maxSelections) {
    item.setValidation(FormApp.createCheckboxValidation()
        .setHelpText('Select no more than ' + maxSelections + ' options.')
        .requireSelectAtMost(maxSelections)
        .build());
  }
}
