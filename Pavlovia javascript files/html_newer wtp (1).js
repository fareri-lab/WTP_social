/********************** 
 * Newer Wtp (1) Test *
 **********************/

import { PsychoJS } from 'https://pavlovia.org/lib/core.js';
import * as core from 'https://pavlovia.org/lib/core.js';
import { TrialHandler } from 'https://pavlovia.org/lib/data.js';
import { Scheduler } from 'https://pavlovia.org/lib/util.js';
import * as util from 'https://pavlovia.org/lib/util.js';
import * as visual from 'https://pavlovia.org/lib/visual.js';
import { Sound } from 'https://pavlovia.org/lib/sound.js';


// initiate psychoJS:
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
let expInfo = {'MTurk ID' : '', 'age': '', 'sex': ''};

// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));
//use these to set up routines and schedule the loops
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
flowScheduler.add(endingCodeRoutineBegin);
flowScheduler.add(endingCodeRoutineEachFrame);
flowScheduler.add(endingCodeRoutineEnd);
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
//add variables
var trialClock;
var Instructions;
var Instructions2;
var ChoiceClock;
var leftbox;
var rightbox;
var money1;
var money2;
var ISIClock;
var text_3;
var social1Clock;
var leftbox1;
var rightbox1;
var money3;
var money4;
var ISI2Clock;
var text4;
var instructionsClock;
var ty;
var Q1Clock;
var Question1;
var scale_msg1;
var scale_msg2;
var scale_msg3;
var slider1Clock;
var slider2Clock;
var slider3Clock;
var slider4Clock;
var slider5Clock;
var slider6Clock;
var slider7Clock;
var slider8Clock;
var slider9Clock;
var slider1;
var Q2Clock;
var Question2;
var scales1;
var slider;
var slider2;
var slider3;
var slider4;
var slider5;
var slider6;
var slider7;
var slider8;
var slider9;
var scales2;
var slideKeys;
var slideKeys2;
var slideKeys3;
var slideKeys4;
var slideKeys5;
var slideKeys6;
var slideKeys7;
var slideKeys8;
var slideKeys9;
var text;
var Q3Clock;
var Question3;
var scalemsg1;
var text_2;
var text_4;
var Q4Clock;
var Question4;
var scale1;
var scale2;
var scale3;
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
var endCode;
var endingCodeClock;

function experimentInit() {
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  Instructions = new visual.TextStim({
    win: psychoJS.window,
    name: 'Instructions',
    text: "In this part of the task, you will be choosing between two options.\n\n ",
    font: 'Arial',
    units : undefined, 
    pos: [0, 0.2], height: 0.07,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
   Instructions2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Instructions',
    text: "Please indicate which option you would prefer by using your keyboard to press '1' for the choice on the left, or '2' for the choice on the right. \n\n Each option is associated with a price, which will be subtracted from your earnings upon making a selection. \n\n Press the spacebar to start!",
    font: 'Arial',
    units : undefined, 
    pos: [0, -0.1], height: 0.044,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Initialize components for Routine "Choice"
  ChoiceClock = new util.Clock();
  //choice text shown on the left
  leftbox = new visual.TextStim({
    win: psychoJS.window,
    name: 'leftbox',
    text: 'default text',
    font: 'Times New Roman',
    units : undefined, 
    pos: [(- 0.5), 0.1], height: 0.07,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  //choice text shown on the right
  rightbox = new visual.TextStim({
    win: psychoJS.window,
    name: 'rightbox',
    text: 'default text',
    font: 'Times New Roman',
    units : undefined, 
    pos: [0.5, 0.1], height: 0.07,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
//   money amounts on the left 
  money1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'money1',
    text: 'default text',
    font: 'Arial',
    units : undefined, 
    pos: [(- 0.5), (- 0.35)], height: 0.08,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -3.0 
  });
  //money amounts on the right
  money2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'money2',
    text: 'default text',
    font: 'Arial',
    units : undefined, 
    pos: [(0.5), (- 0.35)], height: 0.08,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -4.0 
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
  //social choice text on the left
  leftbox1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'leftbox1',
    text: 'default text',
    font: 'Times New Roman',
    units : undefined, 
    pos: [(- 0.5), 0.1], height: 0.07,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  //social choice text on the right
  rightbox1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'rightbox1',
    text: 'default text',
    font: 'Times New Roman',
    units : undefined, 
    pos: [0.5, 0.1], height: 0.07,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  //money amounts on the left
  money3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'money3',
    text: 'default text',
    font: 'Arial',
    units : undefined, 
    pos: [(- 0.5), (- 0.35)], height: 0.08,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -3.0 
  });
  //money amounts on the right
  money4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'money4',
    text: 'default text',
    font: 'Arial',
    units : undefined, 
    pos: [(0.5), (- 0.35)], height: 0.08,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -4.0 
  });
 
  // Initialize components for Routine "ISI2"
  ISI2Clock = new util.Clock();
  text4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text4',
    text: '+',
    font: 'Arial',
    units : undefined, 
    pos: [0, 0], height: 0.08,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Initialize components for Routine "instructions"
  instructionsClock = new util.Clock();
  //instruction text for next questions
  ty = new visual.TextStim({
    win: psychoJS.window,
    name: 'ty',
    text: 'default text',
    font: 'Arial',
    units : undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Initialize components for Routine "Q1"
  Q1Clock = new util.Clock();
  slideKeys = new core.BuilderKeyResponse(psychoJS);
  
  Question1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Question1',
    text: 'How likely were you to choose a social experience over a non-social experience?',
    font: 'Arial',
    units : undefined, 
    pos: [0, 0.2], height: 0.08,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  scale_msg1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'scale_msg1',
    text: 'Very Unlikely',
    font: 'Arial',
    units : undefined, 
    pos: [(- 0.47), (- 0.3)], height: 0.04,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
    scale_msg2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'scale_msg2',
    text: 'Very Likely',
    font: 'Arial',
    units : undefined, 
    pos: [(0.5), (- 0.3)], height: 0.04,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  scale_msg3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'scale_msg3',
    text: 'Neutral',
    font: 'Arial',
    units : undefined, 
    pos: [0, - 0.3], height: 0.04,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -3.0 
  });
  
  
  slider1Clock = new util.Clock();
   slider1 = new visual.Slider({
    win: psychoJS.window, name: 'slider1',
    size: [0.9, 0.03], pos: [0, (- 0.15)],
    labels: ['1', '2', '3', '4', '5', '6', '7'], ticks: [1, 2, 3, 4, 5, 6, 7],
    granularity: 1, style: [visual.Slider.Style.RATING, visual.Slider.Style.TRIANGLE_MARKER],
    color: new util.Color('LightGray'), 
    fontFamily: 'HelveticaBold', bold: true, italic: false, 
    flip: false,
  });


// Question 2 Components
  slideKeys2 = new core.BuilderKeyResponse(psychoJS);
  
  slider2Clock = new util.Clock();
   slider2 = new visual.Slider({
    win: psychoJS.window, name: 'slider2',
    size: [0.9, 0.03], pos: [0, (- 0.15)],
    labels: ['1', '2', '3', '4', '5', '6', '7'], ticks: [1, 2, 3, 4, 5, 6, 7],
    granularity: 1, style: [visual.Slider.Style.RATING, visual.Slider.Style.TRIANGLE_MARKER],
    color: new util.Color('LightGray'), 
    fontFamily: 'HelveticaBold', bold: true, italic: false, 
    flip: false,
  });
  
  Q2Clock = new util.Clock();
  Question2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Question2',
    text: 'How likely were you to choose a non-social experience over a social experience?',
    font: 'Arial',
    units : undefined, 
    pos: [0, 0.2], height: 0.08,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  scale1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'scales1',
    text: 'Very Unlikely',
    font: 'Arial',
    units : undefined, 
    pos: [(- 0.47), (- 0.3)], height: 0.04,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  scale2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'scales2',
    text: 'Neutral',
    font: 'Arial',
    units : undefined, 
    pos: [0, (- 0.3)], height: 0.04,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  scale3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'scales3',
    text: 'Very Likely',
    font: 'Arial',
    units : undefined, 
    pos: [(0.5), (- 0.3)], height: 0.04,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -3.0 
  });

// Question 3 Components
  slideKeys3 = new core.BuilderKeyResponse(psychoJS);
  
  slider3Clock = new util.Clock();
   slider3 = new visual.Slider({
    win: psychoJS.window, name: 'slider3',
    size: [0.9, 0.03], pos: [0, (- 0.15)],
    labels: ['1', '2', '3', '4', '5', '6', '7'], ticks: [1, 2, 3, 4, 5, 6, 7],
    granularity: 1, style: [visual.Slider.Style.RATING, visual.Slider.Style.TRIANGLE_MARKER],
    color: new util.Color('LightGray'), 
    fontFamily: 'HelveticaBold', bold: true, italic: false, 
    flip: false,
  });
  

  Q3Clock = new util.Clock();
  Question3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Question3',
    text: 'How likely were you to choose experiences involving friends over experiences involving family?',
    font: 'Arial',
    units : undefined, 
    pos: [0, 0.2], height: 0.08,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  

  scalemsg1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'scalemsg1',
    text: 'Very Unlikely',
    font: 'Arial',
    units : undefined, 
    pos: [(- 0.47), (- 0.3)], height: 0.04,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: 'Neutral',
    font: 'Arial',
    units : undefined, 
    pos: [0, (- 0.3)], height: 0.04,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  text_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_4',
    text: 'Very Likely',
    font: 'Arial',
    units : undefined, 
    pos: [(0.5), (- 0.3)], height: 0.04,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -3.0 
  });


// Question 4 Components
  slideKeys4 = new core.BuilderKeyResponse(psychoJS);
  
  slider4Clock = new util.Clock();
   slider4 = new visual.Slider({
    win: psychoJS.window, name: 'slider4',
    size: [0.9, 0.03], pos: [0, (- 0.15)],
    labels: ['1', '2', '3', '4', '5', '6', '7'], ticks: [1, 2, 3, 4, 5, 6, 7],
    granularity: 1, style: [visual.Slider.Style.RATING, visual.Slider.Style.TRIANGLE_MARKER],
    color: new util.Color('LightGray'), 
    fontFamily: 'HelveticaBold', bold: true, italic: false, 
    flip: false,
  });
  
  // Initialize components for Routine "Q4"
  Q4Clock = new util.Clock();
  Question4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Question4',
    text: 'How likely were you to choose experiences involving family over experiences involving a significant other?',
    font: 'Arial',
    units : undefined, 
    pos: [0, 0.2], height: 0.08,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  scales1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'scales1',
    text: 'Very Unlikely',
    font: 'Arial',
    units : undefined, 
    pos: [(- 0.47), (- 0.3)], height: 0.04,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  scales2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'scales2',
    text: 'Neutral',
    font: 'Arial',
    units : undefined, 
    pos: [0, (- 0.3)], height: 0.04,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  scales3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'scales3',
    text: 'Very Likely',
    font: 'Arial',
    units : undefined, 
    pos: [(0.5), (- 0.3)], height: 0.04,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -3.0 
  });
  


//Q5 Components
  slideKeys5 = new core.BuilderKeyResponse(psychoJS);
  slider5Clock = new util.Clock();
   slider5 = new visual.Slider({
    win: psychoJS.window, name: 'slider6',
    size: [0.9, 0.03], pos: [0, (- 0.15)],
    labels: ['1', '2', '3', '4', '5', '6', '7'], ticks: [1, 2, 3, 4, 5, 6, 7],
    granularity: 1, style: [visual.Slider.Style.RATING, visual.Slider.Style.TRIANGLE_MARKER],
    color: new util.Color('LightGray'), 
    fontFamily: 'HelveticaBold', bold: true, italic: false, 
    flip: false,
  });
  

  Q5Clock = new util.Clock();
  Question5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Question5',
    text: 'How much did you enjoy participating?',
    font: 'Arial',
    units : undefined, 
    pos: [0, 0.2], height: 0.08,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });

  scale_1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'scale_1',
    text: 'Not at all',
    font: 'Arial',
    units : undefined, 
    pos: [(- 0.5), (- 0.3)], height: 0.04,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  text_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_5',
    text: 'Neutral',
    font: 'Arial',
    units : undefined, 
    pos: [0, (- 0.3)], height: 0.04,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  text_6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_6',
    text: 'Very Much',
    font: 'Arial',
    units : undefined, 
    pos: [0.5, (- 0.3)], height: 0.04,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -3.0 
  });

//  Question 6 Components

  slideKeys6 = new core.BuilderKeyResponse(psychoJS);
  
  slider6Clock = new util.Clock();
   slider6 = new visual.Slider({
    win: psychoJS.window, name: 'slider5',
    size: [0.9, 0.03], pos: [0, (- 0.15)],
    labels: ['1', '2', '3', '4', '5', '6', '7'], ticks: [1, 2, 3, 4, 5, 6, 7],
    granularity: 1, style: [visual.Slider.Style.RATING, visual.Slider.Style.TRIANGLE_MARKER],
    color: new util.Color('LightGray'), 
    fontFamily: 'HelveticaBold', bold: true, italic: false, 
    flip: false,
  });
  
  Q6_2Clock = new util.Clock();
  text_8 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_8',
    text: 'How likely were you to choose experiences involving a significant other over experiences involving friends?',
    font: 'Arial',
    units : undefined, 
    pos: [0, 0.2], height: 0.08,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  

  text_12 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_12',
    text: 'Very Unlikely',
    font: 'Arial',
    units : undefined, 
    pos: [(- 0.47), (- 0.3)], height: 0.04,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  text_13 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_13',
    text: 'Neutral',
    font: 'Arial',
    units : undefined, 
    pos: [0, (- 0.3)], height: 0.04,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  text_14 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_14',
    text: 'Very Likely',
    font: 'Arial',
    units : undefined, 
    pos: [(0.5), (- 0.3)], height: 0.04,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -3.0 
  });


// Q7Components
  slideKeys7 = new core.BuilderKeyResponse(psychoJS);

  slider7Clock = new util.Clock();
   slider7 = new visual.Slider({
    win: psychoJS.window, name: 'slider7',
    size: [0.9, 0.03], pos: [0, (- 0.15)],
    labels: ['1', '2', '3', '4', '5', '6', '7'], ticks: [1, 2, 3, 4, 5, 6, 7],
    granularity: 1, style: [visual.Slider.Style.RATING, visual.Slider.Style.TRIANGLE_MARKER],
    color: new util.Color('LightGray'), 
    fontFamily: 'HelveticaBold', bold: true, italic: false, 
    flip: false,
  });
  
  
  Q7Clock = new util.Clock();
  text_9 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_9',
    text: 'How likely were you to choose experiences involving family over experiences involving friends?',
    font: 'Arial',
    units : undefined, 
    pos: [0, 0.2], height: 0.08,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  

  text_15 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_15',
    text: 'Very Unlikely',
    font: 'Arial',
    units : undefined, 
    pos: [(- 0.47), (- 0.3)], height: 0.04,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  text_16 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_16',
    text: 'Neutral',
    font: 'Arial',
    units : undefined, 
    pos: [0, (- 0.3)], height: 0.04,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  text_17 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_17',
    text: 'Very Likely',
    font: 'Arial',
    units : undefined, 
    pos: [(0.5), (- 0.3)], height: 0.04,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -3.0 
  });

//Q8 Components
  slideKeys8 = new core.BuilderKeyResponse(psychoJS);
  
  slider8Clock = new util.Clock();
   slider8 = new visual.Slider({
    win: psychoJS.window, name: 'slider8',
    size: [0.9, 0.03], pos: [0, (- 0.15)],
    labels: ['1', '2', '3', '4', '5', '6', '7'], ticks: [1, 2, 3, 4, 5, 6, 7],
    granularity: 1, style: [visual.Slider.Style.RATING, visual.Slider.Style.TRIANGLE_MARKER],
    color: new util.Color('LightGray'), 
    fontFamily: 'HelveticaBold', bold: true, italic: false, 
    flip: false,
  });

  q8Clock = new util.Clock();
  text_10 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_10',
    text: 'How likely were you to choose experiences involving friends over experiences involving a significant other?',
    font: 'Arial',
    units : undefined, 
    pos: [0, 0.2], height: 0.08,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  

  
  text_18 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_18',
    text: 'Very Unlikely',
    font: 'Arial',
    units : undefined, 
    pos: [(- 0.47), (- 0.3)], height: 0.04,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  text_19 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_19',
    text: 'Neutral',
    font: 'Arial',
    units : undefined, 
    pos: [0, (- 0.3)], height: 0.04,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  text_20 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_20',
    text: 'Very Likely',
    font: 'Arial',
    units : undefined, 
    pos: [(0.5), (- 0.3)], height: 0.04,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -3.0 
  });

//Q9 Components
  slideKeys9 = new core.BuilderKeyResponse(psychoJS);
  slider9Clock = new util.Clock();
   slider9 = new visual.Slider({
    win: psychoJS.window, name: 'slider9',
    size: [0.9, 0.03], pos: [0, (- 0.15)],
    labels: ['1', '2', '3', '4', '5', '6', '7'], ticks: [1, 2, 3, 4, 5, 6, 7],
    granularity: 1, style: [visual.Slider.Style.RATING, visual.Slider.Style.TRIANGLE_MARKER],
    color: new util.Color('LightGray'), 
    fontFamily: 'HelveticaBold', bold: true, italic: false, 
    flip: false,
  });


  q9Clock = new util.Clock();
  text_11 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_11',
    text: 'How likely were you to choose experiences involving a significant other over experiences involving family?',
    font: 'Arial',
    units : undefined, 
    pos: [0, 0.2], height: 0.08,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  text_21 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_21',
    text: 'Very Unlikely',
    font: 'Arial',
    units : undefined, 
    pos: [(- 0.47), (- 0.3)], height: 0.04,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  text_22 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_22',
    text: 'Neutral',
    font: 'Arial',
    units : undefined, 
    pos: [0, (- 0.3)], height: 0.04,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  text_23 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_23',
    text: 'Very Likely',
    font: 'Arial',
    units : undefined, 
    pos: [(0.5), (- 0.3)], height: 0.04,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -3.0 
  });
  
    // Initialize components for Routine "endCode"
  endingCodeClock = new util.Clock();
  endCode = new visual.TextStim({
    win: psychoJS.window,
    name: 'ending text',
    text: "Thank you for participating! \n\nYour survey code is 8514623942 \n\nPlease enter the code into the survey response box, then press space to submit your work.",
    font: 'Arial',
    units : undefined, 
    pos: [0, 0.0], height: 0.07,  wrapWidth: undefined, ori: 0,
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
  trialComponents.push(Instructions2);
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

  if (t >= 0.0 && Instructions2.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    Instructions2.tStart = t;  // (not accounting for frame time here)
    Instructions2.frameNStart = frameN;  // exact frame index
    Instructions2.setAutoDraw(true);
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

  if (spacebar.status == PsychoJS.Status.STARTED) {
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
var currentLoop;
function LoopLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  Loop = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'Activities1_DF_dollars.xlsx',
    seed: undefined, name: 'Loop'});
  psychoJS.experiment.addLoop(Loop); // add the loop to the experiment
  currentLoop = Loop;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisLoop of Loop) {
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
  for (const thisLoop2 of Loop2) {
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

//to end the loop
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
  for (const thisQuestion of questions) {
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

//end loop
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
  //uses conditions from spreadsheet to setText
  leftbox.setText(Left);
  rightbox.setText(Right);
    
  money1.setText(leftmoney);
  money2.setText(rightmoney);
  // create key response
  responses = new core.BuilderKeyResponse(psychoJS);

 
  // keep track of which components have finished
  ChoiceComponents = [];
  ChoiceComponents.push(leftbox);
  ChoiceComponents.push(rightbox);
  ChoiceComponents.push(responses);
  ChoiceComponents.push(money1);
  ChoiceComponents.push(money2);

 //if the components have a status function, say that it has not started yet and go to the next event 
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
  
  // *leftbox* updates, draw left text
  if (t >= 0.0 && leftbox.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    leftbox.tStart = t;  // (not accounting for frame time here)
    leftbox.frameNStart = frameN;  // exact frame index
    leftbox.setAutoDraw(true);
  }
//after 4 seconds take it away 
  frameRemains = 0.0 + 4.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (leftbox.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    leftbox.setAutoDraw(false);
  }
  
  // *rightbox* updates, draw right text
  if (t >= 0.0 && rightbox.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    rightbox.tStart = t;  // (not accounting for frame time here)
    rightbox.frameNStart = frameN;  // exact frame index
    rightbox.setAutoDraw(true);
  }
//after 4 seconds take it away 
  frameRemains = 0.0 + 4.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (rightbox.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    rightbox.setAutoDraw(false);
  }
  
  // *responses* updates, let them respond with keyboard
  if (t >= 0.0 && responses.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    responses.tStart = t;  // (not accounting for frame time here)
    responses.frameNStart = frameN;  // exact frame index
    responses.status = PsychoJS.Status.STARTED;
    // keyboard checking is just starting
    psychoJS.window.callOnFlip(function() { responses.clock.reset(); }); // t = 0 on screen flip
    psychoJS.eventManager.clearEvents({eventType:'keyboard'});
  }
//after 4 seconds, they can't respond
  frameRemains = 0.0 + 4.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (responses.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    responses.status = PsychoJS.Status.FINISHED;
  }
//get keys that they chose
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
  
  
  // *money1* updates, draw left money
  if (t >= 0.0 && money1.status == PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    money1.tStart = t;  // (not accounting for frame time here)
    money1.frameNStart = frameN;  // exact frame index
    money1.setAutoDraw(true);
  }
//show for 4 seconds then take off screen
  frameRemains = 0.0 + 4.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (money1.status == PsychoJS.Status.STARTED && t >= frameRemains) {
    money1.setAutoDraw(false);
  }
  
  // *money2* updates. draw right money
  if (t >= 0.0 && money2.status == PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    money2.tStart = t;  // (not accounting for frame time here)
    money2.frameNStart = frameN;  // exact frame index
    money2.setAutoDraw(true);
  }
//after 4 seconds take it off screen 
  frameRemains = 0.0 + 4.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (money2.status == PsychoJS.Status.STARTED && t >= frameRemains) {
    money2.setAutoDraw(false);
  }
  // if they pressed 1, make left text green
  if (responses.keys == '1') {
    leftbox.setColor(new util.Color(greenText));
  }    
  //if they pressed 2, make right text green
  if (responses.keys == '2') {
    rightbox.setColor(new util.Color(greenText));
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
  
//   reset text color for next trial
  leftbox.setColor(new util.Color("white"));
  rightbox.setColor(new util.Color("white"));
  
  routineTimer.reset();
  
  return Scheduler.Event.NEXT;
}

var ISIComponents;
function ISIRoutineBegin() {
  //------Prepare to start Routine 'ISI'-------
  t = 0;
  ISIClock.reset(); // clock
  frameN = -1;
  routineTimer.add(1.000000);
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
  
  // *text_3* updates, draw the fixation cross
  if (t >= 0.0 && text_3.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    text_3.tStart = t;  // (not accounting for frame time here)
    text_3.frameNStart = frameN;  // exact frame index
    text_3.setAutoDraw(true);
  }
// show for 2 seconds then take off screen
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

var response1;
var social1Components;
function social1RoutineBegin() {
  //------Prepare to start Routine 'social1'-------
  t = 0;
  social1Clock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
//   set text conditions for social vs social 
  leftbox1.setText(Left1);
  rightbox1.setText(Right1);
  response1 = new core.BuilderKeyResponse(psychoJS);
  
  money3.setText(leftmoney1);
  money4.setText(rightmoney1);

  // keep track of which components have finished
  social1Components = [];
  social1Components.push(leftbox1);
  social1Components.push(rightbox1);
  social1Components.push(response1);
  social1Components.push(money3);
  social1Components.push(money4);

  
  for (const thisComponent of social1Components)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}


function social1RoutineEachFrame() {
  //------Loop for each frame of Routine 'social1'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = social1Clock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *leftbox1* updates, draw left text
  if (t >= 0.0 && leftbox1.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    leftbox1.tStart = t;  // (not accounting for frame time here)
    leftbox1.frameNStart = frameN;  // exact frame index
    leftbox1.setAutoDraw(true);
  }
// show for 4 seconds then take off screen
  frameRemains = 0.0 + 4.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (leftbox1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    leftbox1.setAutoDraw(false);
  }
  
  // *rightbox1* updates, draw right text
  if (t >= 0.0 && rightbox1.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    rightbox1.tStart = t;  // (not accounting for frame time here)
    rightbox1.frameNStart = frameN;  // exact frame index
    rightbox1.setAutoDraw(true);
  }
// show for 4 seconds then take off screen 
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
// allowed to respond within 4 seconds then they cannot respond
  frameRemains = 0.0 + 4.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (response1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    response1.status = PsychoJS.Status.FINISHED;
  }
// get chosen keys
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
  
  
  // *money3* updates, draw left money
  if (t >= 0.0 && money3.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    money3.tStart = t;  // (not accounting for frame time here)
    money3.frameNStart = frameN;  // exact frame index
    money3.setAutoDraw(true);
  }
// show for 4 seconds
  frameRemains = 0.0 + 4.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (money3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    money3.setAutoDraw(false);
  }
  
  // *money4* updates, draw right money
  if (t >= 0.0 && money4.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    money4.tStart = t;  // (not accounting for frame time here)
    money4.frameNStart = frameN;  // exact frame index
    money4.setAutoDraw(true);
  }
// show for 4 seconds
  frameRemains = 0.0 + 4.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (money4.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    money4.setAutoDraw(false);
  }
//   if they pressed 1, make text green 
  if (response1.keys == '1') {
    leftbox1.setColor(new util.Color(greenText2));
  }
  
//   if they pressed 2, make text green 
  if (response1.keys == '2') {
    rightbox1.setColor(new util.Color(greenText2));
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
  for (const thisComponent of social1Components)
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


function social1RoutineEnd() {
  //------Ending Routine 'social1'-------
  for (const thisComponent of social1Components) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  
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
  
//   reset text color so it won't stay green for next trial
  leftbox1.setColor(new util.Color("white"));
  rightbox1.setColor(new util.Color("white"));
  
  
  return Scheduler.Event.NEXT;
}

var ISI2Components;
function ISI2RoutineBegin() {
  //------Prepare to start Routine 'ISI2'-------
  t = 0;
  ISI2Clock.reset(); // clock
  frameN = -1;
  routineTimer.add(1.000000);
  // update component parameters for each repeat
  // keep track of which components have finished
  ISI2Components = [];
  ISI2Components.push(text4);
  
  for (const thisComponent of ISI2Components)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}


function ISI2RoutineEachFrame() {
  //------Loop for each frame of Routine 'ISI2'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = ISI2Clock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // display fixation cross for 2 seconds
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
  for (const thisComponent of ISI2Components)
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


function ISI2RoutineEnd() {
  //------Ending Routine 'ISI2'-------
  for (const thisComponent of ISI2Components) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  return Scheduler.Event.NEXT;
}

var key_resp_2;
var instructionsComponents;
function instructionsRoutineBegin() {
  //------Prepare to start Routine 'instructions'-------
  t = 0;
  instructionsClock.reset(); // clock
  frameN = -1;
  // set question instruction text and add key response
  ty.setText('Thank you for participating!\n\nNow you will be answering a few questions about your experience during the task. \n\nUse your mouse to click on the slider to respond to the question, then press enter to move on. \n\nPlease press space to continue!');
  key_resp_2 = new core.BuilderKeyResponse(psychoJS);
  
  // keep track of which components have finished
  instructionsComponents = [];
  instructionsComponents.push(ty);
  instructionsComponents.push(key_resp_2);
  
  for (const thisComponent of instructionsComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}


function instructionsRoutineEachFrame() {
  //------Loop for each frame of Routine 'instructions'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = instructionsClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // display question instruction text
  if (t >= 0.0 && ty.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    ty.tStart = t;  // (not accounting for frame time here)
    ty.frameNStart = frameN;  // exact frame index
    ty.setAutoDraw(true);
  }

  
  // press space to continue
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
  for (const thisComponent of instructionsComponents)
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


function instructionsRoutineEnd() {
  //------Ending Routine 'instructions'-------
  for (const thisComponent of instructionsComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  
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
  Q1Components.push(slideKeys);
  Q1Components.push(slider1);
  Q1Components.push(slider1Clock);
  Q1Components.push(scale_msg1);
  Q1Components.push(scale_msg2);
  Q1Components.push(scale_msg3);
  
  for (const thisComponent of Q1Components)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}


function Q1RoutineEachFrame() {
  //------Loop for each frame of Routine 'Q1'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = Q1Clock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // display text for question
  if (t >= 0.0 && Question1.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    Question1.tStart = t;  // (not accounting for frame time here)
    Question1.frameNStart = frameN;  // exact frame index
    Question1.setAutoDraw(true);
  }

  
  // display Very Unlikely, Neutral, and Very Likely
  if (t >= 0.0 && scale_msg1.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    scale_msg1.tStart = t;  // (not accounting for frame time here)
    scale_msg1.frameNStart = frameN;  // exact frame index
    scale_msg1.setAutoDraw(true);
  }

  if (t >= 0.0 && scale_msg2.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    scale_msg2.tStart = t;  // (not accounting for frame time here)
    scale_msg2.frameNStart = frameN;  // exact frame index
    scale_msg2.setAutoDraw(true);
  }

  if (t >= 0.0 && scale_msg3.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    scale_msg3.tStart = t;  // (not accounting for frame time here)
    scale_msg3.frameNStart = frameN;  // exact frame index
    scale_msg3.setAutoDraw(true);
  }
  
//   display the ratings scale
  if (t >= 0.0 && slider1.status === PsychoJS.Status.NOT_STARTED) {
    slider1.tStart = t;
    slider1.frameNStart = frameN;
    slider1.setAutoDraw(true);
  }

// let them press enter to record the answer
  if (t >= 0.0 && slideKeys.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    slideKeys.tStart = t;  // (not accounting for frame time here)
    slideKeys.frameNStart = frameN;  // exact frame index
    slideKeys.status = PsychoJS.Status.STARTED;
    // keyboard checking is just starting
    psychoJS.window.callOnFlip(function() { slideKeys.clock.reset(); }); // t = 0 on screen flip
    psychoJS.eventManager.clearEvents({eventType:'keyboard'});
  }
 if (slideKeys.status === PsychoJS.Status.STARTED) {
    let theseKeys = psychoJS.eventManager.getKeys({keyList:['return']});
    
    if (theseKeys.indexOf('escape') > -1) {
      psychoJS.experiment.experimentEnded = true;
    }
    
    if (theseKeys.length > 0) {  // at least one key was pressed
      slideKeys.keys = theseKeys[theseKeys.length-1];  // just the last key pressed
      slideKeys.rt = slideKeys.clock.getTime();
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
  for (const thisComponent of Q1Components)
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


function Q1RoutineEnd() {
  //------Ending Routine 'Q1'-------
  for (const thisComponent of Q1Components) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  // the Routine "Q1" was not non-slip safe, so reset the non-slip timer
//   get their ratings
  psychoJS.experiment.addData('slider1.response', slider1.getRating());
  psychoJS.experiment.addData('slider1.rt', slider1.getRT());
  
  if (slideKeys.keys === undefined || slideKeys.keys.length === 0) {   
    slideKeys.keys = undefined;
  }

  if (typeof slideKeys.keys !== 'undefined') {  
    psychoJS.experiment.addData('slideKeys.rt', slideKeys.rt);
    routineTimer.reset();
  }

  
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
  Q2Components.push(slideKeys2);
  Q2Components.push(slider2);
  Q2Components.push(slider2Clock);
  Q2Components.push(scale1);
  Q2Components.push(scale2);
  Q2Components.push(scale3);
  
  for (const thisComponent of Q1Components)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}


function Q2RoutineEachFrame() {
  //------Loop for each frame of Routine 'Q2'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = Q2Clock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // display Question 2 text
  if (t >= 0.0 && Question2.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    Question2.tStart = t;  // (not accounting for frame time here)
    Question2.frameNStart = frameN;  // exact frame index
    Question2.setAutoDraw(true);
  }

  
// display Very Unlikely, Neutral, Very Likely
  if (t >= 0.0 && scale3.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    scale3.tStart = t;  // (not accounting for frame time here)
    scale3.frameNStart = frameN;  // exact frame index
    scale3.setAutoDraw(true);
  }

  if (t >= 0.0 && scale1.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    scale1.tStart = t;  // (not accounting for frame time here)
    scale1.frameNStart = frameN;  // exact frame index
    scale1.setAutoDraw(true);
  }

  
  if (t >= 0.0 && scale2.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    scale2.tStart = t;  // (not accounting for frame time here)
    scale2.frameNStart = frameN;  // exact frame index
    scale2.setAutoDraw(true);
  }
  
//   set rating scale
  if (t >= 0.0 && slider2.status === PsychoJS.Status.NOT_STARTED) {
    slider2.tStart = t;
    slider2.frameNStart = frameN;
    slider2.setAutoDraw(true);
  }

// set keys to respond to scale
  if (t >= 0.0 && slideKeys2.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    slideKeys2.tStart = t;  // (not accounting for frame time here)
    slideKeys2.frameNStart = frameN;  // exact frame index
    slideKeys2.status = PsychoJS.Status.STARTED;
    // keyboard checking is just starting
    psychoJS.window.callOnFlip(function() { slideKeys2.clock.reset(); }); // t = 0 on screen flip
    psychoJS.eventManager.clearEvents({eventType:'keyboard'});
  }

  if (slideKeys2.status === PsychoJS.Status.STARTED) {
    let theseKeys = psychoJS.eventManager.getKeys({keyList:['return']});
    
    if (theseKeys.indexOf('escape') > -1) {
      psychoJS.experiment.experimentEnded = true;
    }
    
    if (theseKeys.length > 0) {  // at least one key was pressed
      slideKeys.keys = theseKeys[theseKeys.length-1];  // just the last key pressed
      slideKeys2.rt = slideKeys2.clock.getTime();
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
  for (const thisComponent of Q2Components)
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

function Q2RoutineEnd() {
  //------Ending Routine 'Q2'-------
  for (const thisComponent of Q2Components) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
// add their ratings to the data 
  psychoJS.experiment.addData('slider2.response', slider2.getRating());
  psychoJS.experiment.addData('slider2.rt', slider2.getRT());
//   check for no response
  if (slideKeys2.keys === undefined || slideKeys2.keys.length === 0) {   
    slideKeys2.keys = undefined;
  }

  if (typeof slideKeys2.keys !== 'undefined') {  
    psychoJS.experiment.addData('slideKeys2.rt', slideKeys2.rt);
    routineTimer.reset();
  }

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
  Q3Components.push(slideKeys3);
  Q3Components.push(slider3);
  Q3Components.push(slider3Clock);
  Q3Components.push(scalemsg1);
  Q3Components.push(text_2);
  Q3Components.push(text_4);
  
  
  for (const thisComponent of Q3Components)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}


function Q3RoutineEachFrame() {
  //------Loop for each frame of Routine 'Q3'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = Q3Clock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  //display text for Q3
  if (t >= 0.0 && Question3.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    Question3.tStart = t;  // (not accounting for frame time here)
    Question3.frameNStart = frameN;  // exact frame index
    Question3.setAutoDraw(true);
  }

  
  // display Very Unlikely, Neutral, Very Likely
  if (t >= 0.0 && scalemsg1.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    scalemsg1.tStart = t;  // (not accounting for frame time here)
    scalemsg1.frameNStart = frameN;  // exact frame index
    scalemsg1.setAutoDraw(true);
  }

  if (t >= 0.0 && text_2.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    text_2.tStart = t;  // (not accounting for frame time here)
    text_2.frameNStart = frameN;  // exact frame index
    text_2.setAutoDraw(true);
  }

  if (t >= 0.0 && text_4.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    text_4.tStart = t;  // (not accounting for frame time here)
    text_4.frameNStart = frameN;  // exact frame index
    text_4.setAutoDraw(true);
  }
  
//   display ratings scale
  if (t >= 0.0 && slider3.status === PsychoJS.Status.NOT_STARTED) {
    slider3.tStart = t;
    slider3.frameNStart = frameN;
    slider3.setAutoDraw(true);
  }

// set up key response
  if (t >= 0.0 && slideKeys3.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    slideKeys3.tStart = t;  // (not accounting for frame time here)
    slideKeys3.frameNStart = frameN;  // exact frame index
    slideKeys3.status = PsychoJS.Status.STARTED;
    // keyboard checking is just starting
    psychoJS.window.callOnFlip(function() { slideKeys.clock.reset(); }); // t = 0 on screen flip
    psychoJS.eventManager.clearEvents({eventType:'keyboard'});
  }

  if (slideKeys3.status === PsychoJS.Status.STARTED) {
    let theseKeys = psychoJS.eventManager.getKeys({keyList:['return']});
    
    if (theseKeys.indexOf('escape') > -1) {
      psychoJS.experiment.experimentEnded = true;
    }
    
    if (theseKeys.length > 0) {  // at least one key was pressed
      slideKeys3.keys = theseKeys[theseKeys.length-1];  // just the last key pressed
      slideKeys3.rt = slideKeys3.clock.getTime();
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
  for (const thisComponent of Q3Components)
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


function Q3RoutineEnd() {
  //------Ending Routine 'Q3'-------
  for (const thisComponent of Q3Components) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }

//   add ratings to data
  psychoJS.experiment.addData('slider3.response', slider3.getRating());
  psychoJS.experiment.addData('slider3.rt', slider3.getRT());

//   check for no response
  if (slideKeys3.keys === undefined || slideKeys3.keys.length === 0) {   
    slideKeys3.keys = undefined;
  }
  
  if (typeof slideKeys3.keys !== 'undefined') {  
    psychoJS.experiment.addData('slideKeys3.rt', slideKeys3.rt);
    routineTimer.reset();
  }

  
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
  Q4Components.push(slideKeys4);
  Q4Components.push(slider4);
  Q4Components.push(slider4Clock);
  Q4Components.push(scales1);
  Q4Components.push(scales2);
  Q4Components.push(scales3);
  
  for (const thisComponent of Q4Components)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}


function Q4RoutineEachFrame() {
  //------Loop for each frame of Routine 'Q4'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = Q4Clock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // display text for question4
  if (t >= 0.0 && Question4.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    Question4.tStart = t;  // (not accounting for frame time here)
    Question4.frameNStart = frameN;  // exact frame index
    Question4.setAutoDraw(true);
  }

  
  // display Very Unlikely, Neutral, Very Likely
  if (t >= 0.0 && scales1.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    scales1.tStart = t;  // (not accounting for frame time here)
    scales1.frameNStart = frameN;  // exact frame index
    scales1.setAutoDraw(true);
  }

  if (t >= 0.0 && scales2.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    scales2.tStart = t;  // (not accounting for frame time here)
    scales2.frameNStart = frameN;  // exact frame index
    scales2.setAutoDraw(true);
  }

  if (t >= 0.0 && scales3.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    scales3.tStart = t;  // (not accounting for frame time here)
    scales3.frameNStart = frameN;  // exact frame index
    scales3.setAutoDraw(true);
  }
  
//  display ratings scale
  if (t >= 0.0 && slider4.status === PsychoJS.Status.NOT_STARTED) {
    slider4.tStart = t;
    slider4.frameNStart = frameN;
    slider4.setAutoDraw(true);
  }

// let them press enter to record answer
  if (t >= 0.0 && slideKeys4.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    slideKeys4.tStart = t;  // (not accounting for frame time here)
    slideKeys4.frameNStart = frameN;  // exact frame index
    slideKeys4.status = PsychoJS.Status.STARTED;
    // keyboard checking is just starting
    psychoJS.window.callOnFlip(function() { slideKeys4.clock.reset(); }); // t = 0 on screen flip
    psychoJS.eventManager.clearEvents({eventType:'keyboard'});
  }


  if (slideKeys4.status === PsychoJS.Status.STARTED) {
    let theseKeys = psychoJS.eventManager.getKeys({keyList:['return']});
    
    if (theseKeys.indexOf('escape') > -1) {
      psychoJS.experiment.experimentEnded = true;
    }
    
    if (theseKeys.length > 0) {  // at least one key was pressed
      slideKeys4.keys = theseKeys[theseKeys.length-1];  // just the last key pressed
      slideKeys4.rt = slideKeys4.clock.getTime();
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
  for (const thisComponent of Q4Components)
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


function Q4RoutineEnd() {
  for (const thisComponent of Q4Components) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  // get data 
  psychoJS.experiment.addData('slider4.response', slider4.getRating());
  psychoJS.experiment.addData('slider4.rt', slider4.getRT());
  
//   check for no response
  if (slideKeys4.keys === undefined || slideKeys4.keys.length === 0) {   
    slideKeys4.keys = undefined;
  }

  if (typeof slideKeys4.keys !== 'undefined') {  
    psychoJS.experiment.addData('slideKeys4.rt', slideKeys4.rt);
    routineTimer.reset();
  }

  
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
  Q6_2Components.push(slideKeys6);
  Q6_2Components.push(slider6);
  Q6_2Components.push(slider6Clock);
  Q6_2Components.push(text_12);
  Q6_2Components.push(text_13);
  Q6_2Components.push(text_14);
  
  for (const thisComponent of Q6_2Components)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}


function Q6_2RoutineEachFrame() {
  //------Loop for each frame of Routine 'Q6_2'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = Q6_2Clock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // display text for question 6
  if (t >= 0.0 && text_8.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    text_8.tStart = t;  // (not accounting for frame time here)
    text_8.frameNStart = frameN;  // exact frame index
    text_8.setAutoDraw(true);
  }

  
  // display Very Unlikely, Neutral, Very Likely
  if (t >= 0.0 && text_12.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    text_12.tStart = t;  // (not accounting for frame time here)
    text_12.frameNStart = frameN;  // exact frame index
    text_12.setAutoDraw(true);
  }

  if (t >= 0.0 && text_13.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    text_13.tStart = t;  // (not accounting for frame time here)
    text_13.frameNStart = frameN;  // exact frame index
    text_13.setAutoDraw(true);
  }

  if (t >= 0.0 && text_14.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    text_14.tStart = t;  // (not accounting for frame time here)
    text_14.frameNStart = frameN;  // exact frame index
    text_14.setAutoDraw(true);
  }
  
//   display rating scale
  if (t >= 0.0 && slider6.status === PsychoJS.Status.NOT_STARTED) {
    slider6.tStart = t;
    slider6.frameNStart = frameN;
    slider6.setAutoDraw(true);
  }

// let them press enter to record answer
  if (t >= 0.0 && slideKeys6.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    slideKeys6.tStart = t;  // (not accounting for frame time here)
    slideKeys6.frameNStart = frameN;  // exact frame index
    slideKeys6.status = PsychoJS.Status.STARTED;
    // keyboard checking is just starting
    psychoJS.window.callOnFlip(function() { slideKeys6.clock.reset(); }); // t = 0 on screen flip
    psychoJS.eventManager.clearEvents({eventType:'keyboard'});
  }



  if (slideKeys6.status === PsychoJS.Status.STARTED) {
    let theseKeys = psychoJS.eventManager.getKeys({keyList:['return']});
    
    if (theseKeys.indexOf('escape') > -1) {
      psychoJS.experiment.experimentEnded = true;
    }
    
    if (theseKeys.length > 0) {  // at least one key was pressed
      slideKeys6.keys = theseKeys[theseKeys.length-1];  // just the last key pressed
      slideKeys6.rt = slideKeys6.clock.getTime();
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
  for (const thisComponent of Q6_2Components)
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


function Q6_2RoutineEnd() {
  //------Ending Routine 'Q6_2'-------
  for (const thisComponent of Q6_2Components) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  // get data
  psychoJS.experiment.addData('slider6.response', slider6.getRating());
  psychoJS.experiment.addData('slider6.rt', slider6.getRT());
  
//   check for no response
  if (slideKeys6.keys === undefined || slideKeys6.keys.length === 0) {   
    slideKeys6.keys = undefined;
  }

  if (typeof slideKeys6.keys !== 'undefined') {  
    psychoJS.experiment.addData('slideKeys6.rt', slideKeys6.rt);
    routineTimer.reset();
  }

  
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
  Q7Components.push(slideKeys7);
  Q7Components.push(slider7);
  Q7Components.push(slider7Clock);
  Q7Components.push(text_15);
  Q7Components.push(text_16);
  Q7Components.push(text_17);
  
  for (const thisComponent of Q7Components)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}


function Q7RoutineEachFrame() {
  //------Loop for each frame of Routine 'Q7'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = Q7Clock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // display text for Question 7
  if (t >= 0.0 && text_9.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    text_9.tStart = t;  // (not accounting for frame time here)
    text_9.frameNStart = frameN;  // exact frame index
    text_9.setAutoDraw(true);
  }

  // display Very Unlikely, Neutral, Very Likely
  if (t >= 0.0 && text_15.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    text_15.tStart = t;  // (not accounting for frame time here)
    text_15.frameNStart = frameN;  // exact frame index
    text_15.setAutoDraw(true);
  }

  if (t >= 0.0 && text_16.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    text_16.tStart = t;  // (not accounting for frame time here)
    text_16.frameNStart = frameN;  // exact frame index
    text_16.setAutoDraw(true);
  }

  if (t >= 0.0 && text_17.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    text_17.tStart = t;  // (not accounting for frame time here)
    text_17.frameNStart = frameN;  // exact frame index
    text_17.setAutoDraw(true);
  }
  
//   display rating scale
  if (t >= 0.0 && slider7.status === PsychoJS.Status.NOT_STARTED) {
    slider7.tStart = t;
    slider7.frameNStart = frameN;
    slider7.setAutoDraw(true);
  }

// let them press enter to record answer
  if (t >= 0.0 && slideKeys7.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    slideKeys7.tStart = t;  // (not accounting for frame time here)
    slideKeys7.frameNStart = frameN;  // exact frame index
    slideKeys7.status = PsychoJS.Status.STARTED;
    // keyboard checking is just starting
    psychoJS.window.callOnFlip(function() { slideKeys7.clock.reset(); }); // t = 0 on screen flip
    psychoJS.eventManager.clearEvents({eventType:'keyboard'});
  }



  if (slideKeys7.status === PsychoJS.Status.STARTED) {
    let theseKeys = psychoJS.eventManager.getKeys({keyList:['return']});
    
    if (theseKeys.indexOf('escape') > -1) {
      psychoJS.experiment.experimentEnded = true;
    }
    
    if (theseKeys.length > 0) {  // at least one key was pressed
      slideKeys7.keys = theseKeys[theseKeys.length-1];  // just the last key pressed
      slideKeys7.rt = slideKeys7.clock.getTime();
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
  for (const thisComponent of Q7Components)
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


function Q7RoutineEnd() {
  //------Ending Routine 'Q7'-------
  for (const thisComponent of Q7Components) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  // add data
  psychoJS.experiment.addData('slider7.response', slider7.getRating());
  psychoJS.experiment.addData('slider7.rt', slider7.getRT());
//   check for no response
  if (slideKeys7.keys === undefined || slideKeys7.keys.length === 0) {   
    slideKeys7.keys = undefined;
  }

  if (typeof slideKeys7.keys !== 'undefined') {  
    psychoJS.experiment.addData('slideKeys7.rt', slideKeys7.rt);
    routineTimer.reset();
  }

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
  q8Components.push(slideKeys8);
  q8Components.push(slider8);
  q8Components.push(text_18);
  q8Components.push(text_19);
  q8Components.push(text_20);
  q8Components.push(slider8Clock);
  
  
  for (const thisComponent of q8Components)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}


function q8RoutineEachFrame() {
  //------Loop for each frame of Routine 'q8'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = q8Clock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // display text for question 8
  if (t >= 0.0 && text_10.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    text_10.tStart = t;  // (not accounting for frame time here)
    text_10.frameNStart = frameN;  // exact frame index
    text_10.setAutoDraw(true);
  }

  
  // display Very Unlikely, Neutral, Very Likely
  if (t >= 0.0 && text_18.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    text_18.tStart = t;  // (not accounting for frame time here)
    text_18.frameNStart = frameN;  // exact frame index
    text_18.setAutoDraw(true);
  }

  if (t >= 0.0 && text_19.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    text_19.tStart = t;  // (not accounting for frame time here)
    text_19.frameNStart = frameN;  // exact frame index
    text_19.setAutoDraw(true);
  }

  if (t >= 0.0 && text_20.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    text_20.tStart = t;  // (not accounting for frame time here)
    text_20.frameNStart = frameN;  // exact frame index
    text_20.setAutoDraw(true);
  }
  
//   display rating scale
  if (t >= 0.0 && slider8.status === PsychoJS.Status.NOT_STARTED) {
    slider8.tStart = t;
    slider8.frameNStart = frameN;
    slider8.setAutoDraw(true);
  }

// let them press enter to record answer
  if (t >= 0.0 && slideKeys8.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    slideKeys8.tStart = t;  // (not accounting for frame time here)
    slideKeys8.frameNStart = frameN;  // exact frame index
    slideKeys8.status = PsychoJS.Status.STARTED;
    // keyboard checking is just starting
    psychoJS.window.callOnFlip(function() { slideKeys8.clock.reset(); }); // t = 0 on screen flip
    psychoJS.eventManager.clearEvents({eventType:'keyboard'});
  }



  if (slideKeys8.status === PsychoJS.Status.STARTED) {
    let theseKeys = psychoJS.eventManager.getKeys({keyList:['return']});
    
    if (theseKeys.indexOf('escape') > -1) {
      psychoJS.experiment.experimentEnded = true;
    }
    
    if (theseKeys.length > 0) {  // at least one key was pressed
      slideKeys8.keys = theseKeys[theseKeys.length-1];  // just the last key pressed
      slideKeys8.rt = slideKeys8.clock.getTime();
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
  for (const thisComponent of q8Components)
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


function q8RoutineEnd() {
  //------Ending Routine 'q8'-------
  for (const thisComponent of q8Components) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  // add data
  psychoJS.experiment.addData('slider8.response', slider8.getRating());
  psychoJS.experiment.addData('slider8.rt', slider8.getRT());

// check for no response
  if (slideKeys8.keys === undefined || slideKeys8.keys.length === 0) {    // No response was made
      slideKeys8.keys = undefined;
  }

  if (typeof slideKeys8.keys !== 'undefined') {  // we had a response
      psychoJS.experiment.addData('slideKeys8.rt', slideKeys8.rt);
      routineTimer.reset();
  }
  
  // the Routine "End" was not non-slip safe, so reset the non-slip timer
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
  q9Components.push(slideKeys9);
  q9Components.push(slider9);
  q9Components.push(text_21);
  q9Components.push(text_22);
  q9Components.push(text_23);
  q9Components.push(slider9Clock);
  
  for (const thisComponent of q9Components)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}


function q9RoutineEachFrame() {
  //------Loop for each frame of Routine 'q9'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = q9Clock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // display text for question 9
  if (t >= 0.0 && text_11.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    text_11.tStart = t;  // (not accounting for frame time here)
    text_11.frameNStart = frameN;  // exact frame index
    text_11.setAutoDraw(true);
  }

// display Very Unlikely, Neutral, Very Likely
  if (t >= 0.0 && text_21.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    text_21.tStart = t;  // (not accounting for frame time here)
    text_21.frameNStart = frameN;  // exact frame index
    text_21.setAutoDraw(true);
  }

  if (t >= 0.0 && text_22.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    text_22.tStart = t;  // (not accounting for frame time here)
    text_22.frameNStart = frameN;  // exact frame index
    text_22.setAutoDraw(true);
  }

  if (t >= 0.0 && text_23.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    text_23.tStart = t;  // (not accounting for frame time here)
    text_23.frameNStart = frameN;  // exact frame index
    text_23.setAutoDraw(true);
  }
  
//   display rating scale
  if (t >= 0.0 && slider9.status === PsychoJS.Status.NOT_STARTED) {
    slider9.tStart = t;
    slider9.frameNStart = frameN;
    slider9.setAutoDraw(true);
  }

// let them press enter to record answer
  if (t >= 0.0 && slideKeys9.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    slideKeys9.tStart = t;  // (not accounting for frame time here)
    slideKeys9.frameNStart = frameN;  // exact frame index
    slideKeys9.status = PsychoJS.Status.STARTED;
    // keyboard checking is just starting
    psychoJS.window.callOnFlip(function() { slideKeys9.clock.reset(); }); // t = 0 on screen flip
    psychoJS.eventManager.clearEvents({eventType:'keyboard'});
  }

  if (slideKeys9.status === PsychoJS.Status.STARTED) {
    let theseKeys = psychoJS.eventManager.getKeys({keyList:['return']});
    
    if (theseKeys.indexOf('escape') > -1) {
      psychoJS.experiment.experimentEnded = true;
    }
    
    if (theseKeys.length > 0) {  // at least one key was pressed
      slideKeys9.keys = theseKeys[theseKeys.length-1];  // just the last key pressed
      slideKeys9.rt = slideKeys.clock.getTime();
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
  for (const thisComponent of q9Components)
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


function q9RoutineEnd() {
  //------Ending Routine 'q9'-------
  for (const thisComponent of q9Components) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  // get data
  psychoJS.experiment.addData('slider9.response', slider9.getRating());
  psychoJS.experiment.addData('slider9.rt', slider9.getRT()); 
  
//   check for no answer
  if (slideKeys9.keys === undefined || slideKeys9.keys.length === 0) {   
    slideKeys9.keys = undefined;
  }

  if (typeof slideKeys9.keys !== 'undefined') {  
    psychoJS.experiment.addData('slideKeys9.rt', slideKeys9.rt);
    routineTimer.reset();
  }

  
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
  Q5Components.push(slideKeys5);
  Q5Components.push(slider5);
  Q5Components.push(slider5Clock);
  Q5Components.push(scale_1);
  Q5Components.push(text_5);
  Q5Components.push(text_6);
  for (const thisComponent of Q5Components)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}


function Q5RoutineEachFrame() {
  //------Loop for each frame of Routine 'Q5'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = Q5Clock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // display text for question 5
  if (t >= 0.0 && Question5.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    Question5.tStart = t;  // (not accounting for frame time here)
    Question5.frameNStart = frameN;  // exact frame index
    Question5.setAutoDraw(true);
  }

  
// display Very Unlikely, Neutral, Very Likely
  if (t >= 0.0 && scale_1.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    scale_1.tStart = t;  // (not accounting for frame time here)
    scale_1.frameNStart = frameN;  // exact frame index
    scale_1.setAutoDraw(true);
  }

  if (t >= 0.0 && text_5.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    text_5.tStart = t;  // (not accounting for frame time here)
    text_5.frameNStart = frameN;  // exact frame index
    text_5.setAutoDraw(true);
  }

  if (t >= 0.0 && text_6.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    text_6.tStart = t;  // (not accounting for frame time here)
    text_6.frameNStart = frameN;  // exact frame index
    text_6.setAutoDraw(true);
  }
  
//   display rating scale
  if (t >= 0.0 && slider5.status === PsychoJS.Status.NOT_STARTED) {
    slider5.tStart = t;
    slider5.frameNStart = frameN;
    slider5.setAutoDraw(true);
  }

// let them press enter to record answer
  if (t >= 0.0 && slideKeys5.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    slideKeys5.tStart = t;  // (not accounting for frame time here)
    slideKeys5.frameNStart = frameN;  // exact frame index
    slideKeys5.status = PsychoJS.Status.STARTED;
    // keyboard checking is just starting
    psychoJS.window.callOnFlip(function() { slideKeys.clock.reset(); }); // t = 0 on screen flip
    psychoJS.eventManager.clearEvents({eventType:'keyboard'});
  }



  if (slideKeys5.status === PsychoJS.Status.STARTED) {
    let theseKeys = psychoJS.eventManager.getKeys({keyList:['return']});
    
    if (theseKeys.indexOf('escape') > -1) {
      psychoJS.experiment.experimentEnded = true;
    }
    
    if (theseKeys.length > 0) {  // at least one key was pressed
      slideKeys5.keys = theseKeys[theseKeys.length-1];  // just the last key pressed
      slideKeys5.rt = slideKeys5.clock.getTime();
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
  for (const thisComponent of Q5Components)
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


function Q5RoutineEnd() {
  //------Ending Routine 'Q5'-------
  for (const thisComponent of Q5Components) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  // get data
  psychoJS.experiment.addData('slider5.response', slider5.getRating());
  psychoJS.experiment.addData('slider5.rt', slider5.getRT());
//   check for no response
  if (slideKeys5.keys === undefined || slideKeys5.keys.length === 0) {   
    slideKeys5.keys = undefined;
  }
  
  if (typeof slideKeys5.keys !== 'undefined') {  
    psychoJS.experiment.addData('slideKeys5.rt', slideKeys5.rt);
    routineTimer.reset();
  }

  
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

var endingCodeComponents;
var endResponse;
function endingCodeRoutineBegin() {
  //------Prepare to start Routine 'endingCode'-------
  t = 0;
  trialClock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
  endResponse = new core.BuilderKeyResponse(psychoJS);
  
  // keep track of which components have finished
  endingCodeComponents = [];
  endingCodeComponents.push(endCode);
  endingCodeComponents.push(endingCodeClock);
  endingCodeComponents.push(endResponse);
  
  for (const thisComponent of trialComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}

function endingCodeRoutineEachFrame() {
  //------Loop for each frame of Routine 'endingCode'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = endingCodeClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *Instructions* updates
  if (t >= 0.0 && endCode.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    endCode.tStart = t;  // (not accounting for frame time here)
    endCode.frameNStart = frameN;  // exact frame index
    endCode.setAutoDraw(true);
  }

  // *response* updates
  if (t >= 0.0 && endResponse.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    endResponse.tStart = t;  // (not accounting for frame time here)
    endResponse.frameNStart = frameN;  // exact frame index
    endResponse.status = PsychoJS.Status.STARTED;
    // keyboard checking is just starting
    psychoJS.window.callOnFlip(function() { endResponse.clock.reset(); }); // t = 0 on screen flip
    psychoJS.eventManager.clearEvents({eventType:'keyboard'});
  }

  if (endResponse.status == PsychoJS.Status.STARTED) {
    let theseKeys = psychoJS.eventManager.getKeys({keyList:['space']});
    
    // check for quit:
    if (theseKeys.indexOf('escape') > -1) {
      psychoJS.experiment.experimentEnded = true;
    }
    
    if (theseKeys.length > 0) {  // at least one key was pressed
      endResponse.keys = theseKeys[theseKeys.length-1];  // just the last key pressed
      endResponse.rt = endResponse.clock.getTime();
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


function endingCodeRoutineEnd() {
  //------Ending Routine 'trial'-------
  for (const thisComponent of endingCodeComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  
  // check responses
  if (endResponse.keys === undefined || endResponse.keys.length === 0) {    // No response was made
      endResponse.keys = undefined;
  }
  
  psychoJS.experiment.addData('endResponse.keys', endResponse.keys);
  if (typeof endResponse.keys !== 'undefined') {  // we had a response
      psychoJS.experiment.addData('endResponse.rt', endResponse.rt);
      routineTimer.reset();
      }
  
  // the Routine "trial" was not non-slip safe, so reset the non-slip timer
  routineTimer.reset();
  
  return Scheduler.Event.NEXT;
}

function quitPsychoJS(message, isCompleted) {
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});

  return Scheduler.Event.QUIT;
}
