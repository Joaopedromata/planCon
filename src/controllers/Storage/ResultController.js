const { where } = require('sequelize')
const Input = require('../../models/Inputs')
const { sum } = require('../../models/Inputs')
const Inputs = require('../../models/Inputs')
const Location = require('../../models/Location')
const PlanCon = require('../../models/PlanCon')
const sequelize = require('sequelize')
const Product = require('../../models/Product')

module.exports = {
    
    async showStorageByLocationsPositive(req, res){
        
        const { product_id, location_id } = req.params

        const checkProduct = await Product.findByPk(product_id)

        if (!checkProduct){
            res.status(400).json({ error: 'Product not found'})
        }

        const resultPositive = await Location.findByPk(location_id,{ 
            attributes: ['name'],
            include: [
                {
                    association: 'rms',
                    attributes: ['user_id'],
                    include: { 
                                association: 'inputs',
                                where: { product_id },
                                group: 'product_id',
                                attributes: [
                                                [sequelize.fn('sum', sequelize.col('quantity')), 'total'],
                                        ],
                                include: [
                                    { 
                                        association: 'product',
                                        attributes: ['sap', 'description'],
                                        include: [
                                            {
                                                association: 'unit',
                                                attributes: ['name']
                                            }, 
                                            {
                                                association: 'category',
                                                attributes: ['name']
                                            }
                                        ],
                                    }
                                ]
                        },
                    
                }
            ]
            
        })

        if(!resultPositive) {
            return res.status(400).json({ error: 'error'})
        }

        if(!resultPositive.rms[0]){
            return res.status(400).json({ error: 'This product does not have input' } )
        }

        return res.status(200).json(resultPositive)

    },



    async showStorageByLocationsNegative(req, res){
        const { product_id, location_id } = req.params

        const checkProduct = await Product.findByPk(product_id)

        if (!checkProduct){
            res.status(400).json({ error: 'Product not found'})
        }

        const resultNegative = await Location.findByPk(location_id,{ 
            include: [
                {
                    association: 'plancons',
                    attributes: ['user_id'],
                    include: { 
                                association: 'outputs',
                                where: { product_id },
                                group: 'product_id',
                                attributes: [
                                                [sequelize.fn('sum', sequelize.col('quantity')), 'total'],
                                        ],
                                include: [
                                    { 
                                        association: 'product',
                                        attributes: ['sap', 'description'],
                                        include: [
                                            {
                                                association: 'unit',
                                                attributes: ['name']
                                            }, 
                                            {
                                                association: 'category',
                                                attributes: ['name']
                                            }
                                        ],
                                    }
                                ]
                        },
                    
                }
            ]
        })

        if(!resultNegative) {
            return res.status(400).json({ error: 'error'})
        }

        if(!resultNegative.plancons[0]){
            return res.status(400).json({ error: 'This product does not have output' } )
        }

        return res.status(200).json(resultNegative)
    }
}