const { Model, DataTypes } = require('sequelize');

class Permission extends Model {
    static init(sequelize) {
        super.init({
            permission: DataTypes.INTEGER,
        },{
            sequelize
        })
    }

    static associate(models) {
        this.hasMany(models.User, { foreignKey: 'permission_id', as: 'users' })
    }
    
}

Permission.prototype.toJSON =  function () {
    const values = { ...this.get()};
  
    delete values.password;
    return values;
}


module.exports = Permission