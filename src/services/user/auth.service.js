const { } = require('../../models')

const NotFoundException = require('../../exceptions/NotFoundException')
const BadRequestException = require('../../exceptions/BadRequestException')
const UserAuthService = {

register: ()=> new Promise(async (resolve,reject)=>{
    try {
        resolve();
    } catch (error) {
        reject(error)
    }
})
}
module.exports = UserAuthService