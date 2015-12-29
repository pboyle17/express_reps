var mongoose=require('mongoose');

//ingredients , type, toppings, syrup, instructions, time
var FoodSchema = new mongoose.Schema({
  name: String,
  rating: String,
  description: String
});

module.exports = mongoose.model('Food',FoodSchema);

//moment.js for time based shits
