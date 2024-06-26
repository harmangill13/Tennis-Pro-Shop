const express = require('express')
const methodOverride = require('method-override')
const app = express()
require('dotenv').config()
const mongoose = require('mongoose')
const mongoURI = process.env.MONGO_URI
const PORT = process.env.PORT

// MIDDLEWARE
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))
app.use(express.static('public'))

// CONTROLLERS
const racquetsController = require('./controller/racquets.js')
app.use('/racquets', racquetsController)
const ballsController = require('./controller/balls.js')
app.use('/balls', ballsController)
const shoesController = require('./controller/shoes.js')
app.use('/shoes', shoesController)
const apparelController = require('./controller/apparel.js')
app.use('/apparel', apparelController)
const listingsController = require('./controller/listings.js')
app.use('/listings', listingsController)

// ROUTES
app.get('/home', (req, res) => {
  res.render('home.ejs')
})


// CONNECT TO MONGO
mongoose.connect(mongoURI)
const db = mongoose.connection
db.on('error', (err) => console.log(err.message + ' error with mongo connection'))
db.on('connected', () => console.log('mongo is connected'))
db.on('disconnected', () => console.log('mongo disconnected'))



// SERVER CONNECTION
app.listen(PORT, () => {
  console.log(`listening on ${PORT}`)
})

// POST MVP //
// - Add carousel
// - Look into creating a filter by brand button
// - Look into sort by price High to low and low-high buttons
