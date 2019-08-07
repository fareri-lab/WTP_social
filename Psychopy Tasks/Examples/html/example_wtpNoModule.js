/******************** 
 * Example_Wtp Test *
 ********************/

// init psychoJS:
var psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0, 0, 0]),
  units: 'height'
});

// store info about the experiment session:
let expName = 'example_wtp';  // from the Builder filename that created this script
let expInfo = {'participant': '', 'session': '001'};

// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(trialRoutineBegin);
flowScheduler.add(trialRoutineEachFrame);
flowScheduler.add(trialRoutineEnd);
const LoopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(LoopLoopBegin, LoopLoopScheduler);
flowScheduler.add(LoopLoopScheduler);
flowScheduler.add(LoopLoopEnd);
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({configURL: 'config.json', expInfo: expInfo});

var frameDur;
function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '3.0.7';

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0/Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0/60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  return Scheduler.Event.NEXT;
}

var trialClock;
var Instructions;
var ChoiceClock;
var leftbox;
var rightbox;
var money1;
var money2;
var blank;
var ISIClock;
var text_3;
var globalClock;
var routineTimer;
function experimentInit() {
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  Instructions = new visual.TextStim({
    win: psychoJS.window,
    name: 'Instructions',
    text: 'In this part of the task, you will be \nchoosing between two options.\n\nPress the spacebar to start!\n',
    font: 'Arial',
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Initialize components for Routine "Choice"
  ChoiceClock = new util.Clock();
  leftbox = new visual.TextStim({
    win: psychoJS.window,
    name: 'leftbox',
    text: 'default text',
    font: 'Times New Roman',
    pos: [0.5, 0.1], height: 0.094,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  rightbox = new visual.TextStim({
    win: psychoJS.window,
    name: 'rightbox',
    text: 'default text',
    font: 'Times New Roman',
    pos: [(- 0.5), 0.1], height: 0.094,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  money1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'money1',
    text: 'default text',
    font: 'Arial',
    pos: [0.5, (- 0.5)], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -3.0 
  });
  
  money2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'money2',
    text: 'default text',
    font: 'Arial',
    pos: [(- 0.5), (- 0.5)], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -4.0 
  });
  
  blank = new visual.TextStim({
    win: psychoJS.window,
    name: 'blank',
    text: '',
    font: 'Arial',
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -6.0 
  });
  
  // Initialize components for Routine "ISI"
  ISIClock = new util.Clock();
  text_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_3',
    text: '+',
    font: 'Arial',
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}

var t;
var frameN;
var spacebar;
var trialComponents;
function trialRoutineBegin() {
  //------Prepare to start Routine 'trial'-------
  t = 0;
  trialClock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
  spacebar = new core.BuilderKeyResponse(psychoJS);
  
  // keep track of which components have finished
  trialComponents = [];
  trialComponents.push(Instructions);
  trialComponents.push(spacebar);
  
  for (const thisComponent of trialComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}

var continueRoutine;
function trialRoutineEachFrame() {
  //------Loop for each frame of Routine 'trial'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = trialClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *Instructions* updates
  if (t >= 0.0 && Instructions.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    Instructions.tStart = t;  // (not accounting for frame time here)
    Instructions.frameNStart = frameN;  // exact frame index
    Instructions.setAutoDraw(true);
  }

  
  // *spacebar* updates
  if (t >= 0.0 && spacebar.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    spacebar.tStart = t;  // (not accounting for frame time here)
    spacebar.frameNStart = frameN;  // exact frame index
    spacebar.status = PsychoJS.Status.STARTED;
    // keyboard checking is just starting
    psychoJS.window.callOnFlip(function() { spacebar.clock.reset(); }); // t = 0 on screen flip
    psychoJS.eventManager.clearEvents({eventType:'keyboard'});
  }

  if (spacebar.status === PsychoJS.Status.STARTED) {
    let theseKeys = psychoJS.eventManager.getKeys({keyList:['space']});
    
    // check for quit:
    if (theseKeys.indexOf('escape') > -1) {
      psychoJS.experiment.experimentEnded = true;
    }
    
    if (theseKeys.length > 0) {  // at least one key was pressed
      spacebar.keys = theseKeys[theseKeys.length-1];  // just the last key pressed
      spacebar.rt = spacebar.clock.getTime();
      // a response ends the routine
      continueRoutine = false;
    }
  }
  
  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;// reverts to True if at least one component still running
  for (const thisComponent of trialComponents)
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
      break;
    }
  
  // refresh the screen if continuing
  if (continueRoutine) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function trialRoutineEnd() {
  //------Ending Routine 'trial'-------
  for (const thisComponent of trialComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  
  // check responses
  if (spacebar.keys === undefined || spacebar.keys.length === 0) {    // No response was made
      spacebar.keys = undefined;
  }
  
  psychoJS.experiment.addData('spacebar.keys', spacebar.keys);
  if (typeof spacebar.keys !== 'undefined') {  // we had a response
      psychoJS.experiment.addData('spacebar.rt', spacebar.rt);
      routineTimer.reset();
      }
  
  // the Routine "trial" was not non-slip safe, so reset the non-slip timer
  routineTimer.reset();
  
  return Scheduler.Event.NEXT;
}

var Loop;
function LoopLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  Loop = new TrialHandler({
    psychoJS,
    nReps: 1, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'Examples\\Activities1_DF2.xlsx',
    seed: undefined, name: 'Loop'});
  psychoJS.experiment.addLoop(Loop); // add the loop to the experiment

  // Schedule all the trials in the trialList:
  for (const thisLoop of Loop) {
    thisScheduler.add(importConditions(Loop));
    thisScheduler.add(ChoiceRoutineBegin);
    thisScheduler.add(ChoiceRoutineEachFrame);
    thisScheduler.add(ChoiceRoutineEnd);
    thisScheduler.add(ISIRoutineBegin);
    thisScheduler.add(ISIRoutineEachFrame);
    thisScheduler.add(ISIRoutineEnd);
    thisScheduler.add(endLoopIteration(thisLoop));
  }

  return Scheduler.Event.NEXT;
}


function LoopLoopEnd() {
  psychoJS.experiment.removeLoop(Loop);

  return Scheduler.Event.NEXT;
}

var responses;
var ChoiceComponents;
function ChoiceRoutineBegin() {
  //------Prepare to start Routine 'Choice'-------
  t = 0;
  ChoiceClock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
  leftbox.setText(LeftEx);
  rightbox.setText(RightEx);
  responses = new core.BuilderKeyResponse(psychoJS);
  
  money1.setText(LMoneyEx);
  money2.setText(RMoneyEx);
  blank.setText('');
  // keep track of which components have finished
  ChoiceComponents = [];
  ChoiceComponents.push(leftbox);
  ChoiceComponents.push(rightbox);
  ChoiceComponents.push(responses);
  ChoiceComponents.push(money1);
  ChoiceComponents.push(money2);
  ChoiceComponents.push(blank);
  
  for (const thisComponent of ChoiceComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}

var frameRemains;
function ChoiceRoutineEachFrame() {
  //------Loop for each frame of Routine 'Choice'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = ChoiceClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *leftbox* updates
  if (t >= 0.0 && leftbox.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    leftbox.tStart = t;  // (not accounting for frame time here)
    leftbox.frameNStart = frameN;  // exact frame index
    leftbox.setAutoDraw(true);
  }

  frameRemains = 0.0 + 4.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (leftbox.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    leftbox.setAutoDraw(false);
  }
  
  // *rightbox* updates
  if (t >= 0.0 && rightbox.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    rightbox.tStart = t;  // (not accounting for frame time here)
    rightbox.frameNStart = frameN;  // exact frame index
    rightbox.setAutoDraw(true);
  }

  frameRemains = 0.0 + 4.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (rightbox.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    rightbox.setAutoDraw(false);
  }
  
  // *responses* updates
  if (t >= 0.0 && responses.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    responses.tStart = t;  // (not accounting for frame time here)
    responses.frameNStart = frameN;  // exact frame index
    responses.status = PsychoJS.Status.STARTED;
    // keyboard checking is just starting
    psychoJS.window.callOnFlip(function() { responses.clock.reset(); }); // t = 0 on screen flip
    psychoJS.eventManager.clearEvents({eventType:'keyboard'});
  }

  frameRemains = 0.0 + 4.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (responses.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    responses.status = PsychoJS.Status.FINISHED;
  }

  if (responses.status === PsychoJS.Status.STARTED) {
    let theseKeys = psychoJS.eventManager.getKeys({keyList:['1', '2']});
    
    // check for quit:
    if (theseKeys.indexOf('escape') > -1) {
      psychoJS.experiment.experimentEnded = true;
    }
    
    if (theseKeys.length > 0) {  // at least one key was pressed
      responses.keys = theseKeys[theseKeys.length-1];  // just the last key pressed
      responses.rt = responses.clock.getTime();
    }
  }
  
  
  // *money1* updates
  if (t >= 0.0 && money1.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    money1.tStart = t;  // (not accounting for frame time here)
    money1.frameNStart = frameN;  // exact frame index
    money1.setAutoDraw(true);
  }

  frameRemains = 0.0 + 4.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (money1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    money1.setAutoDraw(false);
  }
  
  // *money2* updates
  if (t >= 0.0 && money2.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    money2.tStart = t;  // (not accounting for frame time here)
    money2.frameNStart = frameN;  // exact frame index
    money2.setAutoDraw(true);
  }

  frameRemains = 0.0 + 4.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (money2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    money2.setAutoDraw(false);
  }
  
  // *blank* updates
  if (((border_right.autoDraw == False)) && blank.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    blank.tStart = t;  // (not accounting for frame time here)
    blank.frameNStart = frameN;  // exact frame index
    blank.setAutoDraw(true);
  }

  if (blank.status === PsychoJS.Status.STARTED && t >= (blank.tStart + 1.0)) {
    blank.setAutoDraw(false);
  }
  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;// reverts to True if at least one component still running
  for (const thisComponent of ChoiceComponents)
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
      break;
    }
  
  // refresh the screen if continuing
  if (continueRoutine) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function ChoiceRoutineEnd() {
  //------Ending Routine 'Choice'-------
  for (const thisComponent of ChoiceComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  
  // check responses
  if (responses.keys === undefined || responses.keys.length === 0) {    // No response was made
      responses.keys = undefined;
  }
  
  psychoJS.experiment.addData('responses.keys', responses.keys);
  if (typeof responses.keys !== 'undefined') {  // we had a response
      psychoJS.experiment.addData('responses.rt', responses.rt);
      }
  
  // the Routine "Choice" was not non-slip safe, so reset the non-slip timer
  routineTimer.reset();
  
  return Scheduler.Event.NEXT;
}

var ISIComponents;
function ISIRoutineBegin() {
  //------Prepare to start Routine 'ISI'-------
  t = 0;
  ISIClock.reset(); // clock
  frameN = -1;
  routineTimer.add(2.000000);
  // update component parameters for each repeat
  // keep track of which components have finished
  ISIComponents = [];
  ISIComponents.push(text_3);
  
  for (const thisComponent of ISIComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}


function ISIRoutineEachFrame() {
  //------Loop for each frame of Routine 'ISI'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = ISIClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *text_3* updates
  if (t >= 0.0 && text_3.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    text_3.tStart = t;  // (not accounting for frame time here)
    text_3.frameNStart = frameN;  // exact frame index
    text_3.setAutoDraw(true);
  }

  frameRemains = 0.0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (text_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    text_3.setAutoDraw(false);
  }
  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;// reverts to True if at least one component still running
  for (const thisComponent of ISIComponents)
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
      break;
    }
  
  // refresh the screen if continuing
  if (continueRoutine && routineTimer.getTime() > 0) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function ISIRoutineEnd() {
  //------Ending Routine 'ISI'-------
  for (const thisComponent of ISIComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  return Scheduler.Event.NEXT;
}


function endLoopIteration(thisTrial) {
  // ------Prepare for next entry------
  return function () {
    if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
      psychoJS.experiment.nextEntry();
    }
  return Scheduler.Event.NEXT;
  };
}


function importConditions(loop) {
  const trialIndex = loop.getTrialIndex();
  return function () {
    loop.setTrialIndex(trialIndex);
    psychoJS.importAttributes(loop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


function quitPsychoJS(message, isCompleted) {
  psychoJS.window.close();
  psychoJS.quit({message, isCompleted});

  return Scheduler.Event.QUIT;
}
