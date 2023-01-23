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
    const orderStatus = req.params.status
    try {
      if (!orderStatus || orderStatus === 'all') {
        const orders = await Order.find({ userId: req.userId })
          .populate({
            path: 'products',
            populate: {
              path: 'productId',
              select: ['name', 'imageURL', 'original_price', 'sale_price'],
            },
          })
          .sort({ updatedAt: -1 })
          .exec()
        return res.json({
          success: true,
          passage: 'Get all orders successfully',
          result: orders,
        })
      }
      const orders = await Order.find({ userId: req.userId, status: orderStatus })
        .populate({
          path: 'products',
          populate: {
            path: 'productId',
            select: ['name', 'imageURL', 'original_price', 'sale_price'],
          },
        })
        .sort({ updatedAt: -1 })
        .exec()
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
      let order = await Order.findById(orderId)
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

  getAllOrderByAdmin: async (req, res) => {
    const orderStatus = req.params.status
    try {
      if (!orderStatus || orderStatus === 'all') {
        const orders = await Order.find()
          .populate({
            path: 'products',
            populate: {
              path: 'productId',
              select: ['name'],
            },
          })
          .populate('userId', ['name', 'phone'])
          .sort({ updatedAt: -1 })
          .exec()
        return res.json({
          success: true,
          result: orders,
        })
      }
      const orders = await Order.find({ status: orderStatus })
        .populate({
          path: 'products',
          populate: {
            path: 'productId',
            select: ['name'],
          },
        })
        .populate('userId', ['name', 'phone'])
        .sort({ updatedAt: -1 })
        .exec()
      return res.json({
        success: true,
        result: orders,
      })
    } catch (error) {
      console.log(error)
    }
  },

  getDetailOrderAdmin: async (req, res) => {
    const orderId = req.params.orderId
    if (!orderId)
      return res.status(400).json({
        success: false,
        passage: 'Missing information',
      })
    try {
      const order = await Order.findById(orderId)
        .populate('userId', ['name', 'phone'])
        .populate({
          path: 'products',
          populate: {
            path: 'productId',
            select: ['name', 'original_price', 'sale_price'],
          },
        })
        .populate('voucher', ['code', 'value'])
        .exec()
      return res.json({
        success: true,
        result: order,
      })
    } catch (error) {
      console.log(error)
    }
  },

  getStatisticSales: async (req, res) => {
    // const { type } = req.params
    // if (!type)
    //   return res.status(400).json({
    //     success: false,
    //     passage: 'Missing type of statistic',
    //   })
    try {
      const today = new Date(Date.now())
      const lastDay = new Date().setDate(today.getDate() - 6)
      console.log('month: ', today.getMonth())
      const orders = await Order.find({
        createdAt: {
          $gte: new Date(lastDay),
          $lte: today,
        },
        status: 'success',
      })
      let sales = []
      for (let i = 0; i < 7; ++i) {
        const date = new Date(new Date().setDate(today.getDate() - i))
        const amount = orders.reduce((total, order) => {
          // console.log(new Date(order.createdAt).toDateString(), date.toDateString())
          if (new Date(order.createdAt).toDateString() === date.toDateString()) return total + order.amount
          return total + 0
        }, 0)
        // console.log({
        //   date,
        //   amount,
        // })
        sales.push({
          date,
          amount,
        })
      }
      res.json({
        success: true,
        result: sales.reverse(),
        orders,
      })
    } catch (error) {
      console.log(error)
    }
  },
}

module.exports = OrderController
