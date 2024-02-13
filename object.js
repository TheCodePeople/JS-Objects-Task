const favMovie = {
  title: "Howl's Moving Castel",
  year: 2004,
  director: "Hayao Miyazaki",
  actors: "Sofie",
  rating: 8.2,
  timesWatched: 100,
  recommend: function () {
    console.log(`you have to watch ${this.title}`);
  },
  watch: function () {
    console.log(this.timesWatched + 1);
  },
  setNewRating: function (newRating) {
    this.rating = newRating;
    console.log(this.rating);
  },
  addActor: function (actorName) {
    this.actors = `${this.actors} , ${actorName}`;
  },
  isPopular: function () {
    if (this.rating > 8) {
      return true;
    } else {
      return false;
    }
  },
  summery: function () {
    console.log(
      `${this.title} information, year: ${this.year}, director:${this.director}, actors: ${this.actors}, and rating: ${this.rating}`
    );
  },
};

const secondFavMovie = { ...favMovie };
secondFavMovie.title = "spireted away";
secondFavMovie.actors = "sin";
secondFavMovie.rating = 8.6;
secondFavMovie.timesWatched = 10;
secondFavMovie.year = 2001;
secondFavMovie.myRating = 9;
