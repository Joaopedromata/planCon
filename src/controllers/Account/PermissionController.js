const Permission = require('../../models/Permission')

module.exports = {

    async store(req, res){

        const { permission } = req.body
    
        const checkPermission = await Permission.findOne({ where: { permission } })

        if(checkPermission){
            return res.status(400).json({ error: 'This permission already exists' })
        }

        const insert = await Permission.create({ permission })

        return res.status(200).json(insert)

    },

    async index(req,res){

        const show = await Permission.findAll({ 
            include: { association: 'permissions'}
        })

        res.status(200).json(show)

    }

}