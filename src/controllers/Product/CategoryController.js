const Category = require('../../models/Category')
const User = require('../../models/User')

module.exports = {
    
    async store(req, res) {
        
        const { user_id } = req.params
        const { name } = req.body

        const checkUser = await User.findByPk(user_id)

        if (!checkUser) {
            return res.status(400).json({ error: 'User not found' })
        }

        const checkCategory = await Category.findOne({ where: { name }})

        if (checkCategory) {
            return res.status(400).json({ error: 'This category already exists' })
        }

        const insert = await Category.create({
            name,
            user_id
        })
        
        return res.status(200).json(insert)
        
    },

    async index(req, res) {

        const show = await Category.findAll()

        res.status(200).json(show)

    },

    async showCategoryByPK(req, res) {
        const { category_id } = req.params

        const show = await Category.findByPk(category_id)

        if (!show) {
            return res.status(400).json({ error: 'Category not found' })
        }

        return res.status(200).json(show)

    }
    
}