# Choose Your Own Adventure
This application is a simple game where players can select from different choices to advance down different paths in a storyline, like in the classic "Choose Your Own Adventure" books. 

# Specification Deliverable
## Elevator Pitch
Remember those "Choose Your Own Adventure" books you would read as a kid? This is like that, but in a website! Click or tap to select what you want to do at each juncture in the storyline, and see where your choices take you!

## Design
![fish tank design draft](https://github.com/sadietayler/startup/blob/main/cyoa.png)

## Features
- Secure login
- User's position in the storyline is persistently stored
- Users can click or tap to choose which action to take at each branch point in the storyline
- Whenever someone on the website gets to the end of the story, their username and the ending they reached are displayed on a sidebar, along with a timestamp.

## Technologies
- HTML: uses correct HTML structure. One page for the game itself, one page for login, and possibly one page to display user outcomes with timestamps.
- CSS: styling that looks good on different screen sizes, easy to read. 
- JavaScript: login, user interactivity, buttons
- Service: login, view other users' story endings
- Authentication: let users register and login.
- Database: store users and their position in the storyline 
- WebSocket: each time a user reaches an ending in the story, their username and ending pop up on the sidebar. 
- React: Application ported to use the React framework. 

# HTML Deliverable
- Three HTML pages: Home (index.html), Play, and History. Home has the login feature, Play is where you play the game and view live updates as other players reach the end of the storyline, and History is where you can view a log of all the players who finished the game, and what their ending was.
- Used HTML tags including BODY, NAV, MAIN, HEADER, FOOTER
- There is a navigation menu at the top of every page, with links to the other pages
- There is text welcoming the player and starting the story, with buttons to make your first decision
- There's an image of a cat that goes along with the story
- Input box and submit button for login, and the user's name will be displayed at the top of the Play page
- The History page has placeholder data representing the database
- The Live Updates section on the Play page shows where realtime updates using WebSocket will go.

# CSS Deliverable
- Added the 3 CSS files: main.css, play.css, and history.css
- Header, Body, and Footer elements
- Navigation elements - made the menu pretty, and it lights up whichever page you're currently on
- Responsive to window resizing - My app looks great on all window sizes and devices
- Application elements - Used good contrast and whitespace
- Application text content - Consistent fonts, which I got from Google. 
- Application images - Adjusted padding and sizing on the image

# JavaScript Deliverable

- When the user enters their name, it's saved in localstorage, and displayed on the Play page.
- When the user finishes the game, their ending is saved in an array and displayed on the History page.
- Game functionality using JavaScript was added
- Placeholder data for the realtime data using WebSocket was added, and updates every 15 seconds on the Play page.

# Service Deliverable
- Node.js/Express HTTP service - done!
- Static middleware for frontend - done!
- Calls to third party endpoints - Random dog image generator on History page
- Backend service endpoints - Placeholders for login that stores the current user on the server. Endpoint for saving the outcome, name, and timestamp every time a user finishes the game
- Frontend calls service endpoints - History page fetches game logs, and displays it. 

# DB/Login Deliverable
Users can register/login, and their credentials are stored in the database. When they finish the game, their game log is stored as well, and appears on the History page. 

- MongoDB Atlas database created - done!
- Stores data in MongoDB - done!
- User registration - Creates a new account in the database.
- Use MongoDB to store credentials - Stores the users and their game logs
- Restricts functionality - You cannot play or view the history until you have logged in.
  
# WebSocket Deliverable
For this deliverable I used WebSocket to update the live updates on the frontend in realtime, as people start and finish the game. 

- Backend listens for WebSocket connection - done!
- Frontend makes WebSocket connection - done!
- Data sent over WebSocket connection - done!
- WebSocket data displayed - Every time a user starts or ends a game, it displays in realtime. 
