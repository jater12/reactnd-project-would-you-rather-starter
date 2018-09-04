# Would You Rather? Project

## Description
This is a simple web app that keeps track of a list of users and questions from a database. The user can login and answer questions, create new questions, check their previous answers and the answers of everyone else, and see a leaderboard. All mutated state is managed by redux.

## File Structure
Components<br/>
App.js - root of the app <br/>
AnsweredPoll.js - Represents an already answered poll object <br/>
Card.js - Represents a card in the home page for all the different polls <br/>
CreateNewQuestion.js - Represents the new question page <br/>
home.js - Represents the home screen <br/>
Leaderboard.js - Represents the Leaderboard where all the ```LeaderBoardCard``` objects reside <br/>
LeaderBoardCard.js - Represents the card for each user on the Leaderboard <br/>
Nav.js - Represents the navigational bar in all the pages <br/>
NotFound.js - Represents a not found page for invalid question ids<br/>
Poll.js - Represents a Poll it will either render an ```AnsweredPoll``` or ```UnansweredPoll``` object <br/>
QuestionTable.js - Contains all the ```Poll``` objects and manages showing the unanswered and answered polls <br/>
SignIn.js - Represents the Sign In page<br/>
UnansweredPoll - Represents a poll that isn't answered yet <br/>
<br/>
Actions<br/>
authedUser - creates the action for set authed user <br/>
question - creates the action for receiving questions <br/>
shared - creates and handles the action for retrieving the initial data, creating new questions, and answering questions as all these actions require changes on both slices of user and question data<br/>
user - creates the action for the receiving users <br/>
<br/>
MiddleWare<br/>
index - applies the middleware to the redux store
logger - general logger middleware for debugging purposes
<br/>
Reducers<br/>
authedUser - reducer for the authedUser action<br/>
index - applies the reducers as well as loading bar to the redux store
question - reducer for the question actions <br/>
user - reducer for the user actions <br/>


## Installation
run ```npm install``` <br/>
run ```npm start```