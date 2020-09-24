const { Model, DataTypes } = require('sequelize')

class PlanCon extends Model {

    static init(sequelize) {
        
        super.init({
            date: DataTypes.DATE,
        },{
            sequelize
        })
    }

    static associate(models) {
        this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' })
        this.belongsTo(models.Location, { foreignKey: 'location_id', as: 'location' })
        this.belongsTo(models.Cell, { foreignKey: 'cell_id', as: 'cell' })
        this.hasMany(models.Output, { foreignKey: 'plancon_id', as: 'outputs' })
    }
}

module.exports = PlanCon