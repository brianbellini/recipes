const User = require('../models/user');
const Recipe = require('../models/recipe');

module.exports = {
    index,
}

function index(req, res, next) {
  let modelQuery = req.query.name ? {name: new RegExp(req.query.name, 'i')} : {};

  User.find(modelQuery)
  // .sort(sortKey)
  .exec(function(err, users) {
    if (err) return next(err);
    // Passing search values, name & sortKey, for use in the EJS
    Recipe.find({}, function(err, recipes){
      res.render('recipes/index', {
        recipes,
        user: req.user,
        name: req.query.name,
    })});
  });
};
