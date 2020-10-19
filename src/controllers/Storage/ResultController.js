const { where } = require('sequelize')
const Input = require('../../models/Inputs')
const Inputs = require('../../models/Inputs')
const Location = require('../../models/Location')
const PlanCon = require('../../models/PlanCon')

module.exports = {
    
    async showStorageByLocations(req, res){
        
        const { product_id, location_id } = req.params
        
        // const sumPlancon = Inputs.sum('quantity', {
        //     where: { product_id }
        // }).then(sum => {
        //     return res.json(sum)
        // })

        const teste = await Location.findByPk(location_id,{ 
            include: [
                {
                    association: 'plancons',
                    include: [{ association: 'outputs' }]
                }
            ]
        })

        res.json(teste)
        
    }
}