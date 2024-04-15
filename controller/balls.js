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
router.get('/:id', async (req, res) => {
  const foundBall = await Product.findById(req.params.id)
  res.render('showTennisBalls.ejs', {
    ball: foundBall
  })
})



module.exports = router