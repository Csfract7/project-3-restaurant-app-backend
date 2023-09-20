const router = require('express').Router()

//all functions/methods imported from controller's index.js
const { menuCtrls } = require('../controllers')


// ROUTES - METHODS
router.get("/", menuCtrls.getMenu)
router.post("/", menuCtrls.createMenu)
router.put('/:id', menuCtrls.updateMenu)
router.delete('/:id', menuCtrls.deleteMenu)

module.exports = router;