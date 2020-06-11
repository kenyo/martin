const router = require('express').Router()

router.use('/slack', require('./slack'))

module.exports = router
