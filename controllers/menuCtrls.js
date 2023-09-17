// This is where database is changed to achieve Crud
const db = require('../models') 


//MENU INDEX ROUTE '/MENU'
const getMenu = async (req, res) => {
    try{
        const foundMenu = await db.Menu.find({})
        if(!foundMenu){
            res.status(404).json({message: "Cannot find menu"})
        } else {
            res.status(200).json({data: foundMenu})
        }
    } catch(err) {
        res.status(400).json({error: err.message})
    }
    //res.send('getMenu')
}


//MENU CREATE ROUTE
const createMenu = async (req, res) => {
    try{
        const createdMenu = await db.Menu.create(req.body)
        createdMenu.save()
        if(!createdMenu){
            res.status(400).json({message: "Cannot create menu"})
        }
        else {
            res.status(201).json({message: "Menu created", data: createdMenu})
        }
    } catch(err) {
        res.status(400).json({error: err.message})
    }
    //res.send('createMenu')
}


//MENU UPDATE ROUTE
const updateMenu = async (req, res) => {
    try{
        const updatedMenu = await db.Menu.findByIdAndUpdate(req.params.id, req.body, {new: true})
        if(!updatedMenu){
            res.status(400).json({message: 'Could not update menu'})
        } else {
            res.status(200).json({Data: updatedMenu, message: "Menu updated"})
        }
    } catch (err) {
        res.status(400).json({error: err.message})
    }
}


//MENU DESTROY ROUTE
const deleteMenu = async (req, res) => {
    try {
        const deletedMenu = await db.Menu.findByIdAndDelete(req.params.id)
        if(!deletedMenu){
            res.status(400).json({message: 'Could not delete menu'})
        } else {
            res.status(200).json({Data: deletedMenu, message: "Menu deleted"})
        }
    } catch (err) {
        res.status(400).json({error: err.message})
    }
}


module.exports = {
    getMenu,
    createMenu,
    updateMenu, 
    deleteMenu
}