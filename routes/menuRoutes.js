const router = require('express').Router()

//all functions/methods imported from menu's controller's index.js
const { menuCtrl } = require('../controllers')


// ROUTES - METHODS
router.get("/", menuCtrl.getMenu)
router.post("/", menuCtrl.createMenu)
router.put('/:id', menuCtrl.updateMenu)
router.delete('/:id', menuCtrl.deleteMenu)

module.exports = router;