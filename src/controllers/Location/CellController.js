const Cell = require('../../models/Cell')
const Location = require('../../models/Location')
const User = require('../../models/User')

module.exports = {
    
    async index(req, res) {

        const { location_id } = req.params

        const show = await Location.findByPk(location_id,{
            include: { association: 'cells' },
        })

        if (!show) {
            return res.status(400).json({ error: 'Location not found' })
        }

        return res.status(200).json(show)
    },

    async store(req, res) {
        
        const { location_id, user_id } = req.params
        const { number } = req.body

        const checkLocation = await Location.findByPk(location_id)

        console.log(checkLocation)
        if (!checkLocation) {
            return res.status(400).json({ error: 'Location not found' })
        }

        const checkUser = await User.findByPk(user_id)

        if (!checkUser) {
            return res.status(400).json({ error: 'User not found' })
        }

        const checkCell = await Cell.findOne({ where: { number }})

        if (checkCell) {
            return res.status(400).json({ error: 'This cell already exists' })
        }

        const insert = await Cell.create({
            location_id,
            user_id,
            number
        })

        return res.status(200).json(insert)

    }
    
}