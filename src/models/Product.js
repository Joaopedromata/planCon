const { Model, DataTypes } = require('sequelize')

class Product extends Model {
    static init(sequelize) {
        super.init({
            sap: DataTypes.INTEGER,
            description: DataTypes.STRING,
            unit: DataTypes.STRING
        },{
            sequelize
        })
    }
}

module.exports = Product