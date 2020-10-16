const { Model, DataTypes } = require('sequelize')

class Unit extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
        },{
            sequelize
        })
    }

    static associate(models) {
        this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' })
        this.hasMany(models.Product, { foreignKey: 'unit_id', as: 'units' })
    }
}

module.exports = Unit