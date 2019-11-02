const nodemailer = require('nodemailer')
const log = require('./Logger')
const config = require('../configuration/config')
const xoauth2 = require('xoauth2')

var fs = require('fs')
const path = require('path')

let transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    type: 'OAuth2',
    user: config.nodemailer.user,
    clientId: config.nodemailer.clientId,
    clientSecret: config.nodemailer.clientSecret,
    refreshToken: config.nodemailer.refreshToken,
    accessToken: config.nodemailer.accessToken
  }
})

module.exports.send = (htmlEmail) => {
  return new Promise((resolve, reject) => {
    let message = {
      from: `Marco <${config.nodemailer.user}>`,
      to: config.nodemailer.user,
      subject: 'Contact Me',
      html: htmlEmail,
    }
    transporter.sendMail(message, (err, info) => {
      if (err) {
        log.error(err)
        reject(err)
      }
      log.info('email sent')
      resolve(info)
      // transporter.close()
    })
  })
}


module.exports.readHtml = (htmlFileName) => {
  return new Promise((resolve, reject) => {
    const htmlPath = path.join(__dirname, '../emailsTemplate/'+ htmlFileName+'.html')
    fs.readFile(htmlPath, 'utf8', function (err, html) {
      if(err) {
        log.error(err)
        reject(err)
      } else {
        resolve(html)
      }
    })
  })
}
