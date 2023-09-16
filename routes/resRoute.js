const router = require('express').Router()
const { resCtrl } = require('../controllers')

router.get("/", resCtrl.getRes)
router.post("/", resCtrl.createRes)
router.put('/:id', resCtrl.updateRes)
router.delete('/:id', resCtrl.deleteRes)

module.exports = router;