const Input = require('../models/Inputs')
const Product = require('../models/Product')
const User = require('../models/User')

module.exports = {
  
    async index(req, res){

        const input = await Input.findAll({
            include: [
                { association: 'product'}, 
                { association: 'user' }
            ]
        })

        return res.status(200).json(input)
    },


    async store(req, res){

        const { productId, quantity, responsibleId, rm, date, locality } = req.body

        const product = await Product.findByPk(productId)

        if(!product){
            return res.status(400).json({ error: 'Product not found' })
        }

        const responsible = await User.findByPk(responsibleId)

        if(!responsible){
            return res.status(400).json({ error: 'Responsible not found' })
        }


        const input = await Input.create({
            productId,
            quantity,
            responsibleId,
            rm,
            date,
            locality
        })

        

        return res.status(200).json(input)
    }
}