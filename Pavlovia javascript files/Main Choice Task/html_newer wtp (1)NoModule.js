/********************** 
 * Newer Wtp (1) Test *
 **********************/

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
let expName = 'newer wtp (1)';  // from the Builder filename that created this script
let expInfo = {'age': '', 'session': '001', 'participant': '', 'sex': ''};

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
const Loop2LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(Loop2LoopBegin, Loop2LoopScheduler);
flowScheduler.add(Loop2LoopScheduler);
flowScheduler.add(Loop2LoopEnd);
flowScheduler.add(instructionsRoutineBegin);
flowScheduler.add(instructionsRoutineEachFrame);
flowScheduler.add(instructionsRoutineEnd);
const questionsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(questionsLoopBegin, questionsLoopScheduler);
flowScheduler.add(questionsLoopScheduler);
flowScheduler.add(questionsLoopEnd);
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({expName, expInfo});

var frameDur;
function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '3.1.2';

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
var social1Clock;
var leftbox1;
var rightbox1;
var money3;
var money4;
var blank1;
var ISI2Clock;
var text4;
var instructionsClock;
var ty;
var Q1Clock;
var Question1;
var scale_msg1;
var scale_msg2;
var scale_msg3;
var Q2Clock;
var Question2;
var scale1;
var scale2;
var text;
var Q3Clock;
var Question3;
var scalemsg1;
var text_2;
var text_4;
var Q4Clock;
var Question4;
var scales1;
var scales2;
var scales3;
var Q6_2Clock;
var text_8;
var text_12;
var text_13;
var text_14;
var Q7Clock;
var text_9;
var text_15;
var text_16;
var text_17;
var q8Clock;
var text_10;
var text_18;
var text_19;
var text_20;
var q9Clock;
var text_11;
var text_21;
var text_22;
var text_23;
var Q5Clock;
var Question5;
var scale_1;
var text_5;
var text_6;
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
    units : undefined, 
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
    units : undefined, 
    pos: [(- 0.5), 0.1], height: 0.094,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  rightbox = new visual.TextStim({
    win: psychoJS.window,
    name: 'rightbox',
    text: 'default text',
    font: 'Times New Roman',
    units : undefined, 
    pos: [0.5, 0.1], height: 0.094,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  money1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'money1',
    text: 'default text',
    font: 'Arial',
    units : undefined, 
    pos: [(- 0.5), (- 0.5)], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -3.0 
  });
  
  money2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'money2',
    text: 'default text',
    font: 'Arial',
    units : undefined, 
    pos: [0.5, (- 0.5)], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -4.0 
  });
  
  blank = new visual.TextStim({
    win: psychoJS.window,
    name: 'blank',
    text: '',
    font: 'Arial',
    units : undefined, 
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
    units : undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Initialize components for Routine "social1"
  social1Clock = new util.Clock();
  leftbox1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'leftbox1',
    text: 'default text',
    font: 'Times New Roman',
    units : undefined, 
    pos: [(- 0.5), 0.1], height: 0.094,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  rightbox1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'rightbox1',
    text: 'default text',
    font: 'Times New Roman',
    units : undefined, 
    pos: [0.5, 0.1], height: 0.094,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  money3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'money3',
    text: 'default text',
    font: 'Arial',
    units : undefined, 
    pos: [(- 0.5), (- 0.5)], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -3.0 
  });
  
  money4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'money4',
    text: 'default text',
    font: 'Arial',
    units : undefined, 
    pos: [0.5, (- 0.5)], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -4.0 
  });
  
  blank1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'blank1',
    text: '',
    font: 'Arial',
    units : undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -6.0 
  });
  
  // Initialize components for Routine "ISI2"
  ISI2Clock = new util.Clock();
  text4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text4',
    text: '+',
    font: 'Arial',
    units : undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Initialize components for Routine "instructions"
  instructionsClock = new util.Clock();
  ty = new visual.TextStim({
    win: psychoJS.window,
    name: 'ty',
    text: 'default text',
    font: 'Arial',
    units : undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Initialize components for Routine "Q1"
  Q1Clock = new util.Clock();
  Question1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Question1',
    text: 'How likely were you to choose a social experience over a non-social experience?',
    font: 'Arial',
    units : undefined, 
    pos: [0, 0.3], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  scale_msg1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'scale_msg1',
    text: 'Very Unlikely (1)',
    font: 'Arial',
    units : undefined, 
    pos: [(- 0.5), (- 0.3)], height: 0.07,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  scale_msg2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'scale_msg2',
    text: 'Very Likely (7)',
    font: 'Arial',
    units : undefined, 
    pos: [0.5, (- 0.3)], height: 0.07,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  scale_msg3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'scale_msg3',
    text: 'Neutral',
    font: 'Arial',
    units : undefined, 
    pos: [0, (- 0.3)], height: 0.07,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -3.0 
  });
  
  // Initialize components for Routine "Q2"
  Q2Clock = new util.Clock();
  Question2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Question2',
    text: 'How likely were you to choose a non-social experience over a social experience?',
    font: 'Arial',
    units : undefined, 
    pos: [0, 0.3], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  scale1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'scale1',
    text: 'Very Unlikely (1)',
    font: 'Arial',
    units : undefined, 
    pos: [(- 0.5), (- 0.3)], height: 0.07,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  scale2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'scale2',
    text: 'Neutral',
    font: 'Arial',
    units : undefined, 
    pos: [0, (- 0.3)], height: 0.07,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: 'Very Likely (7)',
    font: 'Arial',
    units : undefined, 
    pos: [0.5, (- 0.3)], height: 0.07,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -3.0 
  });
  
  // Initialize components for Routine "Q3"
  Q3Clock = new util.Clock();
  Question3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Question3',
    text: 'How likely were you to choose experiences involving friends over experiences involving family?',
    font: 'Arial',
    units : undefined, 
    pos: [0, 0.3], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  scalemsg1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'scalemsg1',
    text: 'Very Unlikely (1)',
    font: 'Arial',
    units : undefined, 
    pos: [(- 0.5), (- 0.3)], height: 0.07,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: 'Neutral',
    font: 'Arial',
    units : undefined, 
    pos: [0, (- 0.3)], height: 0.07,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  text_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_4',
    text: 'Very Likely (7)',
    font: 'Arial',
    units : undefined, 
    pos: [0.5, (- 0.3)], height: 0.07,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -3.0 
  });
  
  // Initialize components for Routine "Q4"
  Q4Clock = new util.Clock();
  Question4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Question4',
    text: 'How likely were you to choose experiences involving family over experiences involving a significant other?',
    font: 'Arial',
    units : undefined, 
    pos: [0, 0.3], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  scales1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'scales1',
    text: 'Very Unlikely (1)',
    font: 'Arial',
    units : undefined, 
    pos: [(- 0.5), (- 0.3)], height: 0.07,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  scales2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'scales2',
    text: 'Neutral',
    font: 'Arial',
    units : undefined, 
    pos: [0, (- 0.3)], height: 0.07,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  scales3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'scales3',
    text: 'Very Likely (7)',
    font: 'Arial',
    units : undefined, 
    pos: [0.5, (- 0.3)], height: 0.07,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -3.0 
  });
  
  // Initialize components for Routine "Q6_2"
  Q6_2Clock = new util.Clock();
  text_8 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_8',
    text: 'How likely were you to choose experiences involving a significant other over experiences involving friends?',
    font: 'Arial',
    units : undefined, 
    pos: [0, 0.3], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  text_12 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_12',
    text: 'Very Unlikely (1)',
    font: 'Arial',
    units : undefined, 
    pos: [(- 0.5), (- 0.3)], height: 0.07,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  text_13 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_13',
    text: 'Neutral',
    font: 'Arial',
    units : undefined, 
    pos: [0, (- 0.3)], height: 0.07,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  text_14 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_14',
    text: 'Very Likely (7)',
    font: 'Arial',
    units : undefined, 
    pos: [0.5, (- 0.3)], height: 0.07,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -3.0 
  });
  
  // Initialize components for Routine "Q7"
  Q7Clock = new util.Clock();
  text_9 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_9',
    text: 'How likely were you to choose experiences involving family over experiences involving friends?',
    font: 'Arial',
    units : undefined, 
    pos: [0, 0.3], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  text_15 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_15',
    text: 'Very Unlikely (1)',
    font: 'Arial',
    units : undefined, 
    pos: [(- 0.5), (- 0.3)], height: 0.07,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  text_16 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_16',
    text: 'Neutral',
    font: 'Arial',
    units : undefined, 
    pos: [0, (- 0.3)], height: 0.07,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  text_17 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_17',
    text: 'Very Likely (7)',
    font: 'Arial',
    units : undefined, 
    pos: [0.5, (- 0.3)], height: 0.07,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -3.0 
  });
  
  // Initialize components for Routine "q8"
  q8Clock = new util.Clock();
  text_10 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_10',
    text: 'How likely were you to choose experiences involving friends over experiences involving a significant other?',
    font: 'Arial',
    units : undefined, 
    pos: [0, 0.3], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  text_18 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_18',
    text: 'Very Unlikely (1)',
    font: 'Arial',
    units : undefined, 
    pos: [(- 0.5), (- 0.3)], height: 0.07,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  text_19 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_19',
    text: 'Neutral',
    font: 'Arial',
    units : undefined, 
    pos: [0, (- 0.3)], height: 0.07,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  text_20 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_20',
    text: 'Very Likely (7)',
    font: 'Arial',
    units : undefined, 
    pos: [0.5, (- 0.3)], height: 0.07,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -3.0 
  });
  
  // Initialize components for Routine "q9"
  q9Clock = new util.Clock();
  text_11 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_11',
    text: 'How likely were you to choose experiences involving a significant other over experiences involving family?',
    font: 'Arial',
    units : undefined, 
    pos: [0, 0.3], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  text_21 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_21',
    text: 'Very Unlikely (1)',
    font: 'Arial',
    units : undefined, 
    pos: [(- 0.5), (- 0.3)], height: 0.07,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  text_22 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_22',
    text: 'Neutral',
    font: 'Arial',
    units : undefined, 
    pos: [0, (- 0.3)], height: 0.07,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  text_23 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_23',
    text: 'Very Likely (7)',
    font: 'Arial',
    units : undefined, 
    pos: [0.5, (- 0.3)], height: 0.07,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -3.0 
  });
  
  // Initialize components for Routine "Q5"
  Q5Clock = new util.Clock();
  Question5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Question5',
    text: 'How much did you enjoy participating?',
    font: 'Arial',
    units : undefined, 
    pos: [0, 0.3], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  scale_1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'scale_1',
    text: 'Not at all (1)',
    font: 'Arial',
    units : undefined, 
    pos: [(- 0.5), (- 0.3)], height: 0.07,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  text_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_5',
    text: 'Neutral',
    font: 'Arial',
    units : undefined, 
    pos: [0, (- 0.3)], height: 0.07,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  text_6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_6',
    text: 'Very Much (7)',
    font: 'Arial',
    units : undefined, 
    pos: [0.5, (- 0.3)], height: 0.07,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -3.0 
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
  
  trialComponents.forEach( function(thisComponent) {
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
     });
  
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
  
  continueRoutine = false;  // reverts to True if at least one component still running
  trialComponents.forEach( function(thisComponent) {
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
    }});
  
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
  trialComponents.forEach( function(thisComponent) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }});
  
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
var currentLoop;
var trialIterator;
function LoopLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  Loop = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'Activities1_DF (1).xlsx',
    seed: undefined, name: 'Loop'});
  psychoJS.experiment.addLoop(Loop); // add the loop to the experiment
  currentLoop = Loop;  // we're now the current loop

  // Schedule all the trials in the trialList:
  trialIterator = Loop[Symbol.iterator]();
  while(true) {
    let result = trialIterator.next();
    if (result.done);
      break;
    let thisLoop = result.value;
    thisScheduler.add(importConditions(Loop));
    thisScheduler.add(ChoiceRoutineBegin);
    thisScheduler.add(ChoiceRoutineEachFrame);
    thisScheduler.add(ChoiceRoutineEnd);
    thisScheduler.add(ISIRoutineBegin);
    thisScheduler.add(ISIRoutineEachFrame);
    thisScheduler.add(ISIRoutineEnd);
    thisScheduler.add(endLoopIteration(thisScheduler, thisLoop));
  }

  return Scheduler.Event.NEXT;
}


function LoopLoopEnd() {
  psychoJS.experiment.removeLoop(Loop);

  return Scheduler.Event.NEXT;
}

var Loop2;
function Loop2LoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  Loop2 = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'SocialActivities_df_Final.xlsx',
    seed: undefined, name: 'Loop2'});
  psychoJS.experiment.addLoop(Loop2); // add the loop to the experiment
  currentLoop = Loop2;  // we're now the current loop

  // Schedule all the trials in the trialList:
  trialIterator = Loop2[Symbol.iterator]();
  while(true) {
    let result = trialIterator.next();
    if (result.done);
      break;
    let thisLoop2 = result.value;
    thisScheduler.add(importConditions(Loop2));
    thisScheduler.add(social1RoutineBegin);
    thisScheduler.add(social1RoutineEachFrame);
    thisScheduler.add(social1RoutineEnd);
    thisScheduler.add(ISI2RoutineBegin);
    thisScheduler.add(ISI2RoutineEachFrame);
    thisScheduler.add(ISI2RoutineEnd);
    thisScheduler.add(endLoopIteration(thisScheduler, thisLoop2));
  }

  return Scheduler.Event.NEXT;
}


function Loop2LoopEnd() {
  psychoJS.experiment.removeLoop(Loop2);

  return Scheduler.Event.NEXT;
}

var questions;
function questionsLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  questions = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'questions'});
  psychoJS.experiment.addLoop(questions); // add the loop to the experiment
  currentLoop = questions;  // we're now the current loop

  // Schedule all the trials in the trialList:
  trialIterator = questions[Symbol.iterator]();
  while(true) {
    let result = trialIterator.next();
    if (result.done);
      break;
    let thisQuestion = result.value;
    thisScheduler.add(importConditions(questions));
    thisScheduler.add(Q1RoutineBegin);
    thisScheduler.add(Q1RoutineEachFrame);
    thisScheduler.add(Q1RoutineEnd);
    thisScheduler.add(Q2RoutineBegin);
    thisScheduler.add(Q2RoutineEachFrame);
    thisScheduler.add(Q2RoutineEnd);
    thisScheduler.add(Q3RoutineBegin);
    thisScheduler.add(Q3RoutineEachFrame);
    thisScheduler.add(Q3RoutineEnd);
    thisScheduler.add(Q4RoutineBegin);
    thisScheduler.add(Q4RoutineEachFrame);
    thisScheduler.add(Q4RoutineEnd);
    thisScheduler.add(Q6_2RoutineBegin);
    thisScheduler.add(Q6_2RoutineEachFrame);
    thisScheduler.add(Q6_2RoutineEnd);
    thisScheduler.add(Q7RoutineBegin);
    thisScheduler.add(Q7RoutineEachFrame);
    thisScheduler.add(Q7RoutineEnd);
    thisScheduler.add(q8RoutineBegin);
    thisScheduler.add(q8RoutineEachFrame);
    thisScheduler.add(q8RoutineEnd);
    thisScheduler.add(q9RoutineBegin);
    thisScheduler.add(q9RoutineEachFrame);
    thisScheduler.add(q9RoutineEnd);
    thisScheduler.add(Q5RoutineBegin);
    thisScheduler.add(Q5RoutineEachFrame);
    thisScheduler.add(Q5RoutineEnd);
    thisScheduler.add(endLoopIteration(thisScheduler, thisQuestion));
  }

  return Scheduler.Event.NEXT;
}


function questionsLoopEnd() {
  psychoJS.experiment.removeLoop(questions);

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
  leftbox.setText(Left);
  rightbox.setText(Right);
  responses = new core.BuilderKeyResponse(psychoJS);
  
  money1.setText(leftmoney);
  money2.setText(rightmoney);
  blank.setText('');
  // keep track of which components have finished
  ChoiceComponents = [];
  ChoiceComponents.push(leftbox);
  ChoiceComponents.push(rightbox);
  ChoiceComponents.push(responses);
  ChoiceComponents.push(money1);
  ChoiceComponents.push(money2);
  ChoiceComponents.push(blank);
  
  ChoiceComponents.forEach( function(thisComponent) {
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
     });
  
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
  
  continueRoutine = false;  // reverts to True if at least one component still running
  ChoiceComponents.forEach( function(thisComponent) {
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
    }});
  
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
  ChoiceComponents.forEach( function(thisComponent) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }});
  
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
  
  ISIComponents.forEach( function(thisComponent) {
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
     });
  
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
  
  continueRoutine = false;  // reverts to True if at least one component still running
  ISIComponents.forEach( function(thisComponent) {
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
    }});
  
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
  ISIComponents.forEach( function(thisComponent) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }});
  return Scheduler.Event.NEXT;
}

var response1;
var social1Components;
function social1RoutineBegin() {
  //------Prepare to start Routine 'social1'-------
  t = 0;
  social1Clock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
  leftbox1.setText(Left1);
  rightbox1.setText(Right1);
  response1 = new core.BuilderKeyResponse(psychoJS);
  
  money3.setText(leftmoney1);
  money4.setText(rightmoney1);
  blank1.setText('');
  // keep track of which components have finished
  social1Components = [];
  social1Components.push(leftbox1);
  social1Components.push(rightbox1);
  social1Components.push(response1);
  social1Components.push(money3);
  social1Components.push(money4);
  social1Components.push(blank1);
  
  social1Components.forEach( function(thisComponent) {
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
     });
  
  return Scheduler.Event.NEXT;
}


function social1RoutineEachFrame() {
  //------Loop for each frame of Routine 'social1'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = social1Clock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *leftbox1* updates
  if (t >= 0.0 && leftbox1.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    leftbox1.tStart = t;  // (not accounting for frame time here)
    leftbox1.frameNStart = frameN;  // exact frame index
    leftbox1.setAutoDraw(true);
  }

  frameRemains = 0.0 + 4.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (leftbox1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    leftbox1.setAutoDraw(false);
  }
  
  // *rightbox1* updates
  if (t >= 0.0 && rightbox1.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    rightbox1.tStart = t;  // (not accounting for frame time here)
    rightbox1.frameNStart = frameN;  // exact frame index
    rightbox1.setAutoDraw(true);
  }

  frameRemains = 0.0 + 4.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (rightbox1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    rightbox1.setAutoDraw(false);
  }
  
  // *response1* updates
  if (t >= 0.0 && response1.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    response1.tStart = t;  // (not accounting for frame time here)
    response1.frameNStart = frameN;  // exact frame index
    response1.status = PsychoJS.Status.STARTED;
    // keyboard checking is just starting
    psychoJS.window.callOnFlip(function() { response1.clock.reset(); }); // t = 0 on screen flip
    psychoJS.eventManager.clearEvents({eventType:'keyboard'});
  }

  frameRemains = 0.0 + 4.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (response1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    response1.status = PsychoJS.Status.FINISHED;
  }

  if (response1.status === PsychoJS.Status.STARTED) {
    let theseKeys = psychoJS.eventManager.getKeys({keyList:['1', '2']});
    
    // check for quit:
    if (theseKeys.indexOf('escape') > -1) {
      psychoJS.experiment.experimentEnded = true;
    }
    
    if (theseKeys.length > 0) {  // at least one key was pressed
      response1.keys = theseKeys[theseKeys.length-1];  // just the last key pressed
      response1.rt = response1.clock.getTime();
      // was this 'correct'?
      if (response1.keys == '') {
          response1.corr = 1;
      } else {
          response1.corr = 0;
      }
    }
  }
  
  
  // *money3* updates
  if (t >= 0.0 && money3.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    money3.tStart = t;  // (not accounting for frame time here)
    money3.frameNStart = frameN;  // exact frame index
    money3.setAutoDraw(true);
  }

  frameRemains = 0.0 + 4.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (money3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    money3.setAutoDraw(false);
  }
  
  // *money4* updates
  if (t >= 0.0 && money4.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    money4.tStart = t;  // (not accounting for frame time here)
    money4.frameNStart = frameN;  // exact frame index
    money4.setAutoDraw(true);
  }

  frameRemains = 0.0 + 4.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (money4.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    money4.setAutoDraw(false);
  }
  
  // *blank1* updates
  if (t >= (border_right.autoDraw == False) && blank1.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    blank1.tStart = t;  // (not accounting for frame time here)
    blank1.frameNStart = frameN;  // exact frame index
    blank1.setAutoDraw(true);
  }

  frameRemains = (border_right.autoDraw == False) + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (blank1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    blank1.setAutoDraw(false);
  }
  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;  // reverts to True if at least one component still running
  social1Components.forEach( function(thisComponent) {
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
    }});
  
  // refresh the screen if continuing
  if (continueRoutine) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function social1RoutineEnd() {
  //------Ending Routine 'social1'-------
  social1Components.forEach( function(thisComponent) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }});
  
  // check responses
  if (response1.keys === undefined || response1.keys.length === 0) {    // No response was made
      response1.keys = undefined;
  }
  
  // was no response the correct answer?!
  if (response1.keys === undefined) {
    if (['None','none',undefined].includes('')) {
       response1.corr = 1  // correct non-response
    } else {
       response1.corr = 0  // failed to respond (incorrectly)
    }
  }
  // store data for thisExp (ExperimentHandler)
  psychoJS.experiment.addData('response1.keys', response1.keys);
  psychoJS.experiment.addData('response1.corr', response1.corr);
  if (typeof response1.keys !== 'undefined') {  // we had a response
      psychoJS.experiment.addData('response1.rt', response1.rt);
      }
  
  // the Routine "social1" was not non-slip safe, so reset the non-slip timer
  routineTimer.reset();
  
  return Scheduler.Event.NEXT;
}

var ISI2Components;
function ISI2RoutineBegin() {
  //------Prepare to start Routine 'ISI2'-------
  t = 0;
  ISI2Clock.reset(); // clock
  frameN = -1;
  routineTimer.add(2.000000);
  // update component parameters for each repeat
  // keep track of which components have finished
  ISI2Components = [];
  ISI2Components.push(text4);
  
  ISI2Components.forEach( function(thisComponent) {
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
     });
  
  return Scheduler.Event.NEXT;
}


function ISI2RoutineEachFrame() {
  //------Loop for each frame of Routine 'ISI2'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = ISI2Clock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *text4* updates
  if (t >= 0.0 && text4.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    text4.tStart = t;  // (not accounting for frame time here)
    text4.frameNStart = frameN;  // exact frame index
    text4.setAutoDraw(true);
  }

  frameRemains = 0.0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (text4.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    text4.setAutoDraw(false);
  }
  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;  // reverts to True if at least one component still running
  ISI2Components.forEach( function(thisComponent) {
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
    }});
  
  // refresh the screen if continuing
  if (continueRoutine && routineTimer.getTime() > 0) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function ISI2RoutineEnd() {
  //------Ending Routine 'ISI2'-------
  ISI2Components.forEach( function(thisComponent) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }});
  return Scheduler.Event.NEXT;
}

var key_resp_2;
var instructionsComponents;
function instructionsRoutineBegin() {
  //------Prepare to start Routine 'instructions'-------
  t = 0;
  instructionsClock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
  ty.setText('Thank you for participating!\n\nPlease notify the experimenter before moving on to the final part of the task');
  key_resp_2 = new core.BuilderKeyResponse(psychoJS);
  
  // keep track of which components have finished
  instructionsComponents = [];
  instructionsComponents.push(ty);
  instructionsComponents.push(key_resp_2);
  
  instructionsComponents.forEach( function(thisComponent) {
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
     });
  
  return Scheduler.Event.NEXT;
}


function instructionsRoutineEachFrame() {
  //------Loop for each frame of Routine 'instructions'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = instructionsClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *ty* updates
  if (t >= 0.0 && ty.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    ty.tStart = t;  // (not accounting for frame time here)
    ty.frameNStart = frameN;  // exact frame index
    ty.setAutoDraw(true);
  }

  
  // *key_resp_2* updates
  if (t >= 0.0 && key_resp_2.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    key_resp_2.tStart = t;  // (not accounting for frame time here)
    key_resp_2.frameNStart = frameN;  // exact frame index
    key_resp_2.status = PsychoJS.Status.STARTED;
    // keyboard checking is just starting
    psychoJS.window.callOnFlip(function() { key_resp_2.clock.reset(); }); // t = 0 on screen flip
    psychoJS.eventManager.clearEvents({eventType:'keyboard'});
  }

  if (key_resp_2.status === PsychoJS.Status.STARTED) {
    let theseKeys = psychoJS.eventManager.getKeys({keyList:['space']});
    
    // check for quit:
    if (theseKeys.indexOf('escape') > -1) {
      psychoJS.experiment.experimentEnded = true;
    }
    
    if (theseKeys.length > 0) {  // at least one key was pressed
      key_resp_2.keys = theseKeys[theseKeys.length-1];  // just the last key pressed
      key_resp_2.rt = key_resp_2.clock.getTime();
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
  
  continueRoutine = false;  // reverts to True if at least one component still running
  instructionsComponents.forEach( function(thisComponent) {
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
    }});
  
  // refresh the screen if continuing
  if (continueRoutine) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function instructionsRoutineEnd() {
  //------Ending Routine 'instructions'-------
  instructionsComponents.forEach( function(thisComponent) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }});
  
  // check responses
  if (key_resp_2.keys === undefined || key_resp_2.keys.length === 0) {    // No response was made
      key_resp_2.keys = undefined;
  }
  
  psychoJS.experiment.addData('key_resp_2.keys', key_resp_2.keys);
  if (typeof key_resp_2.keys !== 'undefined') {  // we had a response
      psychoJS.experiment.addData('key_resp_2.rt', key_resp_2.rt);
      routineTimer.reset();
      }
  
  // the Routine "instructions" was not non-slip safe, so reset the non-slip timer
  routineTimer.reset();
  
  return Scheduler.Event.NEXT;
}

var Q1Components;
function Q1RoutineBegin() {
  //------Prepare to start Routine 'Q1'-------
  t = 0;
  Q1Clock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
  // keep track of which components have finished
  Q1Components = [];
  Q1Components.push(Question1);
  Q1Components.push(scale_msg1);
  Q1Components.push(scale_msg2);
  Q1Components.push(scale_msg3);
  
  Q1Components.forEach( function(thisComponent) {
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
     });
  
  return Scheduler.Event.NEXT;
}


function Q1RoutineEachFrame() {
  //------Loop for each frame of Routine 'Q1'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = Q1Clock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *Question1* updates
  if (t >= 0.0 && Question1.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    Question1.tStart = t;  // (not accounting for frame time here)
    Question1.frameNStart = frameN;  // exact frame index
    Question1.setAutoDraw(true);
  }

  
  // *scale_msg1* updates
  if (t >= 0.0 && scale_msg1.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    scale_msg1.tStart = t;  // (not accounting for frame time here)
    scale_msg1.frameNStart = frameN;  // exact frame index
    scale_msg1.setAutoDraw(true);
  }

  
  // *scale_msg2* updates
  if (t >= 0.0 && scale_msg2.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    scale_msg2.tStart = t;  // (not accounting for frame time here)
    scale_msg2.frameNStart = frameN;  // exact frame index
    scale_msg2.setAutoDraw(true);
  }

  
  // *scale_msg3* updates
  if (t >= 0.0 && scale_msg3.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    scale_msg3.tStart = t;  // (not accounting for frame time here)
    scale_msg3.frameNStart = frameN;  // exact frame index
    scale_msg3.setAutoDraw(true);
  }

  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;  // reverts to True if at least one component still running
  Q1Components.forEach( function(thisComponent) {
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
    }});
  
  // refresh the screen if continuing
  if (continueRoutine) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function Q1RoutineEnd() {
  //------Ending Routine 'Q1'-------
  Q1Components.forEach( function(thisComponent) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }});
  // the Routine "Q1" was not non-slip safe, so reset the non-slip timer
  routineTimer.reset();
  
  return Scheduler.Event.NEXT;
}

var Q2Components;
function Q2RoutineBegin() {
  //------Prepare to start Routine 'Q2'-------
  t = 0;
  Q2Clock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
  // keep track of which components have finished
  Q2Components = [];
  Q2Components.push(Question2);
  Q2Components.push(scale1);
  Q2Components.push(scale2);
  Q2Components.push(text);
  
  Q2Components.forEach( function(thisComponent) {
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
     });
  
  return Scheduler.Event.NEXT;
}


function Q2RoutineEachFrame() {
  //------Loop for each frame of Routine 'Q2'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = Q2Clock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *Question2* updates
  if (t >= 0.0 && Question2.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    Question2.tStart = t;  // (not accounting for frame time here)
    Question2.frameNStart = frameN;  // exact frame index
    Question2.setAutoDraw(true);
  }

  
  // *scale1* updates
  if (t >= 0.0 && scale1.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    scale1.tStart = t;  // (not accounting for frame time here)
    scale1.frameNStart = frameN;  // exact frame index
    scale1.setAutoDraw(true);
  }

  
  // *scale2* updates
  if (t >= 0.0 && scale2.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    scale2.tStart = t;  // (not accounting for frame time here)
    scale2.frameNStart = frameN;  // exact frame index
    scale2.setAutoDraw(true);
  }

  
  // *text* updates
  if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    text.tStart = t;  // (not accounting for frame time here)
    text.frameNStart = frameN;  // exact frame index
    text.setAutoDraw(true);
  }

  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;  // reverts to True if at least one component still running
  Q2Components.forEach( function(thisComponent) {
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
    }});
  
  // refresh the screen if continuing
  if (continueRoutine) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function Q2RoutineEnd() {
  //------Ending Routine 'Q2'-------
  Q2Components.forEach( function(thisComponent) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }});
  // the Routine "Q2" was not non-slip safe, so reset the non-slip timer
  routineTimer.reset();
  
  return Scheduler.Event.NEXT;
}

var Q3Components;
function Q3RoutineBegin() {
  //------Prepare to start Routine 'Q3'-------
  t = 0;
  Q3Clock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
  // keep track of which components have finished
  Q3Components = [];
  Q3Components.push(Question3);
  Q3Components.push(scalemsg1);
  Q3Components.push(text_2);
  Q3Components.push(text_4);
  
  Q3Components.forEach( function(thisComponent) {
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
     });
  
  return Scheduler.Event.NEXT;
}


function Q3RoutineEachFrame() {
  //------Loop for each frame of Routine 'Q3'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = Q3Clock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *Question3* updates
  if (t >= 0.0 && Question3.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    Question3.tStart = t;  // (not accounting for frame time here)
    Question3.frameNStart = frameN;  // exact frame index
    Question3.setAutoDraw(true);
  }

  
  // *scalemsg1* updates
  if (t >= 0.0 && scalemsg1.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    scalemsg1.tStart = t;  // (not accounting for frame time here)
    scalemsg1.frameNStart = frameN;  // exact frame index
    scalemsg1.setAutoDraw(true);
  }

  
  // *text_2* updates
  if (t >= 0.0 && text_2.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    text_2.tStart = t;  // (not accounting for frame time here)
    text_2.frameNStart = frameN;  // exact frame index
    text_2.setAutoDraw(true);
  }

  
  // *text_4* updates
  if (t >= 0.0 && text_4.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    text_4.tStart = t;  // (not accounting for frame time here)
    text_4.frameNStart = frameN;  // exact frame index
    text_4.setAutoDraw(true);
  }

  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;  // reverts to True if at least one component still running
  Q3Components.forEach( function(thisComponent) {
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
    }});
  
  // refresh the screen if continuing
  if (continueRoutine) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function Q3RoutineEnd() {
  //------Ending Routine 'Q3'-------
  Q3Components.forEach( function(thisComponent) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }});
  // the Routine "Q3" was not non-slip safe, so reset the non-slip timer
  routineTimer.reset();
  
  return Scheduler.Event.NEXT;
}

var Q4Components;
function Q4RoutineBegin() {
  //------Prepare to start Routine 'Q4'-------
  t = 0;
  Q4Clock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
  // keep track of which components have finished
  Q4Components = [];
  Q4Components.push(Question4);
  Q4Components.push(scales1);
  Q4Components.push(scales2);
  Q4Components.push(scales3);
  
  Q4Components.forEach( function(thisComponent) {
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
     });
  
  return Scheduler.Event.NEXT;
}


function Q4RoutineEachFrame() {
  //------Loop for each frame of Routine 'Q4'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = Q4Clock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *Question4* updates
  if (t >= 0.0 && Question4.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    Question4.tStart = t;  // (not accounting for frame time here)
    Question4.frameNStart = frameN;  // exact frame index
    Question4.setAutoDraw(true);
  }

  
  // *scales1* updates
  if (t >= 0.0 && scales1.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    scales1.tStart = t;  // (not accounting for frame time here)
    scales1.frameNStart = frameN;  // exact frame index
    scales1.setAutoDraw(true);
  }

  
  // *scales2* updates
  if (t >= 0.0 && scales2.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    scales2.tStart = t;  // (not accounting for frame time here)
    scales2.frameNStart = frameN;  // exact frame index
    scales2.setAutoDraw(true);
  }

  
  // *scales3* updates
  if (t >= 0.0 && scales3.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    scales3.tStart = t;  // (not accounting for frame time here)
    scales3.frameNStart = frameN;  // exact frame index
    scales3.setAutoDraw(true);
  }

  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;  // reverts to True if at least one component still running
  Q4Components.forEach( function(thisComponent) {
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
    }});
  
  // refresh the screen if continuing
  if (continueRoutine) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function Q4RoutineEnd() {
  //------Ending Routine 'Q4'-------
  Q4Components.forEach( function(thisComponent) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }});
  // the Routine "Q4" was not non-slip safe, so reset the non-slip timer
  routineTimer.reset();
  
  return Scheduler.Event.NEXT;
}

var Q6_2Components;
function Q6_2RoutineBegin() {
  //------Prepare to start Routine 'Q6_2'-------
  t = 0;
  Q6_2Clock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
  // keep track of which components have finished
  Q6_2Components = [];
  Q6_2Components.push(text_8);
  Q6_2Components.push(text_12);
  Q6_2Components.push(text_13);
  Q6_2Components.push(text_14);
  
  Q6_2Components.forEach( function(thisComponent) {
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
     });
  
  return Scheduler.Event.NEXT;
}


function Q6_2RoutineEachFrame() {
  //------Loop for each frame of Routine 'Q6_2'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = Q6_2Clock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *text_8* updates
  if (t >= 0.0 && text_8.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    text_8.tStart = t;  // (not accounting for frame time here)
    text_8.frameNStart = frameN;  // exact frame index
    text_8.setAutoDraw(true);
  }

  
  // *text_12* updates
  if (t >= 0.0 && text_12.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    text_12.tStart = t;  // (not accounting for frame time here)
    text_12.frameNStart = frameN;  // exact frame index
    text_12.setAutoDraw(true);
  }

  
  // *text_13* updates
  if (t >= 0.0 && text_13.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    text_13.tStart = t;  // (not accounting for frame time here)
    text_13.frameNStart = frameN;  // exact frame index
    text_13.setAutoDraw(true);
  }

  
  // *text_14* updates
  if (t >= 0.0 && text_14.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    text_14.tStart = t;  // (not accounting for frame time here)
    text_14.frameNStart = frameN;  // exact frame index
    text_14.setAutoDraw(true);
  }

  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;  // reverts to True if at least one component still running
  Q6_2Components.forEach( function(thisComponent) {
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
    }});
  
  // refresh the screen if continuing
  if (continueRoutine) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function Q6_2RoutineEnd() {
  //------Ending Routine 'Q6_2'-------
  Q6_2Components.forEach( function(thisComponent) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }});
  // the Routine "Q6_2" was not non-slip safe, so reset the non-slip timer
  routineTimer.reset();
  
  return Scheduler.Event.NEXT;
}

var Q7Components;
function Q7RoutineBegin() {
  //------Prepare to start Routine 'Q7'-------
  t = 0;
  Q7Clock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
  // keep track of which components have finished
  Q7Components = [];
  Q7Components.push(text_9);
  Q7Components.push(text_15);
  Q7Components.push(text_16);
  Q7Components.push(text_17);
  
  Q7Components.forEach( function(thisComponent) {
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
     });
  
  return Scheduler.Event.NEXT;
}


function Q7RoutineEachFrame() {
  //------Loop for each frame of Routine 'Q7'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = Q7Clock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *text_9* updates
  if (t >= 0.0 && text_9.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    text_9.tStart = t;  // (not accounting for frame time here)
    text_9.frameNStart = frameN;  // exact frame index
    text_9.setAutoDraw(true);
  }

  
  // *text_15* updates
  if (t >= 0.0 && text_15.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    text_15.tStart = t;  // (not accounting for frame time here)
    text_15.frameNStart = frameN;  // exact frame index
    text_15.setAutoDraw(true);
  }

  
  // *text_16* updates
  if (t >= 0.0 && text_16.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    text_16.tStart = t;  // (not accounting for frame time here)
    text_16.frameNStart = frameN;  // exact frame index
    text_16.setAutoDraw(true);
  }

  
  // *text_17* updates
  if (t >= 0.0 && text_17.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    text_17.tStart = t;  // (not accounting for frame time here)
    text_17.frameNStart = frameN;  // exact frame index
    text_17.setAutoDraw(true);
  }

  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;  // reverts to True if at least one component still running
  Q7Components.forEach( function(thisComponent) {
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
    }});
  
  // refresh the screen if continuing
  if (continueRoutine) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function Q7RoutineEnd() {
  //------Ending Routine 'Q7'-------
  Q7Components.forEach( function(thisComponent) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }});
  // the Routine "Q7" was not non-slip safe, so reset the non-slip timer
  routineTimer.reset();
  
  return Scheduler.Event.NEXT;
}

var q8Components;
function q8RoutineBegin() {
  //------Prepare to start Routine 'q8'-------
  t = 0;
  q8Clock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
  // keep track of which components have finished
  q8Components = [];
  q8Components.push(text_10);
  q8Components.push(text_18);
  q8Components.push(text_19);
  q8Components.push(text_20);
  
  q8Components.forEach( function(thisComponent) {
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
     });
  
  return Scheduler.Event.NEXT;
}


function q8RoutineEachFrame() {
  //------Loop for each frame of Routine 'q8'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = q8Clock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *text_10* updates
  if (t >= 0.0 && text_10.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    text_10.tStart = t;  // (not accounting for frame time here)
    text_10.frameNStart = frameN;  // exact frame index
    text_10.setAutoDraw(true);
  }

  
  // *text_18* updates
  if (t >= 0.0 && text_18.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    text_18.tStart = t;  // (not accounting for frame time here)
    text_18.frameNStart = frameN;  // exact frame index
    text_18.setAutoDraw(true);
  }

  
  // *text_19* updates
  if (t >= 0.0 && text_19.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    text_19.tStart = t;  // (not accounting for frame time here)
    text_19.frameNStart = frameN;  // exact frame index
    text_19.setAutoDraw(true);
  }

  
  // *text_20* updates
  if (t >= 0.0 && text_20.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    text_20.tStart = t;  // (not accounting for frame time here)
    text_20.frameNStart = frameN;  // exact frame index
    text_20.setAutoDraw(true);
  }

  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;  // reverts to True if at least one component still running
  q8Components.forEach( function(thisComponent) {
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
    }});
  
  // refresh the screen if continuing
  if (continueRoutine) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function q8RoutineEnd() {
  //------Ending Routine 'q8'-------
  q8Components.forEach( function(thisComponent) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }});
  // the Routine "q8" was not non-slip safe, so reset the non-slip timer
  routineTimer.reset();
  
  return Scheduler.Event.NEXT;
}

var q9Components;
function q9RoutineBegin() {
  //------Prepare to start Routine 'q9'-------
  t = 0;
  q9Clock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
  // keep track of which components have finished
  q9Components = [];
  q9Components.push(text_11);
  q9Components.push(text_21);
  q9Components.push(text_22);
  q9Components.push(text_23);
  
  q9Components.forEach( function(thisComponent) {
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
     });
  
  return Scheduler.Event.NEXT;
}


function q9RoutineEachFrame() {
  //------Loop for each frame of Routine 'q9'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = q9Clock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *text_11* updates
  if (t >= 0.0 && text_11.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    text_11.tStart = t;  // (not accounting for frame time here)
    text_11.frameNStart = frameN;  // exact frame index
    text_11.setAutoDraw(true);
  }

  
  // *text_21* updates
  if (t >= 0.0 && text_21.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    text_21.tStart = t;  // (not accounting for frame time here)
    text_21.frameNStart = frameN;  // exact frame index
    text_21.setAutoDraw(true);
  }

  
  // *text_22* updates
  if (t >= 0.0 && text_22.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    text_22.tStart = t;  // (not accounting for frame time here)
    text_22.frameNStart = frameN;  // exact frame index
    text_22.setAutoDraw(true);
  }

  
  // *text_23* updates
  if (t >= 0.0 && text_23.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    text_23.tStart = t;  // (not accounting for frame time here)
    text_23.frameNStart = frameN;  // exact frame index
    text_23.setAutoDraw(true);
  }

  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;  // reverts to True if at least one component still running
  q9Components.forEach( function(thisComponent) {
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
    }});
  
  // refresh the screen if continuing
  if (continueRoutine) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function q9RoutineEnd() {
  //------Ending Routine 'q9'-------
  q9Components.forEach( function(thisComponent) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }});
  // the Routine "q9" was not non-slip safe, so reset the non-slip timer
  routineTimer.reset();
  
  return Scheduler.Event.NEXT;
}

var Q5Components;
function Q5RoutineBegin() {
  //------Prepare to start Routine 'Q5'-------
  t = 0;
  Q5Clock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
  // keep track of which components have finished
  Q5Components = [];
  Q5Components.push(Question5);
  Q5Components.push(scale_1);
  Q5Components.push(text_5);
  Q5Components.push(text_6);
  
  Q5Components.forEach( function(thisComponent) {
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
     });
  
  return Scheduler.Event.NEXT;
}


function Q5RoutineEachFrame() {
  //------Loop for each frame of Routine 'Q5'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = Q5Clock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *Question5* updates
  if (t >= 0.0 && Question5.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    Question5.tStart = t;  // (not accounting for frame time here)
    Question5.frameNStart = frameN;  // exact frame index
    Question5.setAutoDraw(true);
  }

  
  // *scale_1* updates
  if (t >= 0.0 && scale_1.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    scale_1.tStart = t;  // (not accounting for frame time here)
    scale_1.frameNStart = frameN;  // exact frame index
    scale_1.setAutoDraw(true);
  }

  
  // *text_5* updates
  if (t >= 0.0 && text_5.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    text_5.tStart = t;  // (not accounting for frame time here)
    text_5.frameNStart = frameN;  // exact frame index
    text_5.setAutoDraw(true);
  }

  
  // *text_6* updates
  if (t >= 0.0 && text_6.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    text_6.tStart = t;  // (not accounting for frame time here)
    text_6.frameNStart = frameN;  // exact frame index
    text_6.setAutoDraw(true);
  }

  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;  // reverts to True if at least one component still running
  Q5Components.forEach( function(thisComponent) {
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
    }});
  
  // refresh the screen if continuing
  if (continueRoutine) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function Q5RoutineEnd() {
  //------Ending Routine 'Q5'-------
  Q5Components.forEach( function(thisComponent) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }});
  // the Routine "Q5" was not non-slip safe, so reset the non-slip timer
  routineTimer.reset();
  
  return Scheduler.Event.NEXT;
}


function endLoopIteration(thisScheduler, thisTrial) {
  // ------Prepare for next entry------
  return function () {
    // ------Check if user ended loop early------
    if (currentLoop.finished) {
      thisScheduler.stop();
    } else if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
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
  psychoJS.quit({message: message, isCompleted: isCompleted});

  return Scheduler.Event.QUIT;
}
