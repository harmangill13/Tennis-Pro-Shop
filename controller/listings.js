const express = require('express')
const router = express.Router()
const Listing = require('../models/listings.js')

// INDEX
router.get('/', async (req, res) => {
  const foundListings = await Listing.find({})
  res.render('listings.ejs', {
    listings: foundListings
  })
})

// NEW
router.get('/new', (req, res) => {
  res.render('newListings.ejs')
})

// SHOW
router.get('/:id', async (req, res) => {
  const foundListing = await Listing.findById(req.params.id)
  res.render('showListings.ejs', {
    listing: foundListing
  })
})

// EDIT
router.get('/:id/edit', async (req, res) => {
  const foundListing = await Listing.findById(req.params.id)
  res.render('editListings.ejs', {
    listing: foundListing
  })
})

// Edit Put route
router.put('/:id', async (req, res) => {
  try {
    const updateListing = await Listing.findByIdAndUpdate(req.params.id, req.body)
    res.redirect('/listings/' + updateListing.id)
  } catch (err) {
    console.log("ERROR IN EDIT ROUTE ", err)
    res.status(500).send(err)
  }
})

// CREATE
router.post('/', async (req, res) => {
  console.log(req.body)
  try {
    const newListing = await Listing.create(req.body)
    res.redirect('/listings')
  } catch (err) {
    console.log('ERROR WITH LISTINGS POST', err)
    res.status(500).send(err)

  }
})

module.exports = router