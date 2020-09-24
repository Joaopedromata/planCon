const { Model, DataTypes } = require('sequelize')

class Cell extends Model {
    static init(sequelize) {
        super.init({
            number: DataTypes.INTEGER,
        },{
            sequelize
        })
    }

    static associate(models) {
        this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' })
        this.belongsTo(models.Location, { foreignKey: 'location_id', as: 'location' })
    }
}


module.exports = Cell