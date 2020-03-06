var Recipe = require('../models/recipe');


module.exports = {
  edit,
  delete: deleteReview,
  update: updateReview,
};

function updateReview(req, res) {
    Recipe.findOne({'reviews._id': req.params.id}, function(err, recipe) {
        const reviewSub = recipe.reviews.id(req.params.id);
        reviewSub.content = req.body.content;
        recipe.save(function(err) {
            res.redirect(`/recipes/${recipe._id}`);
        })
    })
}



function edit(req, res) {
    Recipe.findOne({'reviews._id': req.params.id}, function(err, recipe) {
        const reviewSub = recipe.reviews.id(req.params.id);
        res.render(`recipes/edit`, {review: reviewSub, recipe, title: "Edit Review", user: req.user});
    })
}


function deleteReview(req, res) {
    Recipe.findOne({'reviews._id': req.params.id}, function(err, recipe) {
        const reviewSub = recipe.reviews.id(req.params.id);
        reviewSub.remove();
        recipe.save(function(err){
            res.redirect(`/recipes/${recipe._id}`);
        })
    })
}
