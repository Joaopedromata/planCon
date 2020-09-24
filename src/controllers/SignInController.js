const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const authConfig = require('../config/secret')

const generateToken = (params = {}) => {
    return jwt.sign(params, authConfig.secret)
}

module.exports = {

    async enter(req, res) { 

        const { board, password } = req.body

        const checkBoard = await User.findOne({ where: { board }})

        if(!checkBoard){
            return res.status(400).json({ error: 'Input method error' })
        }

        const checkPassword = await bcrypt.compareSync(password, checkBoard.password)

        if(!checkPassword){
            return res.status(400).json({ error: 'Input method error' })
        }

        return res.status(200).send({
            checkBoard,
            id: checkBoard.id,
            token: generateToken( { id: checkBoard.id })
        })
    }

}