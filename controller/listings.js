const express = require('express')
const router = express.Router()
const Listing = require('../models/listings.js')

router.get('/', (req, res) => {
  res.render('listings.ejs')
})

router.get('/new', (req, res) => {
  res.render('listings.ejs')
})

router.get('/:index', (req, res) => {
  res.render('showListings.ejs')
})



module.exports = router