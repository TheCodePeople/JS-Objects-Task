//point2
let favoriteMovie= {
title : "The Lord Of The Rings",
year: 2003,
director: "Peter Jackson",
actors: ["Vigoo Mortensen","Sean Astin"],
rating: 8.9,
timewatched: 20,
//point3
recommend(){
    console.log("this movie is the best movie ever because it can take you to another world full with suspense and action and some emotions ")
},
watch(){
    this.timewatched +=1
},
setRating(newRating){
    this.rating=newRating
},
addActor(actorName){
    // this.actors.push(actorName)
    this.actors=[...this.actors, actorName]
},
isPopular(){
return this.rating>=8
},
summary(){
    console.log(this)
}
}

//point4
let anotherMovie = {...favoriteMovie}
//point5
anotherMovie.title="Intersteller"
anotherMovie.year=2014
anotherMovie.director="Christopher Nolan"
anotherMovie.actors=["Matthew McConaughey" , " Ellen Burstyn "]
anotherMovie.rating= 8.7
anotherMovie.timewatched=1
//point6
favoriteMovie.myRating=10
//point7
favoriteMovie.watch()
favoriteMovie.setRating(9.5)
favoriteMovie.addActor("Sala Baker")
favoriteMovie.isPopular()
favoriteMovie.summary()
 anotherMovie.summary()
