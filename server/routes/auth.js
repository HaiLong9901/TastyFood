// require('dotenv').config()
const express = require('express')
const router = express.Router()
const argon2 = require('argon2')
const jwt = require('jsonwebtoken')
const User = require('../models/User')
const UserControler = require('../controllers/UserController')
const verifyToken = require('../middlewares/auth')
const verifyAdminRole = require('../middlewares/authAdmin')

// @route api/auth/register
// @desc register user
// @access Public
router.post('/register', UserControler.register)

// router.post('/login', async (req, res) => {
//   const { phone, name } = req.body
//   if (!phone || !name)
//     return res.status(400).json({
//       success: false,
//       passage: 'Missing phone number or name',
//     })

//   try {
//     const user = await User.findOne({ phone })
//     if (!user)
//       return res.status(400).json({
//         success: false,
//         passage: 'user does not exist',
//       })
//   } catch (error) {}
// })

router.post('/login', UserControler.login)
router.get('/get_user', verifyToken, UserControler.getUser)
router.put('/update', verifyToken, UserControler.updateInfo)
router.put('/update_address', verifyToken, UserControler.updateAddress)
router.put('/change_password', verifyToken, UserControler.changePassword)
router.put('/delete_address', verifyToken, UserControler.deleteAddress)
router.get('/getAdminList', verifyAdminRole, UserControler.getAdminList)

module.exports = router
