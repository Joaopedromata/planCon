const Sequelize = require('sequelize')
const dbConfig = require('../config/database')

const User = require('../models/User')
const Input = require('../models/Inputs')
const Permission = require('../models/Permission')
const Location = require('../models/Location')
const Cell = require('../models/Cell')
const Category = require('../models/Category')
const Unit = require('../models/Unit')
const Product = require('../models/Product')
const Rm = require('../models/Rm')

const connection = new Sequelize(dbConfig)

Permission.init(connection)
User.init(connection)
Location.init(connection)
Cell.init(connection)
Category.init(connection)
Unit.init(connection)
Product.init(connection)
Rm.init(connection)

User.associate(connection.models)
Permission.associate(connection.models)
Location.associate(connection.models)
Cell.associate(connection.models)
Category.associate(connection.models)
Unit.associate(connection.models)
Product.associate(connection.models)
Rm.associate(connection.models)

module.exports = connection