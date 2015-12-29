var express = require('express');
var router = express.Router();
var model = require('../models/Music');

//get all music from the music api
router.get('/',function(req,res,next){
  model.find(function(err,music){
    if(err){
      console.log(err);
    } else {
      res.json(music);
    }
  });
});

router.get('/:id', function(req,res,next){
  model.findById(req.params.id,function(err,music){
    if(err){
      console.log(err);
    } else {
      res.json(music);
    }
  });
});

router.post('/',function(req,res,next){
  model.create(req.body,function(err,music){
    if(err){
      console.log(err);
    } else {
      res.json(music);
    }
  });
});

router.put('/:id',function(req,res,next){
  model.findByIdAndUpdate(req.params.id,req.body,function(err,music){
    if(err){
      console.log(err);
    } else {
      res.json(music);
    }
  });
});

router.patch('/:id',function(req,res,next){
  model.findByIdAndUpdate(req.params.id,req.body,function(err,music){
    if(err){
      console.log(err);
    } else {
      res.json(music);
    }
  });
});

router.delete('/:id',function(req,res,next){
  model.findByIdAndRemove(req.params.id,req.body,function(err,music){
    if(err){
      console.log(err);
    } else {
      res.json(music);
    }
  });
});

module.exports = router;
