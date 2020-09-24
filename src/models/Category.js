const { Model, DataTypes } = require('sequelize')

class Category extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
        },{
            sequelize
        })
    }

    static associate(models) {
        this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' })
        this.hasMany(models.Product, { foreignKey: 'category_id', as: 'products' })
    }
}


module.exports = Category