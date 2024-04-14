const mongoose = require('mongoose')

const productsSchema = new mongoose.Schema({
  name: {type: String, required: true},
  brandName: {type: String, required: true},
  img: {type: String, required: true},
  description: {type: String, required: true},
  price: {type: Number, required: true},
  quantity: {type: Number, required: true},
  type: {type: String, required: true}
})

const Product = mongoose.model('Product', productsSchema)

module.exports = Product