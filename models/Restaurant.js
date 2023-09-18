const mongoose = require('mongoose')
//const { MenuSchema } = require('./Menu') //Based on line 11, we need to import MenuSchema

const restaurantSchema = new mongoose.Schema({
    name: {type:'String'},
    description: {type:'String'},
    address: {type:'String'},
    phone: {type:'String'},
    hours: {type:'String'},
    image: {type:'String' },
    // menu: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Menu' }],  //imported MenuSchema
}, {timestamps: true})

const Restaurant = mongoose.model('Restaurant', restaurantSchema)

module.exports = Restaurant