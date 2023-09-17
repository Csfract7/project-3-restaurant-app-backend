const router = require('express').Router()
const restaurantRoute = require('./restaurantRoutes') //import the restaurant routing js page
const menuRoute = require('./menuRoutes')

router.use('/restaurant', restaurantRoute)
router.use('/menu', menuRoute)


module.exports = router;
