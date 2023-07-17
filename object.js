let myMovie=
{
    title:"Resala",
    year:1970,
    director:"mahmod alaqad",
    actors:"mohammed,ahmed,samy",
    rating:5,
    timesWatched:50,
    recommend:function()
    {
        console.log("I suggest you watching this film");
    },
    watch:function()
    {
this.timesWatched+=1;
    },
    setRating:function(newRating)
    {
this.rating=newRating;
    },
    addActor:function(actor)
    {
this.actors.concat(",",actor);
    },
    isPopular:function()
    {
return true;
    },
    summary:function()
    {
alert("Title = " +this.title+ "\n"+"Year = " +this.year+ "\n"+"Director = " +this.director+ "\n"+"Rating = " +this.rating+ "\n"+"Time Watch = " +this.timesWatched+ "\n");
    }
};
myMovie.summary();
myMovie2={...myMovie};
myMovie2.title="Film2";
myMovie.setRating(1000);
