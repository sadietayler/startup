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

