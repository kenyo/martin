const router = require('express').Router()
const pool = require('../config')

const getBooks = (request, response) => {
  pool.query('SELECT * FROM inventory WHERE quantity > 0', (error, results) => {
    if (error) {
      console.log(process.env.DATABASE_URL)
      throw error
    }
    response.status(200).json(results.rows)
  })
}

router.get('/', getBooks)

module.exports = router
