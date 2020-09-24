const Router = require('express')
const CategoryController = require('../controllers/Product/CategoryController')
const UnitController = require('../controllers/Product/UnitController')
const ProductController = require('../controllers/Product/ProductController')

const routes = Router()

routes.post('/categories/:user_id', CategoryController.store)
routes.get('/categories', CategoryController.index)

routes.post('/units/:user_id', UnitController.store)
routes.get('/units', UnitController.index)

routes.post('/:category_id/:unit_id/:user_id', ProductController.store)
routes.get('/', ProductController.index)
routes.get('/:category_id', ProductController.show)

module.exports = routes