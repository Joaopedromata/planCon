const CheckOut = require('../../models/CheckOut')
const Output = require('../../models/Output')
const User = require('../../models/User')

module.exports = {
   
    async store(req, res){
        
        const { output_id, user_id } = req.params
        const { quantity } = req.body
        
        const checkOutput = await Output.findByPk(output_id)

        if (!checkOutput) {
            return res.status(400).json({ error: 'Output not found' })
        }

        const checkUser = await User.findByPk(user_id)

        if (!checkUser) {
            return res.status(400).json({ error: 'User not found' })
        }

        const insert = await CheckOut.create({
            output_id,
            quantity,
            user_id
        })

        return res.status(200).json(insert)


    },

    async index(req, res) {

        const { output_id } = req.params

        const show = await Output.findByPk(output_id, {
            include: { association: 'outs' }
        })

        if(!show) {
            return res.status(400).json({ error: 'Output not found' })
        }

        return res.status(200).json(show)
    }
}