const { Model, DataTypes } = require('sequelize')

class Location extends Model {
    static init(sequelize) {
        super.init({
            city: DataTypes.STRING,
            cell_id: DataTypes.INTEGER,
        },{
            sequelize
        })
    }

    static associate(models) {
        this.belongsTo(models.SignUp, { foreignKey: 'user_id', as: 'user' })
    }
}

module.exports = Location