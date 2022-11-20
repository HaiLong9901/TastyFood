const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    address: {
      type: Object,
    },
    credit: {
      type: String,
    },
    imageURL: {
      type: String,
      default: null,
    },
  },
  { timestamps: true },
)

module.exports = mongoose.model('users', UserSchema)
