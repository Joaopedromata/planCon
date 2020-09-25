const City = require('../../models/City')
const User = require('../../models/User')


module.exports = {

    async store(req, res){
        
        const { user_id } = req.params
        const { name } = req.body

        const checkCity = await City.findOne({ where: { name }})

        if (checkCity) {
            return res.status(400).json({ error: 'This city already exists' })
        }

        const checkUser = await User.findByPk(user_id)

        if (!checkUser) {
            return res.status(400).json({ error: 'Users not found' })
        }

        const insert = await City.create({
            name,
            user_id
        })

        res.status(200).json(insert)
    }
}