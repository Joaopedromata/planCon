const { Model, DataTypes } = require('sequelize')

class Input extends Model {

    static init(sequelize) {
        super.init({
            quantity: DataTypes.INTEGER,
            rm: DataTypes.INTEGER,
            date: DataTypes.DATE,
            locality: DataTypes.STRING

        },{
            sequelize
        })
    }

    static associate(models) {
        this.belongsTo(models.Product, { foreignKey: 'productId', as: 'product' })
        this.belongsTo(models.User, { foreignKey: 'responsibleId', as: 'user' })
    }
}

module.exports = Input