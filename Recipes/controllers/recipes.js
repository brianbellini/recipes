const Recipe = require('../models/recipe');
const User = require('../models/user');

module.exports = {
    index,
};

function index(req, res, next) {
    Recipe.find({}, function(err, recipes) {
    res.render('recipes/index', {title: "All Recipes", user: true, recipes});
});
}