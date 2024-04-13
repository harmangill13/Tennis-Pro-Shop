const mongoose = require('mongoose')

const productsSchema = new mongoose.Schema({
  name: {type: String, required: true},
  brandName: {type: String, required: true},
  img: {type: String, required: true},
  description: {type: String, require: true},
  price: {type: Number, required: true},
  quantity: {type: Number, required: true}
})

const Product = mongoose.model('Product', productsSchema)

module.exports = Product