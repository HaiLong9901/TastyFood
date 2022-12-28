const express = require('express')
const CartController = require('../controllers/CartController')
const router = express.Router()
const verifyToken = require('../middlewares/auth')

router.get('/get_cart', verifyToken, CartController.getCart)
router.put('/add_to_cart', verifyToken, CartController.addToCart)

module.exports = router
