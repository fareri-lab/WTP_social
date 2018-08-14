###SRNDNA
###wtp part two

from psychopy import visual, core, event, gui, data, logging
import csv
import datetime
import random
import numpy
import os
import sys
#import pandas as pd
#from pandas import Timestamp, DataFrame


#parameters
useFullScreen = False
DEBUG = False
frame_rate=1
decision_dur=4
outcome_dur=1
responseKeys=('space', 'enter', 'escape')

#subject ID
subjDlg=gui.Dlg(title="Making Social Preferences")
subjDlg.addField('Enter Subject ID: ')
subjDlg.addField('Enter Age: ') 
subjDlg.addField('Enter Gender: ')

subjDlg.show()

if gui.OK:
    subj_id=subjDlg.data[0]
    subj_age=subjDlg.data[1]
    subj_gender=subjDlg.data[2]
else:
    sys.exit()

run_data = {
    'Participant ID': subj_id,
    'Date': str(datetime.datetime.now()),
    'Participant Gender': subj_gender,
    'Participant Age': subj_age,
    'Description': 'SRNDNA Pilot - Making Social Preferences'
    }

#first screen
win = visual.Window(size=(1920,1080), pos=None, color=(0,0,0))
instruct_screen = visual.TextStim(win, text='Please indicate how much money you would be willing to spend on the following experiences', pos = (0,0), units='norm', height = 0.1)

#text
choiceStim = visual.TextStim(win, font='Arial', pos = (0,0.1), units='norm', height = 0.1)

#last screen
exit_screen = visual.TextStim(win, text='Thank you for participating!', pos = (0,0), units='norm', height = 0.1)


#logging
expdir = os.getcwd()
subjdir = '%s/logs/%s' % (expdir, subj_id)
if not os.path.exists(subjdir):
    os.makedirs(subjdir)
log_file = os.path.join(subjdir,'sub{}_task-wtp5socialpreferences.csv')
trial_data = [r for r in csv.DictReader(open('Experiences3.csv','rU'))]
trials = data.TrialHandler(trial_data[:], 1, method="sequential", extraInfo={'participant' : "1", 'session' :"001", })
#for trial in trials:
 #   experiences = trial['Experiences']
  #  position = trial['Position']
    


#clock
globalClock = core.Clock()
logging.setDefaultClock(globalClock)
timer = core.Clock()


#main task
#instructions
instruct_screen.draw()
win.flip()
event.waitKeys(keyList=('space'))
for trial in trials:
    experiences = trial['Experiences']
    position = trial['Position']
    choiceStim.setText(experiences)
    fileName=log_file.format(subj_id)
    # rating scale
    scale = visual.RatingScale(win, low=0, high=.99, size=2, tickMarks=['0','.99'],
    markerStart='.50', marker='triangle', textSize=.5, showValue=True, 
    showAccept=True, noMouse=True, maxTime = 0.0, respKeys = 'enter', pos = (0, position))
    
    resp=[]
    resp_val=None
    resp_onset=None

    trial_onset = globalClock.getTime()
    while scale.noResponse:
        scale.draw()
        choiceStim.draw()
        win.flip()

        resp = event.getKeys(keyList = responseKeys)

        if len(resp)>0:
            if resp[0] == 'escape':
                trials.addData('Rating', scale.getRating())
                os.chdir(subjdir)
                trials.saveAsWideText(fileName)
                os.chdir(expdir)
                win.close()
                core.quit()


    trials.addData('Rating', scale.getRating())
    trials.addData('rt', scale.getRT())


os.chdir(subjdir)
trials.saveAsWideText(fileName)
os.chdir(expdir)

#last screen
exit_screen.draw()
win.flip()
event.waitKeys()