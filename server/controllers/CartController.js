const express = require('express')
const Cart = require('../models/Cart')
const User = require('../models/User')

const CartController = {
  getCart: async (req, res) => {
    try {
      const user = await User.findById(req.params.userId)
      if (!user)
        return res.status(400).json({
          success: false,
          passage: 'User didnt exist',
        })

      return res.json({
        success: true,
      })
    } catch (error) {
      console.log(error)
    }
  },
}

module.exports = CartController
