const SignUp = require('../../models/SignUp')
const bcrypt = require('bcryptjs')

module.exports = {
    
    async store(req, res) {

        const { name, identifier, password, permission_id, location_id } = req.body

        const checkIdentifier = await SignUp.findOne({ where: { identifier }})

        if(checkIdentifier){
            return res.status(400).json({ error: 'This user already exists' })
        }

        if(password.length <= 8){
            return res.status(400).json({ error: 'Your password must have at least 8 characters' })
        }

        const saltRounds = 10

        const hash = await bcrypt.hashSync(password, saltRounds)

        const insert = await SignUp.create({
            name, 
            identifier, 
            password: hash, 
            permission_id, 
            location_id
        })

        return res.status(200).json(insert)

    }

}