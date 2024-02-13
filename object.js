let fastFurious = {
  titel: "fast&furious",
  year: 2001,
  director: "Rob Cohen",
  actors: "vin Diesel - paul walker ",
  rating: 7,
  timesWatched: 23,
  recommend: function () {
    console.log(`${this.titel} this move is amezing`);
  },
  watch: function () {
    this.timesWatched = this.timesWatched + 1;
  },
  setRating: function (newRating) {
    console.log((this.rating = newRating));
  },
  addActres: function (newAct) {
    console.log((this.actors = this.actors + "," + newAct));
  },

  isPopular: function () {
    if (this.rating > 8) {
      return true;
    } else {
      return false;
    }
  },
  summary: function () {
    let summaryMove = `the title of move is ${this.titel} made in ${this.year},the act is${this.actors},and is rated ${this.rating}  `;
    return summaryMove;
  },
};
fastFurious.recommend();
fastFurious.watch();
fastFurious.setRating(8);
fastFurious.addActres("john");
fastFurious.isPopular();
fastFurious.summary();
console.log(fastFurious.summary());
console.log(fastFurious.isPopular());

let newMove = { ...fastFurious };

newMove.titel = "John Wick";
newMove.actors = "Keanu Reeves - Ian McShane";
newMove.year = 2014;
newMove.director = "Chad Stahelski";
newMove.rating = 7;
newMove.timesWatched = 3;

newMove.summary();
newMove.watch();
newMove.setRating(9);
newMove.addActres("Adrianne Palicki");
console.log(newMove.isPopular());
console.log(newMove.summary());
