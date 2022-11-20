const express = require('express')
const Product = require('../models/Product')

const ProductController = {
  createProduct: async (req, res) => {
    const { name, original_price, sale_price, imageURL, desc, genre } = req.body
    if (!name || !original_price || !imageURL || !genre)
      return res.status(400).json({
        success: false,
        passage: 'Missing information',
      })

    try {
      let testExist = await Product.findOne({ name })
      if (testExist)
        return res.status(400).json({
          success: false,
          passage: 'This product has already existed',
        })

      const product = new Product({
        name,
        original_price,
        sale_price,
        imageURL,
        desc,
        genre,
      })

      await product.save()

      return res.json({
        success: true,
        passage: 'Create product successfully',
        product,
      })
    } catch (error) {
      console.log(error)
    }
  },
}

module.exports = ProductController
