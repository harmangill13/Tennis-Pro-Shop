const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.render('balls.ejs')
})

router.get('/:index', (req, res) => {
  res.render('showTennisBalls.ejs')
})


module.exports = router