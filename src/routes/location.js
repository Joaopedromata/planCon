const Router = require('express')
const LocationController = require('../controllers/Location/LocationController')

const routes = Router()

routes.post('/new', LocationController.store)
routes.get('/show/:location_id', LocationController.index)

module.exports = routes