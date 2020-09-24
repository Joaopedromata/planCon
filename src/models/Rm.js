const { Model, DataTypes } = require('sequelize')

class Rm extends Model {

    static init(sequelize) {
        
        super.init({
            rm: DataTypes.STRING,
            date: DataTypes.DATE
        },{
            sequelize
        })
    }

    static associate(models) {
        this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' })
        this.belongsTo(models.Location, { foreignKey: 'location_id', as: 'location' })
        this.belongsTo(models.Cell, { foreignKey: 'cell_id', as: 'cell' })
    }
}

module.exports = Rm