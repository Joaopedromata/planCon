const City = require('../../models/City')
const User = require('../../models/User')


module.exports = {

    async store(req, res){
        
        const { name } = req.body

        const checkCity = await City.findOne({ where: { name }})

        if (checkCity) {
            return res.status(400).json({ error: 'This city already exists' })
        }

        const insert = await City.create({
            name
        })

        res.status(200).json(insert)
    }
}