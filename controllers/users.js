const User = require('../models/user');
const Recipe = require('../models/recipe');

module.exports = {
    index,
}

function index(req, res, next) {
  let modelQuery = req.query.name ? {name: new RegExp(req.query.name, 'i')} : {};

  User.find(modelQuery)
  .exec(function(err, users) {
    if (err) return next(err);
    Recipe.find({}, function(err, recipes){
      res.render('recipes/index', {
        recipes,
        user: req.user,
        name: req.query.name,
    })});
  });
};

