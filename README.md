App.js : navigator routes user to login page initially by default

in-app screens held inside folder 'Pages'
- LoginForm.js : login page
  - user able to login as existing user or create an account
- MainPage.js : dashboard view with line graph
  - displays highest price and lowest price from the last 24 hours
  - displays current price
- MainPageGuest.js : dashboard view for guest user (no button redirecting to a profile page)
- Profile.js : profile page for the user (unable to be accessed by guests)

front-end built with React-Native

Apollo Client used to connect to the backend

GraphQL queries/mutations used to retrieve data from and manipulate
data in SQL database

app runs on port 8080

to run application : $ npm run ios

Dashboard view:
![Alt Text](https://media.giphy.com/media/l2QEcFm85vwff46D6/giphy.gif)

Login View:
![Alt Text](https://media.giphy.com/media/xT0xet5zC52cTxshe8/giphy.gif)

Profile View:
![Alt Text](https://media.giphy.com/media/3o6fJaDrdx4Dq4YKuA/giphy.gif)

Server:
![Alt Text](https://files.slack.com/files-tmb/T7B3KEG8J-F831VJ59B-4e03a9708a/backendworking_1024.jpg)
