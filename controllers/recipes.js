const Recipe = require('../models/recipe');
const User = require('../models/user');

module.exports = {
    index,
    show,
    create,
};

function index(req, res, next) {
  console.log(req.user)
    Recipe.find({}, function(err, recipes) {
    res.render('recipes/index', {title: "All Recipes", user: req.user, recipes});
});
}

function show(req, res, next) {
    Recipe.findById(req.params.id)
    .exec(function(err, recipe) {
        console.log(recipe);
        res.render('recipes/show', {recipe, title: recipe.title, user: req.user})
    })
}

function create(req, res) {
    Recipe.findById(req.params.id, function(err, recipe) {
      recipe.reviews.push(req.body);
      recipe.save(function(err) {
        res.redirect(`/recipes/${recipe._id}`);
      });
    });
  }