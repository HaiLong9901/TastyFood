const express = require('express')
const Order = require('../models/Order')
const _ = require('lodash')

const OrderController = {
  createOrder: async (req, res) => {
    const { address, products, voucher, amount } = req.body
    if (!address || !products || !products.length || !amount)
      return res.status(400).json({
        success: false,
        passage: 'Missing information',
      })
    try {
      const order = new Order({
        userId: req.userId,
        ...req.body,
      })

      await order.save()
      return res.json({
        success: true,
        passage: 'place order successfully',
      })
    } catch (error) {
      console.log(error)
    }
  },

  getOrderById: async (req, res) => {
    const { orderId } = req.params.id
    if (!orderId)
      return res.status(400).json({
        success: false,
        passage: 'Missing information',
      })

    try {
      const order = await Order.find({
        _id: orderId,
        userId: req.userId,
      })
      return res.json({
        success: true,
        passage: 'get order by id successfully',
        result: order,
      })
    } catch (error) {
      console.log(error)
    }
  },

  getAllOrders: async (req, res) => {
    const { orderStatus } = req.params.status
    try {
      if (!orderStatus) {
        const orders = await Order.find({ userId: req.userId })
        return res.json({
          success: true,
          passage: 'Get all orders successfully',
          result: orders,
        })
      }
      const orders = await Order.find({ userId: req.userId, status: orderStatus })
      return res.json({
        success: true,
        passage: `Get all orders with status ${orderStatus} successfully`,
        result: orders,
      })
    } catch (error) {
      console.log(error)
    }
  },

  updateStatus: async (req, res) => {
    const { orderId, status } = req.body
    if (!orderId)
      return res.status(400).json({
        success: false,
        passage: 'Missing order id',
      })
    try {
      const order = await Order.find({
        _id: orderId,
        userId: req.userId,
      })
      if (!order)
        return res.status(400).json({
          success: false,
          passage: 'Order not found',
        })

      order.status = status
      await order.save()

      return res.json({
        success: true,
        passage: 'Update order status successfully',
      })
    } catch (error) {
      console.log(error)
    }
  },
}

module.exports = OrderController
