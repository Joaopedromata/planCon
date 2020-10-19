const Router = require('express')
const CellController = require('../controllers/Location/CellController')
const CityController = require('../controllers/Location/CityController')
const LocationController = require('../controllers/Location/LocationController')

const routes = Router()

routes.post('/cities', CityController.store)

routes.post('/:city_id', LocationController.store)

routes.get('/user/:user_id', LocationController.showUsersByLocations)
routes.get('/:user_id', LocationController.index)
routes.get('/', LocationController.show)
routes.get('/find/:location_id', LocationController.showLocationById)
routes.get('/history/:location_id', LocationController.showHistoryByLocation)



routes.post('/cells/:location_id/:user_id', CellController.store)
routes.get('/cells/:location_id', CellController.index)
routes.get('/cells/search/:number', CellController.searchCellbynumber)






module.exports = routes