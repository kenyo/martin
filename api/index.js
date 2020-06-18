const router = require('express').Router()

router.use('/slack', require('./slack'))
router.use('/inventory', require('./inventory'))

module.exports = router
