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
        
        // const product = await Product.findAll({
        //     include: ['unit', 'category'],
            
        // })

        
        
        const { product_id, location_id } = req.params

        const resultPositive = await Location.findByPk(location_id,{ 
            include: [
                {
                    association: 'rms',
                    include: [
                        { 
                            association: 'inputs',
                            where: { product_id },
                            group: 'product_id',
                            attributes: [
                                [sequelize.fn('sum', sequelize.col('quantity')), 'quantity'],
                            ],
                            include: [
                                { 
                                    association: 'product',
                                    include: ['unit', 'category'],
                                }
                            ]
                        },
                    ],
                },
            ]
        })

        if(!resultPositive) {
            return res.status(400).json({ error: 'error'})
        }

        const resultNegative = await Location.findByPk(location_id,{ 
            include: [
                {
                    association: 'plancons',
                    include: [
                        { 
                            association: 'outputs',
                            where: { product_id },
                            group: 'product_id',
                            attributes: [
                                [sequelize.fn('sum', sequelize.col('quantity')), 'total'],
                            ]
                        },
                    ]
                },
                
            ]
        })


        if(!resultNegative) {
            return res.status(400).json({ error: 'error'})
        }

        const positive = resultPositive.rms[0].inputs[0]
        const negative = resultNegative.plancons[0].outputs[0]
        
        return res.status(200).json(resultPositive)
        //return res.status(200).json({ positive, negative })

    },



    async showStorageByLocationsNegative(req, res){
        const { product_id, location_id } = req.params

        const resultNegative = await Location.findByPk(location_id,{ 
            include: [
                {
                    association: 'plancons',
                    include: [
                        { 
                            association: 'outputs',
                            where: { product_id },
                            group: 'product_id',
                            attributes: [
                                [sequelize.fn('sum', sequelize.col('quantity')), 'total'],
                            ]
                        },
                    ]
                },
                
            ]
        })

        return res.status(200).json(resultNegative.plancons)
    }
}