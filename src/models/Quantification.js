const { Model, DataTypes } = require('sequelize')

class Quantification extends Model {
    static init(sequelize) {
        super.init({
            quantity: DataTypes.INTEGER,
        },{
            sequelize
        })
    }

    static associate(models) {
        this.belongsTo(models.Product, { foreignKey: 'product_id', as: 'products' })
        this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' })
        this.hasMany(models.Cell, { foreignKey: 'quantification_id', as: 'cell' })
    }
}


module.exports = Quantification