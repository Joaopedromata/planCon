const Location = require('../../models/Location')
const User = require('../../models/User')

module.exports = {

    async index(req,res) {

        const { user_id } = req.params

        const show = await User.findByPk(user_id,{
            include: { association: 'locations' }
        })

        if (!show) {
            return res.status(400).json({ error: 'Users not found' })
        }

       
        res.status(200).json(show)

    },

    async store(req, res) {
        
        const { user_id } = req.params
        const { city } = req.body

        const checkCity = await Location.findOne({ where: { city }})

        if (checkCity) {
            return res.status(400).json({ error: 'This city already exists' })
        }

        const checkUser = await User.findByPk(user_id)

        if (!checkUser) {
            return res.status(400).json({ error: 'Users not found' })
        }

        const insert = await Location.create({
            city,
            user_id
        })

        res.status(200).json(insert)
    },

    async show(req, res) {

        
        const show = await Location.findAll({ include: { association: 'user' }})

        res.status(200).json(show)
    }
}