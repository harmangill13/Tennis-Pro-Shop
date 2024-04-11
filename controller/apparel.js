const express = require('express')
const router = express.Router()

// INDEX
router.get('/', (req, res) => {
  res.render('apparel.ejs')
})

router.get('/:index', (req, res) => {
  res.render('showApparel.ejs')
})

module.exports = router