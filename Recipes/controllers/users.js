const User = require('../models/user');

module.exports = {
    index,
}

function index(req, res, next) {
    console.log(req.query)

    let modelQuery = req.query.name ? {name: new RegExp(req.query.name, 'i')} : {};

    User.find(modelQuery)
    .exec(function() {
      res.render('recipes/index', {
        title: "A title",
        user: req.user,
        name: req.query.name,
      });
    });
  }