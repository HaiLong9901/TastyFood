const express = require('express')
const CartController = require('../controllers/CartController')
const router = express.Router()
const verifyToken = require('../middlewares/auth')

router.post('/get_cart/:userId', verifyToken, CartController.getCart)

module.exports = router
