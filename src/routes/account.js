const Router = require('express')
const PermissionController = require('../controllers/Account/PermissionController')
const UserController = require('../controllers/Account/UserController')
const LogInController = require('../controllers/Account/LogInController')
const checkToken = require('../middlewares/checkToken')

const UserBelongsController = require('../controllers/Account/UserBelongsController')

const routes = Router()

routes.post('/permissions', checkToken, PermissionController.store)
routes.get('/permissions', checkToken, PermissionController.index)
routes.get('/permissions/:permission_id', checkToken, PermissionController.show)

routes.post('/', UserController.store)

routes.post('/login', LogInController.store)

routes.post('/teste/:user_id/:city_id', UserBelongsController.store)


module.exports = routes