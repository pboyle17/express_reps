var express = require('express');
var router = express.Router();
var model = require('../models/Food');

//get all foods from the foods api
router.get('/',function(req,res,next){
  model.find(function(err,foods){
    if(err){
      console.log(err);
    } else {
      res.json(foods);
    }
  });
});

router.get('/:id', function(req,res,next){
  model.findById(req.params.id,function(err,food){
    if(err){
      console.log(err);
    } else {
      res.json(food);
    }
  });
});

router.post('/',function(req,res,next){
  model.create(req.body,function(err,food){
    if(err){
      console.log(err);
    } else {
      res.json(food);
    }
  });
});

router.put('/:id',function(req,res,next){
  model.findByIdAndUpdate(req.params.id,req.body,function(err,food){
    if(err){
      console.log(err);
    } else {
      res.json(food);
    }
  });
});

router.patch('/:id',function(req,res,next){
  model.findByIdAndUpdate(req.params.id,req.body,function(err,food){
    if(err){
      console.log(err);
    } else {
      res.json(food);
    }
  });
});

router.delete('/:id',function(req,res,next){
  model.findByIdAndRemove(req.params.id,req.body,function(err,food){
    if(err){
      console.log(err);
    } else {
      res.json(food);
    }
  });
});

module.exports = router;
