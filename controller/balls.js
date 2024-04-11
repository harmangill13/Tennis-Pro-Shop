const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.send('balls')
})

module.exports = router