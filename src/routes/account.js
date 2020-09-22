const Router = require('express')
const PermissionController = require('../controllers/Account/PermissionController')
const SignUpController = require('../controllers/Account/SignUpController')

const routes = Router()

routes.post('/permissions', PermissionController.store)
routes.get('/permissions', PermissionController.index)

routes.post('/signup', SignUpController.store)

module.exports = routes