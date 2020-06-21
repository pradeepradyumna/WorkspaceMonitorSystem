# WorkspaceMonitorSystem
 This project aims at providing healthy remote working space to employees. 
 
The idea behind this project:
As remote working is a new culture, we might have challenges like
1. We might spend more time in front of the computer
2. We might work/ interact with N applications in a day. 
3. Spending too much time in front of a computer can be stressful and demotivating at times. Plus it affects one's productivity too.
4. End-user like a Manager can monitor how employees are spending time on the computer. Like what apps are they using too much? For example, if someone using Facebook/ Instagram too much or if somebody is spending too much time in front of the VS Code/ Eclipse.

Realtime usage of this project:
1. It will monitor all the applications a user spends time on.
2. It will send Desktop notification on a timely basis when user spends a little too much time on a particular application.
3. It helps user to keep track the amount of time he/ she spends on apps and plan their work accordingly.

Technical details:

How does this program work?

1. This project has an important file called "autotimer" running which, it tracks down all the applications we use. Literally. every application you use.
2. It has been programmed to monitor the applications every 1 second and save the application's name as JSON object in a file called "activities.JSON" along with timestamp.
3. When I mean tracking application, just imagine, I'm using Skype, VS Code, Telegram or if I'm using a browser, it will make entries of every application with the application's name along with the time stamp. Like when I started and end using an application. 
  It also does monitor every chat you do on Sykpe/ Telegram/ Tabs in the browser.
4. The JSON object will have data about the application name/ tab name, timestamp (like start and end time), the username of currently logged-in user.
5. The username here is essential, because, imagine multiple users logs in to the same machine, then we can have entries of every user who spent time on applications in the same JSON file. Also, if I intend to generate a report saying which all users spent how much time on every application they used, it will easier to filter based on the user. 
6. We have a firebase integration made to the project where we can get the report and statistical analysis of the data generated based on the JSON data produced.


How to run this program? 
1. This project has three important files 
  a. startup.py
  b. autotimer.py
  c. linux.py

2. To run this program all you need to do is just run "python startup.py". That's it!
  a. It will install the required packages
  b. It will run "autotimer.py" and it simply starts tracking all the applications we use and save the details as JSON object in "activities.json"
     





