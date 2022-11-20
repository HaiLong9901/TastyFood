const express = require('express')
const ProductController = require('../controllers/ProductController')
const router = express.Router()
const verifyToken = require('../middlewares/auth')

router.post('/create_product', verifyToken, ProductController.createProduct)

module.exports = router
