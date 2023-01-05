const express = require('express')
const Voucher = require('../models/Voucher')
const _ = require('lodash')

const VoucherController = {
  createVoucher: async (req, res) => {
    const { code, value, expiredOn, apply_for, startOn } = req.body
    if (!code || !value || !expiredOn)
      return res.status(400).json({
        success: false,
        passage: 'Missing information',
      })
    try {
      const newVoucher = new Voucher({
        code: code.toUpperCase(),
        value,
        expiredOn,
        apply_for,
        startOn,
      })
      await newVoucher.save()
      return res.json({
        success: true,
        passage: 'Create voucher successfully',
      })
    } catch (error) {
      console.log(error)
    }
  },

  getVoucherById: async (req, res) => {
    const id = req.params.id
    if (!id)
      return res.status(400).json({
        success: false,
        passage: 'Missing information',
      })
    try {
      const voucher = await Voucher.findById(id).exec()
      if (!voucher)
        return res.status(400).json({
          success: false,
          passage: 'Voucher is not found',
        })
      return res.json({
        success: true,
        result: voucher,
      })
    } catch (error) {
      console.log(error)
    }
  },

  getVoucherByCode: async (req, res) => {
    const code = req.params.code
    if (!code)
      return res.status(400).json({
        success: false,
        passage: 'Missing information',
      })
    try {
      const voucher = await Voucher.find({ code }).exec()
      if (!voucher)
        return res.status(400).json({
          success: false,
          passage: 'Voucher is not found',
        })
      return res.json({
        success: true,
        result: voucher,
      })
    } catch (error) {
      console.log(error)
    }
  },

  getAllVouchers: async (req, res) => {
    try {
      const voucher = await Voucher.find()
      res.json({
        success: true,
        result: voucher,
      })
    } catch (error) {
      console.log(error)
    }
  },
}

module.exports = VoucherController
