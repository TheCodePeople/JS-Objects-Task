let favMovie = {
  title: "How To Train Your Dragon",
  year: 2010,
  director: "Dean DeBlois, and Chris Sanders",
  actors:
    "Jay Baruchel, Gerard Butler, Jonah Hill, America Ferrara, Kit Harington, David Tennant, Cate Blanchett",
  rating: 8.1,
  timesWatched: 3,
  watch() {
    this.timesWatched += 1;
    return `You have watched this movie ${this.timesWatched} times.`;
  },
  recommend(name) {
    return `I recommend this movie to ${name} because it's a really well written movie.`;
  },
  setRating(newRating) {
    return `This movie's rating has been updated to ${newRating} instead of the old rating ${this.rating}`;
  },
  addActor(actorName) {
    return (
      this.actors +
      " as well as " +
      actorName +
      " has been added to the cast list"
    );
  },
  isPopular() {
    return true;
  },
  summary() {
    return (
      this.title +
      " was made in the year of " +
      this.year +
      " by the director " +
      this.director +
      ". The actors of this movie are " +
      this.actors +
      ". The rating of this movie is " +
      this.rating
    );
  },
};

let favMovie2 = { ...favMovie };
favMovie2.title = "PK";
favMovie2.year = 2014;
favMovie2.director = "Rajkumar Hirani";
favMovie2.actors =
  "Aamir Khan, Anushka Sharma, Sushant Singh Rajput, Sanjay Dutt, Saurabh Shukla";
// no need to change the rating since both movies have the same rating.
favMovie2.timesWatched = 2;
favMovie2.myRating = "9/10";

console.log(favMovie);
console.log(favMovie.watch());
console.log(favMovie.recommend("Colin"));
console.log(favMovie.setRating(9));
console.log(favMovie.addActor("AlHassan"));
console.log(favMovie.isPopular());
console.log(favMovie.summary());

console.log(favMovie2);
console.log(favMovie2.watch());
console.log(favMovie2.recommend("Simon"));
console.log(favMovie2.setRating(10));
console.log(favMovie2.addActor("Zahraa"));
console.log(favMovie2.isPopular());
console.log(favMovie2.summary());
