const mongoose = require('mongoose')

const listingsSchema = new mongoose.Schema({
  listingName: {type: String, required: true},
  img: {type: String, required: true},
  authorName: {type: String, required: true},
  description: {type: String, require: true},
  price: {type: Number, required: true}
})

const Listing = mongoose.model('Listing', listingsSchema)

module.exports = Listing