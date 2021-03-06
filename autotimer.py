from __future__ import print_function
import time
from os import system
from activity import *
import json
import datetime
import sys
import getpass
from firebase import firebase
from plyer import notification

if sys.platform in ['Windows', 'win32', 'cygwin']:
    import win32gui
    import uiautomation as auto
elif sys.platform in ['Mac', 'darwin', 'os2', 'os2emx']:
    from AppKit import NSWorkspace
    from Foundation import *
elif sys.platform in ['linux', 'linux2']:
        import linux as l

active_id = ""
active_window_name = ""
activity_name = ""
start_time = datetime.datetime.now()
activeList = AcitivyList([])
first_time = True

def get_active_id():
    _active_id = getpass.getuser()
    return _active_id

def url_to_name(url):
    string_list = url.split('/')
    return string_list[2]


def get_active_window():
    _active_window_name = None
    if sys.platform in ['Windows', 'win32', 'cygwin']:
        window = win32gui.GetForegroundWindow()
        _active_window_name = win32gui.GetWindowText(window)
    elif sys.platform in ['Mac', 'darwin', 'os2', 'os2emx']:
        _active_window_name = (NSWorkspace.sharedWorkspace()
                               .activeApplication()['NSApplicationName'])
    else:
        print("sys.platform={platform} is not supported."
              .format(platform=sys.platform))
        print(sys.version)
    return _active_window_name


def get_chrome_url():
    if sys.platform in ['Windows', 'win32', 'cygwin']:
        window = win32gui.GetForegroundWindow()
        chromeControl = auto.ControlFromHandle(window)
        edit = chromeControl.EditControl()
        return 'https://' + edit.GetValuePattern().Value
    elif sys.platform in ['Mac', 'darwin', 'os2', 'os2emx']:
        textOfMyScript = """tell app "google chrome" to get the url of the active tab of window 1"""
        s = NSAppleScript.initWithSource_(
            NSAppleScript.alloc(), textOfMyScript)
        results, err = s.executeAndReturnError_(None)
        return results.stringValue()
    else:
        print("sys.platform={platform} is not supported."
              .format(platform=sys.platform))
        print(sys.version)
    return _active_window_name

try:
    activeList.initialize_me()
except Exception:
    print('No json')


try:
    while True:
        previous_site = ""
        active_id = get_active_id()
        if sys.platform not in ['linux', 'linux2']:
            new_window_name = get_active_window()
            if 'Google Chrome' in new_window_name:
                new_window_name = url_to_name(get_chrome_url())
        if sys.platform in ['linux', 'linux2']:
            new_window_name = l.get_active_window_x()
            if 'Google Chrome' in new_window_name:
                new_window_name = l.get_chrome_url_x()

        # Add id condition
        if active_window_name != new_window_name:
            print(active_window_name)
            activity_name = active_window_name

            if not first_time:
                end_time = datetime.datetime.now()
                time_entry = TimeEntry(start_time, end_time, 0, 0, 0, 0)
                time_entry._get_specific_times()

                exists = False
                for activity in activeList.activities:
                    if activity.name == activity_name:
                        exists = True
                        activity.time_entries.append(time_entry)

                if not exists:
                    activity = Activity(active_id, activity_name, [time_entry])
                    activeList.activities.append(activity)
                
                time_delta = (end_time - start_time)
                total_seconds = time_delta.total_seconds()
                minutes = total_seconds / 60
                if minutes > 10:
                    notification.notify(
                        title='Hey there!',
                        message='You spent too much time on ' + activity_name
                        )

                with open('activities.json', 'w') as json_file:
                    app = firebase.FirebaseApplication('https://apptrack-b28fe.firebaseio.com/', None)  
                    
                      
                    data = json.dump(activeList.serialize(), json_file,
                              indent=4, sort_keys=True)
                            
                    # app.post('/Activites/',activeList.serialize()) 
                    app.put('/Activites/-MAI3y9hAq5XloWo-dVQ','activities',activeList.serialize())   
                             
                    start_time = datetime.datetime.now()
            first_time = False
            active_window_name = new_window_name

        time.sleep(1)
    
except KeyboardInterrupt:
    with open('activities.json', 'w') as json_file:
        json.dump(activeList.serialize(), json_file, indent=4, sort_keys=True)
