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

        const show = await Permission.findAll()

        res.status(200).json(show)

    },

    async show(req,res){

        const { permission_id } = req.params
 

        const show = await Permission.findByPk(permission_id, {
            include: { association: 'users' }
        })

        if (!show) {
            return res.status(400).json({ error: 'Permissions not found' })
        }

        res.status(200).json(show)

    }

}