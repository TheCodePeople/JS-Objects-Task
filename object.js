let movie = {
    title: "The Shawshank Redemption",
    year: 1994,
    director: "Frank Darabont",
    actors: "Tim Robbins, Morgan Freeman, Bob Gunton",
    rating: 9.3,
    timesWatched: 3,
    recommend: function () {
        console.log(`I recommend ${this.title} to my friend`);
    },
    watch: function () {
        this.timesWatched++;
    }
    ,
    setRating: function (newRating) {
        this.rating = newRating;
    },
    addActor: function (actorName) {
        this.actors += `, ${actorName}`;
    }
    ,
    isPopular: function () {
        if (this.rating > 8) {
            return true;
        }
        return false;
    }
    ,
    summary: function () {
        console.log(`Title: ${this.title}\nYear: ${this.year}\nDirector: ${this.director}\nActors: ${this.actors}\nRating: ${this.rating}`);
    }
}

let movie2 = { ...movie };
movie2.title = "The Dark Knight";
movie2.year = 2008;
movie2.director = "Christopher Nolan";
movie2.actors = "Christian Bale, Heath Ledger, Aaron Eckhart";
movie2.rating = 9.0;
movie2.timesWatched = 2;
movie2.myRating = 9.0;


movie.recommend();
movie.watch();
movie.setRating(9.9);
movie.addActor("Ali Ammar");
movie.isPopular();
console.log(movie);


movie2.recommend();
movie2.watch();
movie2.setRating(8.9);
movie2.addActor("Muhanned");
movie2.isPopular();
console.log(movie2);



