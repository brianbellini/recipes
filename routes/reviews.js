var express = require('express');
var router = express.Router();
var reviewsCtrl = require('../controllers/reviews');

router.get('/:id/edit', reviewsCtrl.edit);
router.put('/:id', reviewsCtrl.update);
router.delete('/:id', reviewsCtrl.delete);


module.exports = router;