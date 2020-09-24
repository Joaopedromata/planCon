const { Model, DataTypes } = require('sequelize')

class Output extends Model {
    static init(sequelize) {
        super.init({
            quantity: DataTypes.INTEGER,
        },{
            sequelize
        })
    }

    static associate(models) {
        this.belongsTo(models.Product, { foreignKey: 'product_id', as: 'product' })
        this.belongsTo(models.PlanCon, { foreignKey: 'plancon_id', as: 'plancon' })
        this.hasMany(models.CheckOut, { foreignKey: 'output_id', as: 'outs' })
    }
}


module.exports = Output