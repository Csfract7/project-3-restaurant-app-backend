// This is where database is changed to achieve Crud
const db = require('../models') 


//RESTAURANT INDEX ROUTE '/RESTAURANT'
const getRestaurant = async (req, res) => {
    try{
        const foundRestaurant = await db.Restaurant.find({})
        if(!foundRestaurant){
            res.status(404).json({message: "Cannot find restaurant"})
        } else {
            res.status(200).json({data: foundRestaurant})
        }
    } catch(err) {
        res.status(400).json({error: err.message})
    }
    //res.send('getRestaurant')
}


//RESTAURANT CREATE ROUTE
const createRestaurant = async (req, res) => {
    try{
        const createdRestaurant = await db.Restaurant.create(req.body)
        createdRestaurant.save()
        if(!createdRestaurant){
            res.status(400).json({message: "Cannot create restaurant"})
        }
        else {
            res.status(201).json({message: "Restaurant created", data: createdRestaurant})
        }
    } catch(err) {
        res.status(400).json({error: err.message})
    }
    //res.send('createRestaurant')
}


//RESTAURANT UPDATE ROUTE
const updateRestaurant = async (req, res) => {
    try{
        const updatedRestaurant = await db.Restaurant.findByIdAndUpdate(req.params.id, req.body, {new: true})
        if(!updatedRestaurant){
            res.status(400).json({message: 'Could not update restaurant'})
        } else {
            res.status(200).json({Data: updatedRestaurant, message: "Restaurant updated"})
        }
    } catch (err) {
        res.status(400).json({error: err.message})
    }
}


//RESTAURANT DESTROY ROUTE
const deleteRestaurant = async (req, res) => {
    try {
        const deletedRestaurant = await db.Restaurant.findByIdAndDelete(req.params.id)
        if(!deletedRestaurant){
            res.status(400).json({message: 'Could not delete restaurant'})
        } else {
            res.status(200).json({Data: deletedRestaurant, message: "Restaurant deleted"})
        }
    } catch (err) {
        res.status(400).json({error: err.message})
    }
}


module.exports = {
    getRestaurant,
    createRestaurant,
    updateRestaurant, 
    deleteRestaurant
}