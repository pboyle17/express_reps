var express = require('express');
var router = express.Router();

router.get('/books', function(req,res,next){
  res.render('books', { book: 'Thinking fast and slow'

  });
});

router.get('/foods', function(req,res,next){
  res.render('foods', { food: 'Pizza'

  });
});

router.get('/music', function(req,res,next){
  res.render('music', { music: 'Stubborn Love, The Lumineers'

  });
});

module.exports = router;
