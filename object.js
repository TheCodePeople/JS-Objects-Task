//1
const favmovie = {
    title:"scent of a woman",
   year:1992,
   director:"Drama",
   actors:"Alpacino",
   rating: 8,
 timesWatched:3,
 //2
 recommend:function () {
    console.log (`${this.title } ,this movie is a mazing`);
   
  
  },
  //3

 watch() {
  
  this.timesWatched=this.timesWatched+1;
  console.log(this.timesWatched)
 },
 //4
 setRating(newvalue){
  this.rating=newvalue;
  console.log(this.rating)

 },
 //5
 addActor(actorName){
  this.actors=this.actors+" "+actorName;
  console.log(this.actors)
 },
 //6
 isPopular(){
  if(this.isPopular>=8)
{
  return true;
}else{
  return false;
}

 },

 //7
 summary(){
  console.log(this)

 },
};
favmovie.recommend();
favmovie.watch();
favmovie.setRating(9);
favmovie.addActor("jabar");
console.log(favmovie.isPopular());
favmovie.summary();
//8
let anothermovie={... favmovie};

anothermovie.title="Home alone"
anothermovie.year=1990
anothermovie.director="comedy,familial"
anothermovie.actors="daniel"
anothermovie.rating=9.2
anothermovie.timesWatched=7
console.log(anothermovie);

//9
anothermovie.myRating= 9
console.log(anothermovie.myRating)



// console.log(movie.title,movie. year,movie.director,movie.actors,movie.rating,movie.timesWatched);


