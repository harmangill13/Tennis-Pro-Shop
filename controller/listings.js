const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.render('listings.ejs')
})

router.get('/:index', (req, res) => {
  res.render('showListings.ejs')
})

module.exports = router