# bored gamer
#### a board game chooser for the days you _don't_ know what to play.  
enter the live site [here](http://bored-gamer.herokuapp.com/) 

---  

![Splash Page](https://github.com/slimjim49j/bored-gamer/blob/master/readme_images/1SPLASH_IMAGE.png) 

_**bored gamer**_ will help you pick the right game for your next game night. It is built using the following: 

* **Backend:** MongoDB, Express.js, Node.js, Mongoose
* **Frontend:** React.js, Redux, Axios, SCSS
* **Hosting:** Heroku  

# Features 
**User Authentication** 

![Session Image](https://github.com/slimjim49j/bored-gamer/blob/master/readme_images/2LOGIN_IMAGE.png) 

Users can create and log in to their accounts, with validations and errors rendered as applicable. For those 
simply wanting to check out the functionality, there is a demo user option available. 

**Game Index**

![Game Index](https://github.com/slimjim49j/bored-gamer/blob/master/readme_images/3GAME_INDEX.png) 

With a lot of games to choose from, users may view all games by simply scrolling down on the main page. New games are fetched and loaded
by the time they scroll down, so they can pick a game that catches their eye. Implemented with scroll event handler and pertinent Axios calls. 

**Categories / Mechanics** 

![Category/Mechanic](https://github.com/slimjim49j/bored-gamer/blob/master/readme_images/4CATEGORY_MECHANIC.png) 

Users may sort by categories and mechanics to find the best fit for them. The game index updates according to the selected checkboxes, 
with a live count of the number of games rendered under the given restrictions. 

**Game Show** 

![Game Show](https://github.com/slimjim49j/bored-gamer/blob/master/readme_images/5GAME_SHOW.png)

Users may select a game, leading to its' show page. Each game holds important information, including ratings, play time, and more. 
The user also has the option to rate it themselves after they've played. 

**Game Likes**
![Game Likes](https://github.com/slimjim49j/bored-gamer/blob/master/readme_images/6GAME_LIKES.png)

When a user submits a review it can be seen in the like index for this game. Full CRUD operations are available on their likes, allowing for users to post, view, update, and delete their reviews.


**User Profile** 


Games that the user has rated or added to their collection will appear on their profile, allowing them easy access to games they've enjoyed. 


--- 

by **[Jimmy Collins](https://github.com/slimjim49j)**, **[Jen Lu](https://github.com/jenlu33)**, and **[Naveen Thota](https://github.com/helloitsnaveen)**
