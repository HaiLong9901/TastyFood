const express = require('express')
const argon2 = require('argon2')
const jwt = require('jsonwebtoken')
const User = require('../models/User')
const e = require('express')

const UserControler = {
  register: async (req, res) => {
    const { phone, password, name, confirmPass } = req.body
    if (!phone || !password || !name || !confirmPass)
      return res.status(400).json({
        success: false,
        passage: 'Missing user information',
      })
    if (password !== confirmPass)
      return res.status(400).json({
        success: false,
        passage: 'confirmPassword is false',
      })
    try {
      let user = await User.findOne({ phone })
      if (user)
        return res.status(400).json({
          success: false,
          passage: 'user have already existed',
        })
      const hashPassword = await argon2.hash(password)
      let newUser = new User({
        ...req.body,
        name,
        phone,
        password: hashPassword,
      })

      await newUser.save()

      //return AccessToken

      const accessToken = jwt.sign(
        {
          userId: newUser._id,
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
          expiresIn: '60s',
        },
      )
      return res.json({
        success: true,
        passage: 'register successfully',
        accessToken,
      })
    } catch (error) {
      console.log(error)
    }
  },

  login: async (req, res) => {
    const { phone, password } = req.body
    if (!phone || !password)
      return res.status(400).json({
        success: false,
        passage: 'Missing user information',
      })
    try {
      let user = await User.findOne({ phone })
      if (!user)
        return res.status(400).json({
          success: false,
          passage: 'Incorect phone number',
        })

      const validPassword = await argon2.verify(user.password, password)
      console.log(validPassword)
      if (!validPassword)
        return res.status(400).json({
          success: false,
          passage: 'Incorect password',
        })

      const accessToken = jwt.sign(
        {
          userId: user._id,
        },
        process.env.ACCESS_TOKEN_SECRET,
        // {
        //   expiresIn: '15s',
        // },
      )
      return res.json({
        success: true,
        passage: 'login successfully',
        accessToken,
        // user: user._id,
        // isAdmin: user.isAdmin,
        user: {
          id: user._id,
          isAdmin: user.isAdmin,
          imageURL: user.imageURL,
        },
      })
    } catch (error) {
      console.log(error)
    }
  },

  getUser: async (req, res) => {
    try {
      const user = await User.findById(req.params.id)
      if (!user)
        return res.status(400).json({
          success: false,
          passage: 'User didnt exist',
        })
      return res.json({
        success: true,
        result: user,
      })
    } catch (error) {
      console.log(error)
    }
  },

  updateInfo: async (req, res) => {
    try {
      const { name, imageURL } = req.body
      let updatedInfo
      if (!name && imageURL) updatedInfo = { imageURL }
      else if (name && !imageURL) updatedInfo = { name }
      else if (name && imageURL) updatedInfo = { name, imageURL }
      else
        return res.status(401).json({
          success: false,
          passage: 'No update',
        })
      // const postUpdateCondition = _id: req.params.id, user: req.userId
      updatedInfo = await User.findOneAndUpdate({ _id: req.params.id }, updatedInfo)
      return res.json({
        success: true,
        passage: 'updated successfully',
      })
    } catch (error) {
      console.log(error)
    }
  },
}

module.exports = UserControler
