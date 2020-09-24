const Cell = require('../../models/Cell')
const Location = require('../../models/Location')
const Rm = require('../../models/Rm')
const User = require('../../models/User')

module.exports = {

    async store(req, res) {

        const { user_id, location_id, cell_id } = req.params

        const { rm, date } = req.body

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

        const insert = await Rm.create({
            rm,
            date,
            location_id,
            cell_id,
            user_id
        })
        
        return res.status(200).json(insert)


        
    }
}