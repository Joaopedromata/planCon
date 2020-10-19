const Router = require('express')
const InputController = require('../controllers/Storage/InputController')
const RmController = require('../controllers/Storage/RmController')
const PlanConController = require('../controllers/Storage/PlanConController')
const OutputController = require('../controllers/Storage/OutputController')
const CheckOutController = require('../controllers/Storage/CheckOutController')
const ResultController = require('../controllers/Storage/ResultController')

const routes = Router()

routes.post('/rm/:user_id/:location_id', RmController.store)
routes.get('/rm', RmController.index)

routes.post('/inputs/:product_id/:rm_id', InputController.store)
routes.get('/inputs/:rm_id', InputController.index)

routes.post('/plancon/:user_id/:location_id/:cell_id', PlanConController.store)
routes.get('/plancon', PlanConController.index)

routes.post('/outputs/:product_id/:plancon_id', OutputController.store)
routes.get('/outputs/:plancon_id', OutputController.index)

routes.post('/outputs/checkout/:output_id/:user_id', CheckOutController.store)
routes.get('/outputs/checkout/:output_id', CheckOutController.index)


routes.get('/inputs/quantity/sum/:product_id/:location_id', ResultController.showStorageByLocations)


module.exports = routes
