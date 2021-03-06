const { Model, DataTypes } = require('sequelize')

class Input extends Model {
    static init(sequelize) {
        super.init({
            quantity: DataTypes.INTEGER,
        },{
            sequelize
        })
    }

    static associate(models) {
        this.belongsTo(models.Product, { foreignKey: 'product_id', as: 'product' })
        this.belongsTo(models.Rm, { foreignKey: 'rm_id', as: 'rm' })
    }
}


module.exports = Input