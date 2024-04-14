const express = require('express')
const router = express.Router()
const Product = require('../models/product.js')
const seedData = require('../seedData.js')


// INDEX
router.get('/', async (req, res) => {
  const apparelFound = await Product.find({type: 'apparel'})
  res.render('apparel.ejs', {
    apparel: apparelFound
  })
})

// SEED
// router.get('/seed', async (req, res) => {
//   const apparel = await Product.create(seedData)
//   res.redirect('/apparel')
// })

// SHOW
router.get('/:index', async (req, res) => {
  const apparelFound = await Product.find(req.params.id)
  res.render('showApparel.ejs', {
    apparel: apparelFound
  })
})

module.exports = router