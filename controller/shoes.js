const express = require('express')
const router = express.Router()
const Product = require('../models/product.js')

// INDEX
router.get('/', (req, res) => {
  res.render('shoes.ejs')
})

router.get('/:index', (req, res) => {
  res.render('showShoes.ejs')
})

module.exports = router