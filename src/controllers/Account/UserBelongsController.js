const User = require('../../models/User')
const City = require('../../models/City')

module.exports = {

    async store(req, res) {
        
        const { user_id, city_id } = req.params
    
        const user = await User.findByPk(user_id)

        //const city = await City.create({ city_id })
    
        const [ city ] = await City.findOrCreate({
            where: { city_id }
        }) 

        await user.addCity()

    }
}