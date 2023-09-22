const Favoriteovie={
    title: "american psycho",
    Years:2000,
    director:"hurry",
    actors:"Christian Bale",
    rating:10,
    timesWatched:30,
    recommend(){
        console.log("This movie is extremely gory with shocking and upsetting imagery and carnage. NO ONE under 18 should see this movie. There is nothing redeeming ");
    },
    
   
    watch() {
        return(this.timesWatched+=this.timesWatched )
    },
    setRating(newRating){
        this.rating=newRating;
    },

    addActor:function(actor)
    {
this.actors += " .   "+actor;
    },


    ispouler(){
        if(this.rating>8){
            return true;}
            else return false
        },
        summary() {

            alert("Title = " +this.title+ "\n"+"Year = " +this.year+ "\n"+"Director = " +this.director+ "\n"+"Rating = " +this.rating+ "\n"+"Time Watch = " +this.timesWatched+ "\n"+"Actors = " +this.actors+ "\n");
          }
        };
        Favoriteovie.summary();
myMovie2={...myMovie};
myMovie2.title="fflm";
myMovie.summary();
myMovie2={...myMovie};
myMovie2.title="fflm";
myMovie.setRating(1000);


        
    
        