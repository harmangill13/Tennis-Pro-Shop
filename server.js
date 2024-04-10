const express = require('express')
const app = express()
require('dotenv').config()
const PORT = process.env.PORT


// CONTROLLERS
const racquetsController = require('./controller/racquets.js')
app.use('/racquets', racquetsController)

// ROUTES
app.get('/home', (req, res) => {
  res.send('hi')
})

// SERVER CONNECTION
app.listen(PORT, () => {
  console.log(`listening on ${PORT}`)
})