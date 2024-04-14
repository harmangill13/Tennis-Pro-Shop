const express = require('express')
const router = express.Router()
const Product = require('../models/product.js')
const seedData = require('../seedData.js')

// INDEX
router.get('/', async (req, res) => {
  const foundShoes = await Product.find({type: 'shoes'})
  res.render('shoes.ejs', {
    shoes: foundShoes
  })
})

// SEED
// router.get('/seed', async (req, res) => {
//  const shoes = await Product.create(seedData)
//   res.redirect('/shoes')
// })

// SHOW
router.get('/:index', async (req, res) => {
  const foundShoes = await Product.findById(req.params.id)
  res.render('showShoes.ejs', {
    shoes: foundShoes
  })
})

module.exports = router