"""
This program creates a calendar that the user can interact with from the command line. It allows the user to: view the calendar, add an event to the calendar, update an existing event, delete an existing event
"""

from time import sleep, strftime, localtime

USER_NAME = "Odanga"
calendar = {}

def welcome():
  print("Welcome to MyCalendar %s") %(USER_NAME)
  print("MyCalendar is starting...")
  sleep(1)
  print("Today's date is: " + strftime("%A %B %d, %Y", localtime()))
  print("The time now is:" + strftime("%H:%M:%S", localtime()))
  sleep(1)
  print("What would you like to do?")
  
def start_calendar():
  welcome()
  start = True
  while start:
    user_choice = raw_input("Enter 'A' to Add, 'U' to Update, 'V' to View, 'D' to Delete, 'X' to Exit:")
    user_choice = user_choice.upper()
    if user_choice == "V":
      if len(calendar.keys()) < 1:
        print("Calendar is empty right now")
      else:
        print(calendar)
    elif user_choice == "U":
      date = raw_input("What date?")
      update = raw_input("Enter the update:")
      calendar[date] = update
      print("Update was successful")
      print(calendar)
    elif user_choice == "A":
      event = raw_input("Enter event:")
      date = raw_input("Enter the date(MM/DD/YYYY):")
      if len(date) > 10 or int(date[6:]) < \
      int(strftime("%Y")):
        print("The date entered was invalid")
        try_again = raw_input("Try Again? Y for Yes, N for No: ")
        try_again = try_again.upper()
        if try_again == "Y":
          continue
        else:
          start = False
      else:
        calendar[date] = event
        print("The event was successfully added")
        print(calendar)
    elif user_choice == "D":
      if len(calendar.keys()) < 1:
        print("Calendar is empty")
      else:
        event = raw_input("What event?")
        for date in calendar.keys():
          if event == calendar[date]:
            del(calendar[date])
            print("The event was successfully deleted")
            print(calendar)
          else:
            print("An incorrect event was specified")
    elif user_choice == "X":
      start = False
    else:
      print("An invalid command was entered")
      start = False
      
start_calendar()