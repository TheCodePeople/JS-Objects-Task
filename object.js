const movies = {
  title: "the mission impossible 6",
  year: 2018,
  director: "Simon Jonathan Pegg",
  acrot: "Tom Cruise",
  rating: "8.5",
  timesWatched: 2,

  recommend() {
    console.log("شوفة وادعيلي ");
  },
  watch() {
    this.timesWatched++;
  },
  setRating(newRating) {
    this.rating = newRating;
  },
  addActor(acterNew) {
    this.acrot = +`${acterNew}`;
  },
  Popule() {
    if (this.rating > 8) {
      console.log("فلم حلو");
    } else {
      console.log("مع الاسف جرب غيرة ");
    }
  },
  summary() {
    console.log(
      this.title / n +
        this.year / n +
        this.director / n +
        this.acrot / n +
        this.rating / n +
        this.timesWatched
    );
  },
};
let movies4 = { ...movies };

movies4.title = "the mission impossible 5";
movies4.year = 2016;
movies4.rating = "8.2";

console.log(movies);

movies.watch();
movies.setRating(9);
movies.addActor("abbas");
movies.Popule();
movies.recommend();

console.log(movies4);

movies.recommend();
movies.watch();
movies.setRating(5);
movies.addActor("jasem");
movies.Popule();
