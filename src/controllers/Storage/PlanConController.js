const Cell = require('../../models/Cell')
const Location = require('../../models/Location')
const PlanCon = require('../../models/PlanCon')
const User = require('../../models/User')

module.exports = {

    async store(req, res) {

        const { user_id, location_id, cell_id } = req.params
        const { date } = req.body

        const checkUser = await User.findByPk(user_id)

        if (!checkUser) {
            return res.status(400).json({ error: 'User not found' })
        }

        const checkLocation = await Location.findByPk(location_id)

        if (!checkLocation) {
            return res.status(400).json({ error: 'Location not found' })
        }

        const checkCell = await Cell.findByPk(cell_id)

        if (!checkCell) {
            return res.status(400).json({ error: 'Cell not found' })
        }

        const insert = await PlanCon.create({
            user_id,
            location_id,
            cell_id,
            date
        })

        return res.status(200).json(insert)

    },

    async index(req, res) {

        const show = await PlanCon.findAll()
    
        return res.status(200).json(show)
    
    }
}