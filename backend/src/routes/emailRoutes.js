const express = require('express')
const router = express.Router()
const validateEmail = require('../validators/validateEmail')
const emailController = require('../controllers/emailController')

router.post('/contactMe', validateEmail.general, emailController.contactMe)

module.exports = router