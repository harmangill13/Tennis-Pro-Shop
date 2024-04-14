const express = require('express')
const router = express.Router()
const Product = require('../models/product.js')
const seedData = require('../seedData.js')

// INDEX
router.get('/', async (req, res) => {
  const foundBalls = await Product.find({type: 'balls'})
  res.render('balls.ejs', {
    balls: foundBalls
  })
})

// SEED
// router.get('/seed', async (req, res) => {
//   const balls = await Product.create(seedData)
//   res.redirect('/balls')
// })

// SHOW
router.get('/:index', async (req, res) => {
  const foundBalls = await Product.findById(req.params.id)
  res.render('showTennisBalls.ejs', {
    balls: foundBalls
  })
})



module.exports = router