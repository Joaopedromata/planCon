const { where } = require('sequelize')
const Input = require('../../models/Inputs')
const { sum } = require('../../models/Inputs')
const Inputs = require('../../models/Inputs')
const Location = require('../../models/Location')
const PlanCon = require('../../models/PlanCon')
const sequelize = require('sequelize')

module.exports = {
    
    async showStorageByLocations(req, res){
        
        const { product_id, location_id } = req.params

        // const result = await Location.findByPk(location_id,{ 
        //     include: [
        //         {
        //             association: 'rms',
        //             // association: 'rms',
        //             include: [
        //                 { 
        //                     association: 'inputs',
        //                     // where: { product_id },
        //                     group: 'product_id'
        //                 },
        //             ]
        //         },
                
        //     ]
        // })

        

        // return res.status(200).json(result)
        
        // const show = await Inputs.findAll({ 
        //     // attributes: [
                
        //     //     sequelize.fn('sum', sequelize.col('quantity'))
        //     // ]
        // })

        // const show = await Inputs.sum('quantity', {
        //     group: 'product_id',
          
        //     where: {rm_id: 185}
        // })

        const show = await Inputs.findAll({ 
            //group: 'product_id', 
            attributes: ['product_id', [sequelize.fn('sum', sequelize.col('quantity')), 'total'], 'product_id']
            })
        return res.json(show)

    }
}