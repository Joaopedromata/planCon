const Router = require('express')
const RmController = require('../controllers/Storage/RmController')

const routes = Router()

routes.post('/rm/:user_id/:location_id/:cell_id', RmController.store)


module.exports = routes