# WorkspaceMonitorSystem


This project aims at providing healthy remote working space to employees by monitoring their application usage time. 

This project is an amalgamation of the following themes:
* Remote Work
* Tech and Health
* Creating awareness

---
 
## The idea behind this project:
#### As remote working is a new culture, we might have challenges like
1. Sitting in one posture for long durations.
2. Working or interaction with many applications in a day. 
3. Spending too much time in front of a computer can be stressful and demotivating at times. Plus it affects one's productivity too.
4. End-user like a Manager can monitor how his/her employees are spending time on their computers. What apps are they using too much? For example, if someone is wasting too much work time on Facebook/Instagram/YouTube too much or if somebody is dedicating too much time on VS Code/ Eclipse.

---

## Realtime usage of this project:
1. Monitoring of all the applications a user spends time on their computer.
2. Sending desktop notifications on a timely basis when user spends a little too much time on a particular application.
3. Help the users to keep track of time spent on apps and plan their work accordingly.

---

## Technical details:

#### Technologies used
* Python3.5+
* React
* Firebase

#### Software used
* VSCode
* Github Desktop

#### How does this program work?

1. This project has an important file called `autotimer.py`, which on executing tracks down all the applications we use. Literally **EVERY** application you use.
2. It has been programmed to monitor the applications every 1 second and save the application's name as JSON object in a file called `activities.JSON` along with timestamp.
3. When we mean tracking application, just imagine,  using Skype, VS Code, Telegram or a browser, it will make entries of every application with the application's name along with the start and end timestamp. It also does monitors every title of the application.
4. The JSON data file will have data of the activities about the application or tab name, timestamp (including start and end time), the username of currently logged-in user.
5. The username here is essential, because, when multiple users log in to the same machine, then we can have entries of every user who spent time on applications in the same JSON file. Also, if one intends to generate a report saying which all users spent how much time on every application they used, it will easier to filter based on the user. 
6. We have a firebase integration made to the project where we can get the report and statistical analysis of the data generated based on the JSON data produced.
7. Currently, if a user spends more than 10 minutes on a particular application, then a push notification is sent.

---


## Steps to run this program: 
1. This project has three important files
  * `startup.py`
  * `autotimer.py`
  * `linux.py`

2. To run this program all you need to do is just run
 ```
 python startup.py
 ```
 That's it!
  * It will install the required packages
  * It will run autotimer.py and it simply starts tracking all the applications we use and save the details as JSON object in `activities.json`

3. Finally, you can view your data on [THIS DASHBOARD](https://activity-dashboard.harsha-iiiv1.vercel.app/)

---   

## Future scope:
1. We need to be able to make customization settings for the app we need to be notified of, if we spend more time on it. For instance, if a developer is working on VS Code all day, he shouldn't be notified of that saying he spent too much on it. Because it wouldn't make sense, as for a developer it is the application which he spends almost his entire day. In short, a DND feature for some apps.
2. The user should be rewarded for dedication. For instance, say, a Manager uses the report and notices one of his team members is spent most of his time with VS Code (which means he was working) then he can be rewarded with points. Or say, Manager notices one of his team members has spent most of his time on Facebook, then he can warn them.
3. Categorical segregation of notifications. 'Good job' for spending more time on VSCode, 'Please get back to work' for spending time on Facebook and 'Kindly take some rest' for working continuously.
4. Do statistical analysis, build visualizations and plots for simple understaning based on the JSON data.
5. Limiting number of data entries in the firebase.
6. Admin Authentication to monitor the data.

---

## Made by: Team Hungry Noobs
[Pradeep Pradyumna](https://github.com/pradeepradyumna), [Kunal Rustagi](https://github.com/kunalrustagi08), [Harshavardhan Surisetty](https://github.com/harsha-iiiv) and [Shivam Sherkar](https://github.com/shivamsherkar23)

---

## References:
We made customizations on this original codebase that we found here - https://github.com/KalleHallden/AutoTimer 
