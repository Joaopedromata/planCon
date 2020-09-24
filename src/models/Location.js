const { Model, DataTypes } = require('sequelize')

class Location extends Model {
    static init(sequelize) {
        super.init({
            city: DataTypes.STRING,
        },{
            sequelize
        })
    }

    static associate(models) {
        this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' })
        this.hasMany(models.Cell, { foreignKey: 'location_id', as: 'cells' })
    }
}


Location.prototype.toJSON =  function () {
    const values = { ...this.get()};
  
    delete values.password;
    return values;
}


module.exports = Location