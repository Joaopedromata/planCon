const { Model, DataTypes } = require('sequelize')

class City extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
        },{
            sequelize
        })
    }

    static associate(models) {
        this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' })
        this.belongsToMany(models.User, { foreignKey: 'city_id', through: 'users_cities', as: 'users' })
    }
}


module.exports = City