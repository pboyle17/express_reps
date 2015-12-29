var mongoose=require('mongoose');

//ingredients , type, toppings, syrup, instructions, time
var MusicSchema = new mongoose.Schema({
  name: String,
  band: String,
  rating: String,
  description: String,
  link: String
});

module.exports = mongoose.model('Music',MusicSchema);

//moment.js for time based shits
