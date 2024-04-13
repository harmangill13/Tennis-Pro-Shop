const express = require('express')
const router = express.Router()
const Product = require('../models/product.js')
const racquetsSeed = require('../seedData.js')

// INDEX
router.get('/', async (req, res) => {
  const foundRacquets = await Product.find({})
  res.render('racquets.ejs', {
    racquets: foundRacquets
  })
})

// SEED
router.get('/seed', async (req, res) => {
  const racquets = await Product.create(racquetsSeed)
  res.redirect('/racquets')
})

// SHOW
router.get('/:index', async (req, res) => {
  const foundRacquets = await Product.findById(req.params.id)
  res.render('showRacquet.ejs', {
    racquets: foundRacquets
  })
})



module.exports = router