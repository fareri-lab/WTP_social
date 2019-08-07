#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v3.0.7),
    on August 05, 2019, at 13:17
If you publish work using this script please cite the PsychoPy publications:
    Peirce, JW (2007) PsychoPy - Psychophysics software in Python.
        Journal of Neuroscience Methods, 162(1-2), 8-13.
    Peirce, JW (2009) Generating stimuli for neuroscience using PsychoPy.
        Frontiers in Neuroinformatics, 2:10. doi: 10.3389/neuro.11.010.2008
"""

from __future__ import absolute_import, division
from psychopy import locale_setup, sound, gui, visual, core, data, event, logging, clock
from psychopy.constants import (NOT_STARTED, STARTED, PLAYING, PAUSED,
                                STOPPED, FINISHED, PRESSED, RELEASED, FOREVER)
import numpy as np  # whole numpy lib is available, prepend 'np.'
from numpy import (sin, cos, tan, log, log10, pi, average,
                   sqrt, std, deg2rad, rad2deg, linspace, asarray)
from numpy.random import random, randint, normal, shuffle
import os  # handy system and path functions
import sys  # to get file system encoding


# Ensure that relative paths start from the same directory as this script
_thisDir = os.path.dirname(os.path.abspath(__file__))
os.chdir(_thisDir)

# Store info about the experiment session
psychopyVersion = '3.0.7'
expName = 'newer wtp'  # from the Builder filename that created this script
expInfo = {'participant': '', 'session': '001'}
dlg = gui.DlgFromDict(dictionary=expInfo, title=expName)
if dlg.OK == False:
    core.quit()  # user pressed cancel
expInfo['date'] = data.getDateStr()  # add a simple timestamp
expInfo['expName'] = expName
expInfo['psychopyVersion'] = psychopyVersion

# Data file name stem = absolute path + name; later add .psyexp, .csv, .log, etc
filename = _thisDir + os.sep + u'data/%s_%s_%s' % (expInfo['participant'], expName, expInfo['date'])

# An ExperimentHandler isn't essential but helps with data saving
thisExp = data.ExperimentHandler(name=expName, version='',
    extraInfo=expInfo, runtimeInfo=None,
    originPath='C:\\Users\\Jojo\\Downloads\\GitHub\\WTP_social\\Psychopy Tasks\\example_wtp_lastrun.py',
    savePickle=True, saveWideText=True,
    dataFileName=filename)
# save a log file for detail verbose info
logFile = logging.LogFile(filename+'.log', level=logging.EXP)
logging.console.setLevel(logging.WARNING)  # this outputs to the screen, not a file

endExpNow = False  # flag for 'escape' or other condition => quit the exp

# Start Code - component code to be run before the window creation

# Setup the Window
win = visual.Window(
    size=(1024, 768), fullscr=True, screen=0,
    allowGUI=True, allowStencil=False,
    monitor='testMonitor', color=[0,0,0], colorSpace='rgb',
    blendMode='avg', useFBO=True)
# store frame rate of monitor if we can measure it
expInfo['frameRate'] = win.getActualFrameRate()
if expInfo['frameRate'] != None:
    frameDur = 1.0 / round(expInfo['frameRate'])
else:
    frameDur = 1.0 / 60.0  # could not measure, so guess

# Initialize components for Routine "trial"
trialClock = core.Clock()
Instructions = visual.TextStim(win=win, name='Instructions',
    text='In this part of the task, you will be \nchoosing between two options.\n\nPress the spacebar to start!\n',
    font='Arial',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);

# Initialize components for Routine "Choice"
ChoiceClock = core.Clock()
leftbox = visual.TextStim(win=win, name='leftbox',
    text='default text',
    font='Times New Roman',
    pos=(0.5, 0.1), height=0.094, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
rightbox = visual.TextStim(win=win, name='rightbox',
    text='default text',
    font='Times New Roman',
    pos=(-0.5, 0.1), height=0.094, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-1.0);
money1 = visual.TextStim(win=win, name='money1',
    text='default text',
    font='Arial',
    pos=(0.5, -0.5), height=0.1, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-3.0);
money2 = visual.TextStim(win=win, name='money2',
    text='default text',
    font='Arial',
    pos=(-0.5, -0.5), height=0.1, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-4.0);
blank = visual.TextStim(win=win, name='blank',
    text=None,
    font='Arial',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-6.0);

# Initialize components for Routine "ISI"
ISIClock = core.Clock()
text_3 = visual.TextStim(win=win, name='text_3',
    text='+',
    font='Arial',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);

# Create some handy timers
globalClock = core.Clock()  # to track the time since experiment started
routineTimer = core.CountdownTimer()  # to track time remaining of each (non-slip) routine 

# ------Prepare to start Routine "trial"-------
t = 0
trialClock.reset()  # clock
frameN = -1
continueRoutine = True
# update component parameters for each repeat
spacebar = event.BuilderKeyResponse()
# keep track of which components have finished
trialComponents = [Instructions, spacebar]
for thisComponent in trialComponents:
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED

# -------Start Routine "trial"-------
while continueRoutine:
    # get current time
    t = trialClock.getTime()
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *Instructions* updates
    if t >= 0.0 and Instructions.status == NOT_STARTED:
        # keep track of start time/frame for later
        Instructions.tStart = t
        Instructions.frameNStart = frameN  # exact frame index
        Instructions.setAutoDraw(True)
    
    # *spacebar* updates
    if t >= 0.0 and spacebar.status == NOT_STARTED:
        # keep track of start time/frame for later
        spacebar.tStart = t
        spacebar.frameNStart = frameN  # exact frame index
        spacebar.status = STARTED
        # keyboard checking is just starting
        win.callOnFlip(spacebar.clock.reset)  # t=0 on next screen flip
        event.clearEvents(eventType='keyboard')
    if spacebar.status == STARTED:
        theseKeys = event.getKeys(keyList=['space'])
        
        # check for quit:
        if "escape" in theseKeys:
            endExpNow = True
        if len(theseKeys) > 0:  # at least one key was pressed
            spacebar.keys = theseKeys[-1]  # just the last key pressed
            spacebar.rt = spacebar.clock.getTime()
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or event.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in trialComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "trial"-------
for thisComponent in trialComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# check responses
if spacebar.keys in ['', [], None]:  # No response was made
    spacebar.keys=None
thisExp.addData('spacebar.keys',spacebar.keys)
if spacebar.keys != None:  # we had a response
    thisExp.addData('spacebar.rt', spacebar.rt)
thisExp.nextEntry()
# the Routine "trial" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
Loop = data.TrialHandler(nReps=1, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('Examples\\Activities1_DF2.xlsx'),
    seed=None, name='Loop')
thisExp.addLoop(Loop)  # add the loop to the experiment
thisLoop = Loop.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisLoop.rgb)
if thisLoop != None:
    for paramName in thisLoop:
        exec('{} = thisLoop[paramName]'.format(paramName))

for thisLoop in Loop:
    currentLoop = Loop
    # abbreviate parameter names if possible (e.g. rgb = thisLoop.rgb)
    if thisLoop != None:
        for paramName in thisLoop:
            exec('{} = thisLoop[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "Choice"-------
    t = 0
    ChoiceClock.reset()  # clock
    frameN = -1
    continueRoutine = True
    # update component parameters for each repeat
    leftbox.setText(LeftEx)
    rightbox.setText(RightEx)
    responses = event.BuilderKeyResponse()
    money1.setText(LMoneyEx)
    money2.setText(RMoneyEx)
    border_right = visual.Circle(win,radius = 0.4, edges = 90,lineColor='green',lineColorSpace = 'rgb', fillColor = None, pos = (0.5, 0.1), opacity = 1)
    border_left = visual.Circle(win,radius = 0.4, edges = 90,lineColor='green',lineColorSpace = 'rgb', fillColor = None, pos = (-0.5, 0.1), opacity = 1)
    
    blank.setText('')
    # keep track of which components have finished
    ChoiceComponents = [leftbox, rightbox, responses, money1, money2, blank]
    for thisComponent in ChoiceComponents:
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    
    # -------Start Routine "Choice"-------
    while continueRoutine:
        # get current time
        t = ChoiceClock.getTime()
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *leftbox* updates
        if t >= 0.0 and leftbox.status == NOT_STARTED:
            # keep track of start time/frame for later
            leftbox.tStart = t
            leftbox.frameNStart = frameN  # exact frame index
            leftbox.setAutoDraw(True)
        frameRemains = 0.0 + 4.0- win.monitorFramePeriod * 0.75  # most of one frame period left
        if leftbox.status == STARTED and t >= frameRemains:
            leftbox.setAutoDraw(False)
        
        # *rightbox* updates
        if t >= 0.0 and rightbox.status == NOT_STARTED:
            # keep track of start time/frame for later
            rightbox.tStart = t
            rightbox.frameNStart = frameN  # exact frame index
            rightbox.setAutoDraw(True)
        frameRemains = 0.0 + 4.0- win.monitorFramePeriod * 0.75  # most of one frame period left
        if rightbox.status == STARTED and t >= frameRemains:
            rightbox.setAutoDraw(False)
        
        # *responses* updates
        if t >= 0.0 and responses.status == NOT_STARTED:
            # keep track of start time/frame for later
            responses.tStart = t
            responses.frameNStart = frameN  # exact frame index
            responses.status = STARTED
            # keyboard checking is just starting
            win.callOnFlip(responses.clock.reset)  # t=0 on next screen flip
            event.clearEvents(eventType='keyboard')
        frameRemains = 0.0 + 4.0- win.monitorFramePeriod * 0.75  # most of one frame period left
        if responses.status == STARTED and t >= frameRemains:
            responses.status = FINISHED
        if responses.status == STARTED:
            theseKeys = event.getKeys(keyList=['1', '2'])
            
            # check for quit:
            if "escape" in theseKeys:
                endExpNow = True
            if len(theseKeys) > 0:  # at least one key was pressed
                responses.keys = theseKeys[-1]  # just the last key pressed
                responses.rt = responses.clock.getTime()
        
        # *money1* updates
        if t >= 0.0 and money1.status == NOT_STARTED:
            # keep track of start time/frame for later
            money1.tStart = t
            money1.frameNStart = frameN  # exact frame index
            money1.setAutoDraw(True)
        frameRemains = 0.0 + 4.0- win.monitorFramePeriod * 0.75  # most of one frame period left
        if money1.status == STARTED and t >= frameRemains:
            money1.setAutoDraw(False)
        
        # *money2* updates
        if t >= 0.0 and money2.status == NOT_STARTED:
            # keep track of start time/frame for later
            money2.tStart = t
            money2.frameNStart = frameN  # exact frame index
            money2.setAutoDraw(True)
        frameRemains = 0.0 + 4.0- win.monitorFramePeriod * 0.75  # most of one frame period left
        if money2.status == STARTED and t >= frameRemains:
            money2.setAutoDraw(False)
        if responses.keys == '1':
            border_left.autoDraw=True
        
        if responses.keys =='2':
            border_right.autoDraw=True
        
        if money1.status == FINISHED:
            border_left.autoDraw = False
        
        if money2.status==FINISHED:
            border_right.autoDraw = False
        
        # *blank* updates
        if (border_right. autoDraw==False) and blank.status == NOT_STARTED:
            # keep track of start time/frame for later
            blank.tStart = t
            blank.frameNStart = frameN  # exact frame index
            blank.setAutoDraw(True)
        if blank.status == STARTED and t >= (blank.tStart + 1.0):
            blank.setAutoDraw(False)
        
        # check for quit (typically the Esc key)
        if endExpNow or event.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in ChoiceComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "Choice"-------
    for thisComponent in ChoiceComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # check responses
    if responses.keys in ['', [], None]:  # No response was made
        responses.keys=None
    Loop.addData('responses.keys',responses.keys)
    if responses.keys != None:  # we had a response
        Loop.addData('responses.rt', responses.rt)
    # the Routine "Choice" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # ------Prepare to start Routine "ISI"-------
    t = 0
    ISIClock.reset()  # clock
    frameN = -1
    continueRoutine = True
    routineTimer.add(2.000000)
    # update component parameters for each repeat
    # keep track of which components have finished
    ISIComponents = [text_3]
    for thisComponent in ISIComponents:
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    
    # -------Start Routine "ISI"-------
    while continueRoutine and routineTimer.getTime() > 0:
        # get current time
        t = ISIClock.getTime()
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text_3* updates
        if t >= 0.0 and text_3.status == NOT_STARTED:
            # keep track of start time/frame for later
            text_3.tStart = t
            text_3.frameNStart = frameN  # exact frame index
            text_3.setAutoDraw(True)
        frameRemains = 0.0 + 2.0- win.monitorFramePeriod * 0.75  # most of one frame period left
        if text_3.status == STARTED and t >= frameRemains:
            text_3.setAutoDraw(False)
        
        # check for quit (typically the Esc key)
        if endExpNow or event.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in ISIComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "ISI"-------
    for thisComponent in ISIComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    thisExp.nextEntry()
    
# completed 1 repeats of 'Loop'

# these shouldn't be strictly necessary (should auto-save)
thisExp.saveAsWideText(filename+'.csv')
thisExp.saveAsPickle(filename)
logging.flush()
# make sure everything is closed down
thisExp.abort()  # or data files will save again on exit
win.close()
core.quit()
