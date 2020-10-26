const Router = require('express')
const QuantificationController = require('../controllers/Quantification/QuantificationController')

const routes = Router()

routes.post('/create/:user_id/:product_id', QuantificationController.store)

module.exports = routes