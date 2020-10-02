const bcrypt = require('bcryptjs')
const Permission = require('../../models/Permission')
const User = require('../../models/User')



module.exports = {
    
    async index(req, res){
        
        const users = await User.findAll()

        return res.json(users)
    },

    async store(req, res) {
       
        const saltRounds = 10

        const { name, identifier, password, permission_id } = req.body

        const checkPermission = await Permission.findByPk(permission_id)

        if (!checkPermission){
            return res.status(400).json({ error: 'Permission not found' })
        }
        
        const checkIdentifier = await User.findOne({ where: { identifier }})
    
        if (checkIdentifier){
            return res.status(400).json({ error: 'User already exists' })
        }
    
        if (password.length <= 8){
            return res.status(400).json({ error: 'Your password must have at least 8 characters' })
        }
    
        const hash = await bcrypt.hashSync(password, saltRounds)

        const user = await User.create({
            name,
            identifier,
            password: hash,
            permission_id
        })

       //await user.setCities()
        
        return res.status(200).json(user)
    
    },

    async teste(req, res) {

        const { user_id } = req.params

        const { cities } = req.body

        const user = await User.findByPk(user_id)

        //await user.update(cities)

        await user.setCities(cities)

        res.json({ oi : 'ooi'})

    }

}