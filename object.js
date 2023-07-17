let favoriteMovie = {
  title: "title: theLordOfTheRing",
  year: 2002,
  director: "director: HusseinShaheed",
  actors: "actors: ahmed & ali",
  rating: 8.4,
  timesWatched: 2,
  recommend() {
    console.log(` I recommending this movie to watch ${this.title}`);
  },
  watch(ADD) {
    ADD = this.timesWatched + 1;
    console.log(ADD);
  },
  setRating(newRating) {
    newRating = this.rating + newRating;
    console.log(newRating);
  },
  addActor(actorName) {
    actorName = this.actors + actorName;
    console.log(actorName);
  },
  isPopular() {
    if (this.rating > 8) {
      return true;
    } else return false;
  },
  summary() {
    console.log(
      `${this.title} ${this.year} ${this.director} ${this.actors} ${this.rating}`
    );
  },
};
let favoriteMovie2 = { ...favoriteMovie };
favoriteMovie2.myRating = 10;
favoriteMovie2.title = "theLordOfTheRing2";
favoriteMovie2.year = 2003;
favoriteMovie2.director = "HusseinHameed";
favoriteMovie2.actors = "Hassan & Abaas";
favoriteMovie2.rating = 9.4;
favoriteMovie2.timesWatched = 2;
////////////
favoriteMovie.recommend();
favoriteMovie.watch(1);
favoriteMovie.setRating(1);
favoriteMovie.addActor(" & saif");
favoriteMovie.isPopular();
favoriteMovie.summary();
/////////////
favoriteMovie2.recommend();
favoriteMovie2.watch(1);
favoriteMovie2.setRating(1);
favoriteMovie2.addActor(" & saif");
favoriteMovie2.isPopular();
favoriteMovie2.summary();
