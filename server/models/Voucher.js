const mongoose = require('mongoose')
const Schema = mongoose.Schema

const VoucherSchema = new Schema(
  {
    code: {
      type: String,
      required: true,
    },
    value: {
      type: Number,
      require: true,
    },
    startOn: {
      type: Date,
      required: true,
      default: Date.now,
    },
    expiredOn: {
      type: Date,
      required: true,
      default: Date.now,
    },
    apply_for: {
      type: Number,
    },
  },
  {
    timestamps: true,
  },
)

module.exports = mongoose.model('vouchers', VoucherSchema)
