const { Model, DataTypes } = require('sequelize')

class Product extends Model {
    static init(sequelize) {
        super.init({
            sap: DataTypes.INTEGER,
            description: DataTypes.STRING
        },{
            sequelize
        })
    }

    static associate(models) {
        this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' })
        this.belongsTo(models.Category, { foreignKey: 'category_id', as: 'category' })
        this.belongsTo(models.Unit, { foreignKey: 'unit_id', as: 'unit' })
        this.hasMany(models.Quantification, { foreignKey: 'quantification_id', as: 'quantifications' })

    }
}

module.exports = Product