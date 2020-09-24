const User = require('../../models/User')
const { generateToken } = require('../../helpers/gerenateToken')
const bcrypt = require('bcryptjs')


module.exports = {
     
    async store(req, res) { 

        const { identifier, password } = req.body

        const user = await User.findOne({ where: { identifier }})

        if(!user){
            return res.status(400).json({ error: 'Input method error' })
        }

        const checkPassword = await bcrypt.compareSync(password, user.password)

        if(!checkPassword){
            return res.status(400).json({ error: 'Input method error' })
        }

        
        return res.status(200).send({
            user,
            token: generateToken( { id: user.id })
        })

            
    }
}