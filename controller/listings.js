const express = require('express')
const router = express.Router()
const Listing = require('../models/listings.js')

// INDEX
router.get('/', (req, res) => {
  res.render('listings.ejs')
})

// NEW
router.get('/new', (req, res) => {
  res.render('listings.ejs')
})

// SHOW
router.get('/:index', (req, res) => {
  res.render('showListings.ejs')
})


// CREATE
router.post('/', async (req, res) => {
  console.log(req.body)
  try {
    const newListing = await Listing.create(req.body)
    res.send(newListing)
  } catch (err) {
    console.log('ERROR WITH LISTINGS POST', err)
    res.status(500).send(err)

  }
})

module.exports = router