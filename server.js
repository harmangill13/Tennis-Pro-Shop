const express = require('express')
const app = express()
require('dotenv').config()
const PORT = process.env.PORT


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

// SERVER CONNECTION
app.listen(PORT, () => {
  console.log(`listening on ${PORT}`)
})