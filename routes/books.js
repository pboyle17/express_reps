var express = require('express');
var router = express.Router();
var model = require('../models/Book');

//get all books from the books api
router.get('/',function(req,res,next){
  model.find(function(err,books){
    if(err){
      console.log(err);
    } else {
      res.json(books);
    }
  });
});

router.get('/:id', function(req,res,next){
  model.findById(req.params.id,function(err,book){
    if(err){
      console.log(err);
    } else {
      res.json(book);
    }
  });
});

router.post('/',function(req,res,next){
  model.create(req.body,function(err,book){
    if(err){
      console.log(err);
    } else {
      res.json(book);
    }
  });
});

router.put('/:id',function(req,res,next){
  model.findByIdAndUpdate(req.params.id,req.body,function(err,book){
    if(err){
      console.log(err);
    } else {
      res.json(book);
    }
  });
});

router.patch('/:id',function(req,res,next){
  model.findByIdAndUpdate(req.params.id,req.body,function(err,book){
    if(err){
      console.log(err);
    } else {
      res.json(book);
    }
  });
});

router.delete('/:id',function(req,res,next){
  model.findByIdAndRemove(req.params.id,req.body,function(err,book){
    if(err){
      console.log(err);
    } else {
      res.json(book);
    }
  });
});

module.exports = router;
