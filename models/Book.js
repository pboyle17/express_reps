var mongoose=require('mongoose');

//ingredients , type, toppings, syrup, instructions, time
var BookSchema = new mongoose.Schema({
  name: String,
  author: String,
  subject: String,
  rating: String,
  description: String
});

module.exports = mongoose.model('Book',BookSchema);

//moment.js for time based shits
