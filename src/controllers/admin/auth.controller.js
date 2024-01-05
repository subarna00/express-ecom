const AdminAuthService = require("../../services/admin/auth.service")

const AdminAuthController = {
    register: (req,res,next)=>{
        try {
            return res.status(200).json({
                "message":"Hello from admin"
            })
        } catch (error) {
            next(error)
        }
    }
}

module.exports = AdminAuthController