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
    // let TastyFood = new User({
    //   name: 'Do Hai Long',
    //   email: 'long@gmail.com',
    //   phone: '0123456',
    //   password: 'acascgsdg',
    //   role: 'admin',
    //   credit: '0123456',
    //   address: 'Ha Noi',
    // })
    // TastyFood.save()
    // let test = new Order({
    //   userId: mongoose.mongo.ObjectId('636d325240a6429ca42e21e0'),
    //   products: [
    //     {
    //       productId: mongoose.mongo.ObjectId('636d331bed6077b50f9d7590'),
    //       quantity: 5,
    //     },
    //   ],
    //   voucher: mongoose.mongo.ObjectId('636d3ba79f59a02639fe5a11'),
    //   address: {
    //     num: 125,
    //     village: 'Duyên Thái',
    //     district: 'Thường Tín',
    //   },
    //   amount: 150000,
    // })
    // let test = new Voucher({
    //   code: 'FREE50',
    //   value: 50,
    // })
    // await test.save()
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
