const express = require('express')
const router = express.Router()

// INDEX
router.get('/', (req, res) => {
  res.render('shoes.ejs')
})

router.get('/:index', (req, res) => {
  res.render('showShoes.ejs')
})

module.exports = router