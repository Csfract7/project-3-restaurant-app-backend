const router = require('express').Router()

//all functions/methods imported from restaurant's controller's index.js
const { restaurantCtrl } = require('../controllers')


// ROUTES - METHODS
router.get("/", restaurantCtrl.getRestaurant)
router.post("/", restaurantCtrl.createRestaurant)
router.put('/:id', restaurantCtrl.updateRestaurant)
router.delete('/:id', restaurantCtrl.deleteRestaurant)

module.exports = router;