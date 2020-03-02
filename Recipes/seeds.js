// utility to initialize database
require('dotenv').config();
require('./config/database');
const Recipe = require('./models/recipe');
const User = require('./models/user');
const data = require('./data');

// clear out all recipes
const p1 = Recipe.deleteMany({});
const p2 = User.deleteMany({});

Promise.all([p1, p2])
// .then(function(results) {
//   return Performer.create(data.performers);
// })
.then(function() {
    console.log(data)
  return Recipe.create(data.recipes);
})
// .then(function(movies) {
//   return Promise.all([
//     Performer.findOne({name: 'Mark Hamill'}),
//     Movie.findOne({title: 'Star Wars - A New Hope'})
//   ]);
// })
// .then(function(results) {  // one day we'll destructure this!
//   const mark = results[0];
//   const starWars = results[1];
//   starWars.cast.push(mark);
//   return starWars.save();
// })
.then(function() {
  process.exit();
});