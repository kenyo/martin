const router = require('express').Router()
const pool = require('../config')

const getBooks = (request, response) => {
  pool.query('SELECT * FROM inventory', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

router.get('/', getBooks)

module.exports = router
