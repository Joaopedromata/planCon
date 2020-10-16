const { Model, DataTypes } = require('sequelize')

class User extends Model {
    
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            identifier: DataTypes.INTEGER,
            password: DataTypes.STRING
        },{
            sequelize
        })
    }

    static associate(models) {
        this.belongsTo(models.Permission, { foreignKey: 'permission_id', as: 'permission' })
        this.belongsToMany(models.City, { foreignKey: 'user_id', through: 'users_cities', as: 'cities' })
        this.belongsToMany(models.Location, { foreignKey: 'user_id', through: 'users_locations', as: 'locations' })
        this.hasMany(models.Rm, { foreignKey: 'user_id', as: 'usersRm' })
        this.hasMany(models.PlanCon, { foreignKey: 'user_id', as: 'usersPlancon' })
        this.hasMany(models.Cell, { foreignKey: 'user_id', as: 'users' })
    }
}

User.prototype.toJSON =  function () {
    const values = { ...this.get()};
  
    delete values.password;
    return values;
}


module.exports = User