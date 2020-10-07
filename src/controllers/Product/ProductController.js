const Category = require('../../models/Category')
const Unit = require('../../models/Unit')
const User = require('../../models/User')
const Product = require('../../models/Product')

module.exports = {

    async index(req, res){

        const product = await Product.findAll()

        return res.status(200).json(product)
    },

    async store(req, res){

        const { category_id, unit_id, user_id } = req.params
        
        const { sap, description } = req.body
        
        const checkCategory = await Category.findByPk(category_id)

        if (!checkCategory) {
            return res.status(400).json({ error: 'Unit not found' })
        }

        const checkUnit = await Unit.findByPk(unit_id)

        if (!checkUnit) {
            return res.status(400).json({ error: 'Unit not found' })
        }

        const checkUser = await User.findByPk(user_id)

        if (!checkUser) {
            return res.status(400).json({ error: 'User not found' })
        }

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
            category_id,
            unit_id,
            user_id
        })

        return res.status(200).json(product)
    },

    async show(req, res){

        const { category_id } = req.params
    
        const show = await Category.findByPk(category_id, {
            include: { association: 'products' }
        })

        if (!show) {
            return res.status(400).json({ error: 'Category not found' })
        }

        return res.status(200).json(show)
    },

    async searchProductsbySap(req, res) {

        const { sap } = req.params

        const show = await Product.findOne({ where: { sap } })

        if (!show) {
            return res.status(400).json({ error: 'Product not found' })
        }

        return res.status(200).json(show)
        
    }

}