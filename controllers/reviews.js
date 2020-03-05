var Recipe = require('../models/recipe');


module.exports = {
  create,
  edit,
  delete: deleteReview,
};

function create(req, res) {
  Recipe.findById(req.params.id, function(err, recipe) {
    recipe.reviews.push(req.body);
    recipe.save(function(err) {
      res.redirect(`/recipes/${recipe._id}`);
    });
  });
}

function edit(req, res) {
    console.log("THIS IS THE EDIT REVIEW ID: ", req.params.id)

    Recipe.reviews.findById(req.params.id, function(err, review) {
        
            res.render('recipes/edit', {review, title: "Edit Review", user: req.user});

        })
    
}


function deleteReview(req, res) {
    console.log("THIS IS THE DELETE REVIEW ID: ", req.params.id)
    Reviews.deleteOne(req.params.id);
    res.redirect(`/recipes/${recipe.id}`);
}