const Router = require('express')
const PermissionController = require('../controllers/Account/PermissionController')
const UserController = require('../controllers/Account/UserController')
const LogInController = require('../controllers/Account/LogInController')
const checkToken = require('../middlewares/checkToken')

const routes = Router()

routes.post('/permissions', checkToken, PermissionController.store)
routes.get('/permissions', checkToken, PermissionController.index)
routes.get('/permissions/:permission_id', checkToken, PermissionController.show)

routes.post('/', UserController.store)
routes.post('/:user_id/cities', UserController.storeAssocCityUser)
routes.post('/:user_id/locations', UserController.storeAssocLocationUser)
routes.get('/:user_id/collaborators/details', UserController.findPlanconAndRmByUser)

routes.post('/login', LogInController.store)



module.exports = routes