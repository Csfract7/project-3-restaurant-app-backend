const { mongoose } = require("mongoose");

const RestaurantSchema = new mongoose.Schema({
    name: {type:'String'},
    description: {type:'String'},
    address: {type:'String'},
    phone: {type:'String'},
    hours: {type:'String'},
    image: {type:'String' }
})

const MenuSchema = new mongoose.Schema({
    name: {type:'String'},
    description: {type:'String'},
    price: {type:'String'},
    category: {type:'String'},
    image: {type:'String'}
    
  });
  
  const Rest = mongoose.model("Restaurant", RestaurantSchema);
  const Menu = mongoose.model("Menu", MenuSchema);
  
  module.exports = {Rest, Menu}