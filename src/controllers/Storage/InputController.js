const Rm = require('../../models/Rm')
const Input = require('../../models/Inputs')
const Product = require('../../models/Product')

module.exports = {

    async index(req, res){
        
        const { rm_id } = req.params

        const show = await Rm.findByPk(rm_id,{
            include: [
                { 
                association: 'inputs' ,
                include : [
                    { 
                        association: 'product',
                        include : [{ association: 'unit' }], 
                    }
                    ],
                },
                { association: 'location', include : [{ association: 'city' }], }
            ]
        })

        if (!show) {
            res.status(400).json({ error: 'Rm not found' })
        }

        return res.status(200).json(show)
    },
  

    async store(req, res){

        const { product_id, rm_id } = req.params
        const { quantity } = req.body

        const checkProduct = await Product.findByPk(product_id)

        if(!checkProduct){
            return res.status(400).json({ error: 'Product not found' })
        }

        const checkRm = await Rm.findByPk(rm_id)

        if(!checkRm){
            return res.status(400).json({ error: 'Responsible not found' })
        }


        const insert = await Input.create({
            product_id,
            quantity,
            rm_id,
        })

        

        return res.status(200).json(insert)
    }
}