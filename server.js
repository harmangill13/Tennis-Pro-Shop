const express = require('express')
const app = express()
require('dotenv').config()
const PORT = process.env.PORT

const racquetsController = require('./controller/racquets.js')
app.use('/racquets', racquetsController)

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`)
})