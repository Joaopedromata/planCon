const City = require('../../models/City')

module.exports = {

    async store(req, res){
        
        const { name, uf } = req.body

        const checkCity = await City.findOne({ where: { name }})

        if (checkCity) {
            return res.status(400).json({ error: 'This city already exists' })
        }

        const insert = await City.create({
            name,
            uf
        })

        res.status(200).json(insert)
    }

    
}