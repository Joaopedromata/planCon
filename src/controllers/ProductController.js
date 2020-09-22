const Product = require('../models/Product')

module.exports = {

    async index(req, res){

        const product = await Product.findAll()

        return res.status(200).json(product)
    },

    async store (req, res){
        const { sap, description, unit  } = req.body

        const checkSap = await Product.findOne({ where: { sap }})

        if(checkSap){
            return res.status(400).json({ error: 'This SAP already exists' })
        }

        const checkDescription = await Product.findOne({ where: { description }})

        if(checkDescription){
            return res.status(400).json({ error: 'This Description already exists' })
        }

        const product = await Product.create({
            sap,
            description,
            unit 
        })

        return res.status(200).json(product)
    }

}