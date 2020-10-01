const { verify } = require('jsonwebtoken')
const authConfig = require('../config/secret')

module.exports = async function checkToken(req, res, next) {

        const authHeader = req.headers.authorization

        
        if(!authHeader) {
            return res.status(401).json({ error: 'Token is missing' })
        }

        const [ , token ] = authHeader.split(' ')
        
        const decoded = await verify(token, authConfig.secret, (err, decoded) => {

            if (err) {
                return res.status(401).send({ error: 'Token invalid' })
            }

            req.userId = decoded.id
            return next()

        })
    }

