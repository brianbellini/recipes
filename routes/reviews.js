var express = require('express');
var router = express.Router();
var reviewsCtrl = require('../controllers/reviews');

router.get('/:id/edit', isLoggedIn, reviewsCtrl.edit);
router.put('/:id', isLoggedIn, reviewsCtrl.update);
router.delete('/:id', isLoggedIn, reviewsCtrl.delete);

function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
}

module.exports = router;