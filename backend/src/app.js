const express = require('express')
const log = require('./models/Logger')
const bodyParser = require('body-parser')

const emailRoutes = require('./routes/emailRoutes.js')

let app = express()
app.set('port', 3000)

app.use(bodyParser.json({
  limit: '10mb'
}))
app.use(bodyParser.urlencoded({
  extended: true,
  limit: '10mb'
}))

app.use('/email', emailRoutes)

app.use((req, res, next) => {
  res.status(404).send({
    error: 'End point not valid. Check your address'
  })
})

app.listen(app.get('port'), function () {
  log.info(`Server started on port: ${app.get('port')}`)
})