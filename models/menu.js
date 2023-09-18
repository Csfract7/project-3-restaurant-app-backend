const mongoose = require("mongoose");

const MenuSchema = new mongoose.Schema({
    name: {type:'String'},
    description: {type:'String'},
    price: {type:'String'},
    category: {type:'String'},
    image: {type:'String'}
  }, {timestamps: true});
  
const Menu = mongoose.model("Menu", MenuSchema);
//   const Menu = mongoose.model("Menu", MenuSchema);
  
  module.exports = Menu