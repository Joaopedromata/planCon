const Quantification = require('../../models/Quantification')

module.exports = {
    async store(req, res){        
        const { user_id, product_id } = req.params
        const { quantity } = req.body

        const insert = await Quantification.create({
            product_id,
            quantity,
            user_id
        })

        return res.status(200).json(insert)
    }
}