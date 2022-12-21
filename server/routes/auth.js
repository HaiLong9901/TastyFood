// require('dotenv').config()
const express = require('express')
const router = express.Router()
const argon2 = require('argon2')
const jwt = require('jsonwebtoken')
const User = require('../models/User')
const UserControler = require('../controllers/UserController')
const verifyToken = require('../middlewares/auth')

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
router.get('/get_user/:id', verifyToken, UserControler.getUser)
router.put('/update/:id', verifyToken, UserControler.updateInfo)

module.exports = router
