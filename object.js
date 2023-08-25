let movie = {
  title: "the godfather",
  year: 1990,
  director: "Mario Puzo",
  actors: "Al Pacino , Robert Duvall ",
  Rating: 10,
  timesWatched: 1,

  recommend: function () {
    console.log("watch the movie ");
  },

  watch: function () {
    this.timesWatched++;
  },
  setRating: function (newRating) {
    this.Rating = newRating;
  },
  addActors: function (actorName) {
    this.actors = +` ${actorName}`;
  },

  isPopular: function () {
    if (this.Rating > 8) {
      return "is Popular";
    } else {
      return "is not popular";
    }
  },
  summary: function () {
    console.log(
      "the title is" +
        this.title / n +
        "year" +
        this.year / n +
        "the director" +
        this.director / n +
        "the actors are" +
        this.actors / n +
        "Rating" +
        this.Rating / n
    );
  },
};
let movie2 = { ...movie };
movie2.title = "FURY";
movie2.year = 2014;
movie2.director = "David Ayer";
movie2.actors = "	Brad Pitt , Jon Berntha";
movie2.Rating = 7;
movie2.timesWatched = 3;
movie2.myRating = 9;

movie.recommend();
movie.watch();
movie.setRating(9.9);
movie.addActors("Marlon Brando");
movie.isPopular();
console.log(movie);

movie2.recommend();
movie2.watch();
movie2.setRating(8.5);
movie2.addActors("Shia LaBeouf");
movie2.isPopular();
console.log(movie2);
