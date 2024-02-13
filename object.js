const movie = {
  title: "johan whake",
  year: 2001,
  director: "cristofer",
  actors: "jamse ",
  rating: 8.5,
  timesWatched: 2,

  recommend() {
    console.log("this film its amaizn");
  },

  watch() {
    this.timesWatched = this.timesWatched + 1;
    console.log(this.timesWatched);
  },
  setRating(newRating) {
    this.rating = newRating;
  },
  addActor(actorName) {
    this.actors += actorName;
  },
  isPopular() {
    if (this.rating > 8) {
      return true;
    } else {
      return false;
    }
  },
  summary() {
    console.log(
      "axien movie ",
      this.title,
      "-",
      this.year,
      "-",
      this.director,
      "-",
      this.actors,
      "-",
      this.rating,
      "-",
      this.timesWatched
    );
  },
};

const newMovie = { ...movie };

newMovie.title = "The Dark Knight";
newMovie.year = 2010;
newMovie.director = "Christopher Nolan";
newMovie.actors = "jeams , marten";
newMovie.rating = 9.5;
newMovie.timesWatched = 3;

newMovie.rating = 10;

movie.summary();
console.log("Is the movie popular :", movie.isPopular());

movie.recommend();
movie.watch();

movie.setRating(9.2);
console.log(" rating for movie: ", movie.rating);

movie.addActor("Morgan");
console.log("actors for new movie: ", movie.actors);
