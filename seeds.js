// Initialize database
require('dotenv').config();
require('./config/database');
const Recipe = require('./models/recipe');
const User = require('./models/user');
const data = require('./data');

// clear out all recipes
const p1 = Recipe.deleteMany({});
const p2 = User.deleteMany({});

Promise.all([p1, p2])

.then(function() {
  return Recipe.create(data.recipes);
})

.then(function() {
  process.exit();
});