const router = require('express').Router()
const axios = require('axios')

const slackWebhook = 'https://hooks.slack.com/services/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'

router.get('/order', function(req, res, next) {
  // axios.post(slackWebhook, {text: "flart"})

  // post order to slack
  // post order to db

})

module.exports = router
