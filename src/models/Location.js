const { Model, DataTypes } = require('sequelize')

class Location extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
        },{
            sequelize
        })
    }

    static associate(models) {
        this.belongsToMany(models.User, { foreignKey: 'location_id', through: 'users_locations', as: 'users' })
        this.belongsTo(models.City, { foreignKey: 'city_id', as: 'city' })
        this.hasMany(models.Cell, { foreignKey: 'location_id', as: 'cells' })
        this.hasMany(models.PlanCon, { foreignKey: 'location_id', as: 'plancons' })
        this.hasMany(models.Rm, { foreignKey: 'location_id', as: 'rms' })
        // this.belongsTo(models.Rm, { foreignKey: 'location_id', as: 'location' })   
    }
}


Location.prototype.toJSON =  function () {
    const values = { ...this.get()};
  
    delete values.password;
    return values;
}


module.exports = Location