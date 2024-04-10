const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.render('racquets.ejs')
})

router.get('/:index', (req, res) => {
  res.send('hi')
})

module.exports = router