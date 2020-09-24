const jwt = require('jsonwebtoken')
const authConfig = require('../config/secret')

module.exports = {

    generateToken(params = {}) {
        return jwt.sign(params, authConfig.secret)
    }

}



