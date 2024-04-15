const express = require('express')
const router = express.Router()
const Product = require('../models/product.js')
const seedData = require('../seedData.js')


// INDEX
router.get('/', async (req, res) => {
  const foundApparels = await Product.find({type: 'apparel'})
  res.render('apparel.ejs', {
    apparels: foundApparels
  })
})

// SEED
// router.get('/seed', async (req, res) => {
//   const apparel = await Product.create(seedData)
//   res.redirect('/apparel')
// })

// SHOW
router.get('/:id', async (req, res) => {
  const foundApparel = await Product.findById(req.params.id)
  res.render('showApparel.ejs', {
    apparel: foundApparel
  })
})

module.exports = router