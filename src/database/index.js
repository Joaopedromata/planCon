const Sequelize = require('sequelize')
const dbConfig = require('../config/database')

const User = require('../models/User')
const Product = require('../models/Product')
const Input = require('../models/Inputs')
const Permission = require('../models/Permission')
const SignUp = require('../models/SignUp')
const Location = require('../models/Location')

const connection = new Sequelize(dbConfig)

Permission.init(connection)
//Permission.associate(connection.models)

SignUp.init(connection)
SignUp.associate(connection.models)

Location.init(connection)
Location.associate(connection.models)


User.init(connection)
Product.init(connection)
Input.init(connection)
Input.associate(connection.models)

module.exports = connection