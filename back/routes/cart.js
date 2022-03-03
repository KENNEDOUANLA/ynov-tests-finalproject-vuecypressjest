const express = require ('express')
const router = express.Router()
const cartController = require('../controllers/cart')

router.post('/addProduct', cartController.addProduct)
router.get('/getCart', cartController.getCart)
router.post('/deleteProduct', cartController.deleteProduct)

module.exports = router