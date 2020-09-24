const Unit = require('../../models/Unit')
const User = require('../../models/User')

module.exports = {

    async store(req, res) {

        const { user_id } = req.params
        const { name } = req.body

        const checkUser = await User.findByPk(user_id)

        if (!checkUser) {
            return res.status(400).json({ error: 'User not found' })
        }

        const checkUnit = await Unit.findOne({ where: { name }})

        if (checkUnit) {
            return res.status(400).json({ error: 'This category already exists' })
        }

        const insert = await Unit.create({
            name,
            user_id
        })
        
        return res.status(200).json(insert)

    },

    async index(req, res) {

        const show = await Unit.findAll()

        res.status(200).json(show)

    }
}