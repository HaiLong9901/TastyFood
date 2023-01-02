const express = require('express')
const OrderController = require('../controllers/OrderController')
const router = express.Router()
const verifyToken = require('../middlewares/auth')

router.post('/create_order', verifyToken, OrderController.createOrder)

module.exports = router
