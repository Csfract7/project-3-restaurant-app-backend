const router = require('express').Router()
const resRoute = require('./resRoute')

router.use('/restaurant', resRoute)

module.exports = router;
