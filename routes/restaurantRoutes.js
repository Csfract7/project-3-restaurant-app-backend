const router = require('express').Router()

//all functions/methods imported from restaurant's controller's index.js
const { restaurantCtrls } = require('../controllers')


// ROUTES - METHODS
router.get("/", restaurantCtrls.getRestaurant)
router.post("/", restaurantCtrls.createRestaurant)
router.put('/:id', restaurantCtrls.updateRestaurant)
router.delete('/:id', restaurantCtrls.deleteRestaurant)

module.exports = router;