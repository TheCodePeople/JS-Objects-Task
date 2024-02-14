let movie = {

    title: "mulan",
    year: 1999,
    director: "tony",
    actor: "barry",
    rating: 8,
    timesWatched: 15,


    recommend: function () {
        console.log(
            `${this.title} is movie is amazing`);

    },
    watch() {

        this.timesWatched = this.timesWatched + 1
    },
    rating(newValue) {

        this.rating = newValue
        console.log(this.rating)
    },
    addactor(newactor) {

        this.actor = newactor
        console.log(this.actor)


    },



   
}

let anothermovie=(...movie);


 anothermovie.title= "friends"
   anothermovie. year=1989,
    anothermovie.director= "david",
    anothermovie.actor="jennifer",
    anothermovie.rating= 9,
    anothermovie.timesWatched=5,







console.log(movie.recommend());

movie.sayhello();

console.log(anothermovie);
anothermovie.myrating=9
console.log(anothermovie.myrating)