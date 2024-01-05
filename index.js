const express = require('express')
const app = express()
require('./server')

app.use(express.json())

const adminRoutePath = "/admin"
const userRoutePath = "/api"

// admin routes
const AdminAuthRoutes = require("./src/routes/admin/auth.route")
app.use(adminRoutePath+'/auth',AdminAuthRoutes)

// user routes
const UserAuthRoutes = require("./src/routes/user/auth.route")
app.use(userRoutePath+'/auth',UserAuthRoutes)


// handle error
app.use((error, req, res, next) => {
    console.log(error)
    const status = error?.status || 500
    return res.status(status).json({success: false, message: error?.message || 'Internal Server Error'})
})

app.listen(5000, () => console.log("Server is running on http://localhost:5000"))