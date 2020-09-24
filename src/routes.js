const Router = require('express')
const SignInController = require('./controllers/SignInController')
const checkToken = require('./middlewares/checkToken')
const InputController = require('./controllers/InputController')

const routes = Router()







routes.post('/signin', SignInController.enter)

routes.post('/inputs', InputController.store)
routes.get('/inputs', InputController.index)


module.exports = routes