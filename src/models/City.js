const { Model, DataTypes } = require('sequelize')

class City extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            uf: DataTypes.STRING,
        },{
            sequelize
        })
    }

    static associate(models) {
        this.belongsToMany(models.User, { foreignKey: 'city_id', through: 'users_cities', as: 'users' })
    }
}


module.exports = City