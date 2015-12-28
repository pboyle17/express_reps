var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Hello Beautiful World!',
                      info: 'This is the information section'
 });
});

module.exports = router;
