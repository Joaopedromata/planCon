const Router = require('express')
const PermissionController = require('../controllers/Account/PermissionController')
const UserController = require('../controllers/Account/UserController')
const LogInController = require('../controllers/Account/LogInController')
const { route } = require('../routes')

const routes = Router()

routes.post('/permissions', PermissionController.store)
routes.get('/permissions', PermissionController.index)
routes.get('/permissions/:permission_id', PermissionController.show)

routes.post('/', UserController.store)

routes.post('/login', LogInController.store)

module.exports = routes