const Router = require('express')
const CellController = require('../controllers/Location/CellController')
const CityController = require('../controllers/Location/CityController')
const LocationController = require('../controllers/Location/LocationController')

const routes = Router()

routes.post('/cities', CityController.store)

routes.post('/:city_id/:user_id', LocationController.store)

routes.get('/:user_id', LocationController.index)
routes.get('/', LocationController.show)

routes.post('/cells/:location_id/:user_id', CellController.store)
routes.get('/cells/:location_id', CellController.index)



module.exports = routes