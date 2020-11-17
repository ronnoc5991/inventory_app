var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('You in the categories router, friend!');
});

module.exports = router;