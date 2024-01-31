# Choose Your Own Adventure
This application is a simple game where players can select from different choices to advance down different paths in a storyline, like in the classic "Choose Your Own Adventure" books. 

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
