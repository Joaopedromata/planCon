const { Model, DataTypes } = require('sequelize')

class SignUp extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            identifier: DataTypes.INTEGER,
            location_id: DataTypes.INTEGER,
            password: DataTypes.STRING
        },{
            sequelize
        })
    }

    static associate(models) {
        this.belongsTo(models.Permission, { foreignKey: 'permission_id', as: 'permission' });
    }
}

SignUp.prototype.toJSON =  function () {
    const values = { ...this.get()};
  
    delete values.password;
    return values;
}


module.exports = SignUp