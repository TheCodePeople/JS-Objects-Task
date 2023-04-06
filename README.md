# Favorite Movie Object

In this project, you will create an object in JavaScript that represents your favorite movie. You will also add methods to the object and modify its properties to reflect your favorite movie.

## Getting Started

1. Fork and clone this repository to your local machine.
2. Navigate to the project folder.
3. Open the object.js file and start working on your object.
4. Test your object in the console to make sure it works as expected.

## Task Instructions

1. Choose your favorite movie.
2. Create a JavaScript object that represents a movie with the following properties:
   - `title` (a string)
   - `year` (a number)
   - `director` (a string)
   - `actors` (a string)
   - `rating` (a number)
   - `timesWatched` (a number, representing the number of times you have watched the movie)
3. The movie object should also have the following methods:
   - `recommend()`: Prints a message recommending the movie to a friend.
   - `watch()`: This method increments the `timesWatched` property by 1, representing that the movie has been watched one more time.
   - `setRating(newRating)`: This method takes a new rating as an argument and updates the `rating` property of the movie object with the new value.
   - `addActor(actorName)`: This method takes an actor's name as an argument and appends it to the `actors` property, which represents the list of actors in the movie.
   - `isPopular()`: This method returns a boolean value indicating whether the movie is popular or not, based on its rating (popular > 8).
   - `summary()`: Prints a paragraph summarizing the movie's information, including the title, year, director, actors, and rating.
4. Create a copy of the object. (Hint: You can use the spread operator (...) or the Object.assign() method)
5. Modify the properties of the new object to represent another favorite movie.
6. Add a new property called myRating and include your rating of the movie.
7. Test the object's methods and properties in the console to ensure they function as expected.

## Submitting the Task

After completing the tasks, please follow the instructions below to submit your work:

1. Run git add . in your terminal to track the changes
2. Run git commit -m "" to stage the changes
3. Run git push to push the changes to your forked repository
4. Create a pull request to submit your work for review

## Resources

Here are some resources that may be helpful for completing this project:

- [MDN Web Docs: Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)
- [JavaScript.info: Objects](https://javascript.info/object)
- [W3Schools: JavaScript Objects](https://www.w3schools.com/js/js_objects.asp)

And.. Don't forget to enjoy the journey!😉
