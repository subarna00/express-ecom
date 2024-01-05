const express = require('express')
const router = express.Router()

const UserAuthController = require('../../controllers/user/auth.controller')

router.get('/register', UserAuthController.register)


module.exports = router