const Email = require('../models/Email')
const log = require('../models/Logger')
const cheerio = require('cheerio')

function contactMe(req, res) {
  const { body } = req
  log.info(body)

  Email.readHtml('contactMe')
  .then((html) => {
    const $ = cheerio.load(html)
    $('#name').text(body.name)
    $('#lastName').text(body.lastName)
    $('#email').text(body.email)
    $('#message').text(body.message)

    const htmlEmail = $.html()

    Email.send(htmlEmail)
    .then(() => {
      res.status(200).send('ok')
    })
    .catch((err) => {
      log.error(err)
      res.status(500).send('not ok')
    })
  })
}

module.exports.contactMe = contactMe