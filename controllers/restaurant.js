// This is where database is changed to achieve Crud

const db = require('../models') 

//INDEX Restaurant ROUTE /Restaurant
const getRes = async (req, res) => {
    
    try{
        const foundRes = await db.Restaurant.find({})
        if(!foundRes){
            res.status(404).json({message: "Cannot find Restaurant"})
        } else {
            res.status(200).json({data: foundRes})
        }
    } catch(err) {
        res.status(400).json({error: err.message})
    }
}

// Restaurant CREATE ROUTE /Restuarant
const createRes = async (req, res) => {
    try{
        
        const createdRes = await db.Restaurant.create(req.body)
       

        createdRes.save()

        if(!createdRes){
            
            res.status(400).json({message: "Cannot create restaurant"})
        }
        else {
            
            res.status(201).json({message: "restaurant created", data: createRestaurant})
        }
    } catch(err) {res.status(500).json({error: err.message})}
}

// Restaurant UPDATE ROUTE
const updateRes = async (req, res) => {
    try{
        const updatedRes = await db.Restaurant.findByIdAndUpdate(req.params.id, req.body, {new: true})
        if(!updatedRes){
            res.status(400).json({message: 'Could not update Restaurant'})
        } else {
            res.status(200).json({Data: updatedRes, message: "Restaurant updated"})
        }
    } catch (err) {
        res.status(400).json({error: err.message})
    }
}

// Restaurant DESTROY ROUTE
const deleteRes = async (req, res) => {
    try {
        const deletedRes = await db.Restaurant.findByIdAndDelete(req.params.id)
        if(!deletedRes){
            res.status(400).json({message: 'Could not delete Restaurant'})
        } else {
            res.status(200).json({Data: deletedRes, message: "Restaurant Deleted"})
        }
    } catch (err) {
        res.status(400).json({error: err.message})
    }
}


module.exports = {
    getRes, 
    createRes,
    updateRes, 
    deleteRes
}