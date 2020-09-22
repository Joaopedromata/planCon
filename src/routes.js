const Router = require('express')
const SignInController = require('./controllers/SignInController')
const UserController = require('./controllers/UserController')
const checkToken = require('./middlewares/checkToken')
const ProductController = require('./controllers/ProductController')
const InputController = require('./controllers/InputController')

const routes = Router()







routes.post('/signin', SignInController.enter)

routes.post('/users', UserController.store)
routes.get('/users', UserController.index)

routes.post('/product', checkToken, ProductController.store)
routes.get('/product', checkToken, ProductController.index)

routes.post('/inputs', InputController.store)
routes.get('/inputs', InputController.index)


module.exports = routes