const Location = require('../../models/Location')
const User = require('../../models/User')
const City = require('../../models/City')
const { Op } = require('sequelize')


module.exports = {

    async index(req,res) {

        const { user_id } = req.params 
        
        const show = await User.findByPk(user_id, { 
            include: [
                {
                    association: 'locations',
                    through: { attributes: [] },
                    include: [{ association: 'city'}, { association: 'cells'}]
                },
            ]
        })

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

        

        const show = await Location.findAll({ 
            include: [
                {
                    association: 'users',
                    through: { attributes: [] } 
                }
            ],
        })

        
        res.status(200).json(show)
    },

    async showUsersByLocations(req, res) {
        const { user_id } = req.params 

        const show = await User.findByPk(user_id, { 
            include: [
                {
                    association: 'locations',
                    through: { attributes: [] },
                    include: [
                        { 
                            association: 'users', 
                            through: { attributes: [] },
                            where: { id: {[Op.not] : user_id} }
                        }
                    ],
                },
            ]
        })


        res.status(200).json(show)
    },

    async showLocationById(req, res) {

        const { location_id } = req.params

        const show = await Location.findByPk(location_id)

        if (!show) {
            return res.status(400).json({ error: 'Locations not found' })
        }

        return res.status(200).json(show)
    }
}