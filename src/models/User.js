const { Model, DataTypes } = require('sequelize')

class User extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            board: DataTypes.INTEGER,
            password: DataTypes.STRING
        },{
            sequelize
        })
    }
}

User.prototype.toJSON =  function () {
    const values = { ...this.get()};
  
    delete values.password;
    return values;
}


module.exports = User