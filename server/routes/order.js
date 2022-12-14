const express = require('express')
const OrderController = require('../controllers/OrderController')
const router = express.Router()
const verifyToken = require('../middlewares/auth')
const verifyAdminRole = require('../middlewares/authAdmin')

router.post('/create_order', verifyToken, OrderController.createOrder)
router.get('/get_order/:id', verifyToken, OrderController.getOrderById)
router.get('/get_all/:status', verifyToken, OrderController.getAllOrders)
router.put('/update_status', verifyToken, OrderController.updateStatus)
router.get('/get_all_byadmin/:status', verifyAdminRole, OrderController.getAllOrderByAdmin)
router.get('/get_detail_byAd/:orderId', verifyAdminRole, OrderController.getDetailOrderAdmin)

module.exports = router
