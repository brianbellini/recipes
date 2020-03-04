const Recipe = require('../models/recipe');
const User = require('../models/user');

module.exports = {
    index,
    show,
};

function index(req, res, next) {
    const userId = req.user.id ? req.user.id : "";


    Recipe.find({}, function(err, recipes) {
    res.render('recipes/index', {title: "All Recipes", user: req.user.id, recipes});
});
}

function show(req, res, next) {
    Recipe.findById(req.params.id)
    .exec(function(err, recipe) {
        console.log(recipe);
        res.render('recipes/show', {recipe, title: recipe.title, user: req.user.id})
    })
}

/*
function show(req, res) {
  Movie.findById(req.params.id)
  .populate('cast').exec(function(err, movie) {
    // Performer.find({}).where('_id').nin(movie.cast)
    Performer.find({_id: {$nin: movie.cast}})
    .exec(function(err, performers) {
      console.log(performers);
      res.render('movies/show', {
        title: 'Movie Detail', movie, performers
      });
    });
  });
}
*/