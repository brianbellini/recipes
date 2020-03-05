var express = require('express');
var router = express.Router();
var reviewsCtrl = require('../controllers/reviews');

router.post('/recipes/:id/reviews', reviewsCtrl.create);
router.get('/recipes/:id/edit', reviewsCtrl.edit);
router.delete('/recipes/:id', reviewsCtrl.delete);


module.exports = router;