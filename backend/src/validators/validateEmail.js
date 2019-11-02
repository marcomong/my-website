const validator = require('validator')
const log = require('../models/Logger')

module.exports.general = (req, res, next) => {
  const {
    body
  } = req

  switch (this.validate(body)) {
    case -1:
      next()
      break
    case 0:
      log.error('Error while registering new user: email not valid.', body)
      res.status(412).send({
        error: `Request is invalid. Check your email.`
      })
      break
    case 1:
      log.error('Error in body: : name not valid.', body)
      res.status(412).send({
        error: `Request is invalid. Check your name.`
      })
      break
    case 2:
      log.error('Error in body: last Name not valid.', body)
      res.status(412).send({
        error: `Request is invalid. Check your last Name.`
      })
      break
    case 3:
      log.error('Error in body: message is not valid.', body)
      res.status(412).send({
        error: `Request is invalid. Check your message content.`
      })
      break
    default:
      res.status(400).send({
        error: 'Invalid registration information'
      })
      break
  }

}

module.exports.validate = (body) => {
  if (body.hasOwnProperty('email')) {
    if (!body.email || !validator.isEmail(body.email))
      return 0
  } else
    return 0

  if (body.hasOwnProperty('name')) {
    if (!body.name || !validator.isAlpha(body.name))
      return 1
  }

  if (body.hasOwnProperty('lastName')) {
    if (!body.lastName || !validator.isAlpha(body.lastName))
      return 2
  }

  if (body.hasOwnProperty('message')) {
    if (!body.message || validator.isEmpty(body.message))
      return 3
  } else
    return 3

  return -1
}