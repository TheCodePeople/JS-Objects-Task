const movie = {

    title: "The Invisible Guest",
    year: 2016,
    director: "Oriol Paulo",
    actors: "Mario Casas",
    rating: 8,
    timesWatched: 4,
    recommend() {
        console.log("Hello! I really recommend this movie. It's very exciting.");
    },
    watch() {
        this.timesWatched++;
    },
    setRating(newRating) {
        this.rating = newRating;
    },
    addActor(actorName) {
        this.actors = this.actors.concat(" & ", actorName);
    },
    isPopular() {
        if (this.rating > 8) {
            return true;
        } else {
            return false;
        }

    },
    summary() {
        let movieSummary = `The movie, ${this.title}, made in ${this.year}, directed by ${this.director}, and acted by ${this.actors}, is an amazing movie rated ${this.rating}. You should definitely watch it.`
        return movieSummary;
    }
}

const anotherMovie = { ...movie };
anotherMovie.title = "The Terminal";
anotherMovie.year = 2004;
anotherMovie.director = "Steven Spielberg";
anotherMovie.actors = "Tom Hanks";
anotherMovie.rating = 7.4;
anotherMovie.timesWatched = 7;

anotherMovie.myRating = 8.5;
movie.myRating = 9;

movie.watch();
anotherMovie.setRating(7.6);
anotherMovie.addActor("Catherine Zeta Jones");

console.log(movie.title, movie.myRating, movie.timesWatched, movie.isPopular());
console.log(anotherMovie.summary());