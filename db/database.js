var mongoose = require('mongoose');
var connectionString = 'mongodb://localhost/api';

mongoose.connect(connectionString);

mongoose.connection.on('connected',function(){
  console.log('making apis');
});

mongoose.connection.on('error',function(err){
  console.log(err)
});

mongoose.connection.on('disconnected',function(){
  console.log('he ded jim');
});
