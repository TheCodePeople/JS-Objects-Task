const myFavoriteMovie = {
  title: "Train To Busan",
  year: 2016,
  director: "Yeon Sang-ho",
  actors:
    "Gong Yoo, Jung Yu-mi, Ma Dong-seok,Kim Su-an, Choi Woo-shik,Ahn So-hee, Kim Eui-sung",
  rating: 7.6,
  timesWatched: 1,

  recommend() {
    console.log(`He should watch a movie ${this.title}`);
  },

  watch() {
    this.timesWatched++;
    console.log(`You have watched "${this.title}" ${this.timesWatched} times.`);
  },

  setRating(newRating) {
    this.rating = newRating;
    console.log(this.title);
  },

  addActor(actorName) {
    this.actors += `, ${actorName}`;
    console.log(`"${actorName}, this movie${this.title}".`);
  },

  isPopular: function () {
    return this.rating >= 8;
  },

  summary: function () {
    console.log(
      `Title: ${this.title}\nYear: ${this.year}\nDirector: ${this.director}\nActors: ${this.actors}\nRating: ${this.rating}\nTimes Watched: ${this.timesWatched}\n\nSummary: "Friends" is a popular TV show that aired from 1994 to 2004. It revolves around a group of six friends living in New York City, played by Jennifer Aniston, Courteney Cox, Lisa Kudrow, Matt LeBlanc, Matthew Perry, and David Schwimmer. The show follows their personal and professional lives, relationships, and humorous adventures. With a rating of 8.9 on IMDb, "Friends" has become a beloved and iconic show that continues to captivate audiences worldwide.`
    );
  },
};

const Movie = { ...myFavoriteMovie };

secondFavMovie.title = "The Witch";
secondFavMovie.actors = "Kim da-mi";
secondFavMovie.rating = 7.1;
secondFavMovie.timesWatched = 1;
secondFavMovie.year = 2018;
secondFavMovie.myRating = 9.5;
