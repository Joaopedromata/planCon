const { Model, DataTypes } = require('sequelize')

class CheckOut extends Model {
    static init(sequelize) {
        super.init({
            quantity: DataTypes.INTEGER,
        },{
            sequelize
        })
    }

    static associate(models) {
        this.belongsTo(models.Output, { foreignKey: 'output_id', as: 'output' })
        this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' })
    }
}


module.exports = CheckOut