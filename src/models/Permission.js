const { Model, DataTypes } = require('sequelize')

class Permission extends Model {
    static init(sequelize) {
        super.init({
            permission: DataTypes.INTEGER,
        },{
            sequelize
        })
    }

    // static associate(models) {
    //     this.hasMany(models.SignUp, { foreignKey: 'permission_id', as: 'permissions' });
    // }

}


module.exports = Permission