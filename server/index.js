require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const { ObjectId } = require('mongoose')
const AuthRouter = require('./routes/auth')
const ProductRouter = require('./routes/product')
const User = require('./models/User')
const Product = require('./models/Product')
const Voucher = require('./models/Voucher')
const Order = require('./models/Order')
const Cart = require('./models/Cart')
const Review = require('./models/Review')

const app = express()
app.use(express.json())

const connectDb = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://longdh9901:longdh9901@cluster0.uhqd5sb.mongodb.net/?retryWrites=true&w=majority',
    )
    console.log('mongodb connected')
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}
connectDb()

app.use('/api/auth', AuthRouter)
app.use('/api/product', ProductRouter)
app.get('/', (req, res) => res.send('Hello world'))

const port = 5000

app.listen(port, () => console.log(`server started on port ${port}`))
