// require('dotenv').config()
const express = require('express')
const router = express.Router()
const argon2 = require('argon2')
const jwt = require('jsonwebtoken')
const User = require('../models/User')
const UserControler = require('../controllers/UserController')

// @route api/auth/register
// @desc register user
// @access Public
// router.post('/register', async (req, res) => {
//   const { phone, password, name, confirmPass } = req.body
//   if (!phone || !password || !name || !confirmPass)
//     return res.status(400).json({
//       success: false,
//       passage: 'Missing user information',
//     })
//   if (password !== confirmPass)
//     return res.status(400).json({
//       success: false,
//       passage: 'confirmPassword is false',
//     })
//   try {
//     let user = await User.findOne({ phone })
//     if (user)
//       return res.status(400).json({
//         success: false,
//         passage: 'user have already existed',
//       })
//     const hashPassword = await argon2.hash(password)
//     let newUser = new User({
//       name,
//       phone,
//       password: hashPassword,
//       ...req,
//     })

//     await newUser.save()

//     //return AccessToken

//     const accessToken = jwt.sign(
//       {
//         userId: newUser._id,
//       },
//       process.env.ACCESS_TOKEN_SECRET,
//     )
//     return res.json({
//       success: true,
//       passage: 'register successfully',
//       accessToken,
//     })
//   } catch (error) {
//     console.log(error)
//   }
// })
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

module.exports = router
