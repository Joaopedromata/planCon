const Location = require('../../models/Location')
const User = require('../../models/User')
const City = require('../../models/City')

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
        
        const { city_id } = req.params
        const { name } = req.body

        const checkName = await Location.findOne({ where: { name }})

        if (checkName) {
            return res.status(400).json({ error: 'This location already exists' })
        }

        const checkCity = await City.findByPk(city_id)

        if (!checkCity) {
            return res.status(400).json({ error: 'City does not exists' })
        }

        const insert = await Location.create({
            name,
            city_id
        })

        res.status(200).json(insert)
    },

    async show(req, res) {

        
        const show = await Location.findAll({ include: { association: 'user' }})

        res.status(200).json(show)
    }
}