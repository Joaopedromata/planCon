const Location = require('../../models/Location')


module.exports = { 

    async store(req, res) {

        const { city, cell_id, user_id } = req.body

        const checkCity = await Location.findOne({ where: { city }})

        if(checkCity){
            return res.status(400).json({ error: 'This city already exists' })
        }

        const insert = await Location.create({
            city,
            cell_id,
            user_id
        })

        res.status(200).json(insert)

    },

    async index(req, res) {

        const { location_id } = req.params

        const checkLocation = await Location.findByPk(location_id)

        if(!checkLocation) {
            return res.status(400).json({ error: 'This Location does not exists' })
        }

        
        const show = await Location.findByPk(location_id)

        return res.status(200).json(show)
    }


}