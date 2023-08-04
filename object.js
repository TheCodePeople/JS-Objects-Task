const myFavoriteMovie = { title:"captain america first avenger", 
year : 2011 ,
director: "director",
actors: "actors",
rating:"85",
timesWatched :3,

recommend(){
    console.log(`I Recommend "${this.title}" for you to watched it's a great movie `);

},
watch(){
    this.timesWatched++;
    console.log(`You have watched "${this.title}" ${this.timesWatched} times `);

},
setRating(newRating) {
    this.rating = newRating;
    console.log(
        `"${this.title}" rating is now set to ${this.rating}`
    );
},
addActor(actorName) {
    this.actors += `, ${actorName}`;
    console.log(`${this.title}'s actors are ${this.actors}`
    );

},

isPapular() {
    return this.rating >= 8;
},
summary() {
    console.log(
        `${this.title}: year:${this.year}; director:${this.director};` );
},
};
const newMovie = Object.assign({}, myFavoriteMovie);
newMovie.title = "Spider-Man: No Way Home";
newMovie.year = 2021;
newMovie.director = "Sarah Finn";
newMovie.actors =
  "Tom Holland , Zendaya. Adams, Benedict Cumberbatch, Jacob Batalon, Jon Favreau, Jamie Foxx ";
newMovie.rating = 8.2;
newMovie.timesWatched = 4;
newMovie.myRating = 9.9;

newMovie.recommend();
newMovie.watch();
newMovie.setRating(9.1);
newMovie.addActor("adam pesa");
console.log(`Is Popular: ${newMovie.isPapular()}`);
newMovie.summary();

console.log("The new movie:", newMovie);
console.log(" myFavoriteMovie:", myFavoriteMovie);