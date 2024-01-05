const UserAuthService = require("../../services/user/auth.service")

const UserAuthController = {
    register: (req,res,next)=>{
        try {
            return res.status(200).json({
                "message":"Hello from user"
            })
        } catch (error) {
            next(error)
        }
    }
}

module.exports = UserAuthController