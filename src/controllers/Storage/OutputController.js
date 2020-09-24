const Output = require('../../models/Output')
const PlanCon = require('../../models/PlanCon')
const Product = require('../../models/Product')

module.exports = {
    
    async store(req, res) {

        const { product_id, plancon_id } = req.params
        const { quantity } = req.body

        const checkProduct = await Product.findByPk(product_id)

        if (!checkProduct) {
            return res.status(400).json({ error: 'Product not found' })
        }

        const checkPlanCon = await PlanCon.findByPk(plancon_id)

        if (!checkPlanCon) {
            return res.status(400).json({ error: 'PlanCon not found' })
        }

        const insert = await Output.create({
            product_id,
            plancon_id,
            quantity
        })

        return res.status(200).json(insert)
    },

    async index(req, res) {

        const { plancon_id } = req.params
    
        const show = await PlanCon.findByPk(plancon_id, {
            include: { association: 'outputs'}
        })

        if (!show) {
            return res.status(200).json({ error: 'PlanCon not found' })
        }

        return res.status(200).json(show)
    }
}