let favorite = {
    title:"Batman",
    year:2014,
    director:"Nolan",
    actors:"bale",
    rating:9.0,
    timeWatched:2,

    recommend:function () {
        console.log("I recommend the film");
    },
    watch:function () {
        this.timeWatched++
    },
    setRating:function (newRating) {
        this.rating==newRating
    },
    addActor:function (actorName) {
        this.actors=this.actors 
    },
    isPopular:function () {
        if (this.rating<8){
            return false;
        } else {return true}
    },

    summary:function(){
        console.log(`the name of film is ${this.title} and made in ${this.year} and the director is ${this.director} and the actors are ${this.actors} and its rating is ${this.rating}`);
    },
} 

let movie={...favorite};
movie.title="The lord of the rings";
movie.year=2003;
movie.director="ameer";
movie.actors="mehdi";
movie.rating=9.5;
movie.timeWatched=5;
movie.myRating=10;

console.log(favorite);
