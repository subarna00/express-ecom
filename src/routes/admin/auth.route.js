const express = require('express')
const router = express.Router()

const AdminAuthController = require('../../controllers/admin/auth.controller')

router.get('/register', AdminAuthController.register)


module.exports = router