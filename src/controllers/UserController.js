const bcrypt = require('bcryptjs')
const User = require('../models/User')



module.exports = {
    
    async index(req, res){
        
        const users = await User.findAll()

        return res.json(users)
    },

    async store(req, res) {
       
        const saltRounds = 10

        const { name, board, password } = req.body
        
        const checkBoard = await User.findOne({ where: { board }})
    
        if(checkBoard){
            return res.status(400).json({ error: 'User already exists' })
        }
    
        if(password.length <= 8){
            return res.status(400).json({ error: 'Your password must have at least 8 characters' })
        }
    
        const hash = await bcrypt.hashSync(password, saltRounds)

        const user = await User.create({
            name,
            board,
            password: hash
        })
        
        return res.status(200).json(user)
    
    }
}