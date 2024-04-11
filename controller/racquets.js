const express = require('express')
const router = express.Router()

// INDEX
router.get('/', (req, res) => {
  res.render('racquets.ejs')
})

// SHOW
router.get('/:index', (req, res) => {
  res.render('showRacquet.ejs')
})

module.exports = router