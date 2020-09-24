const Router = require('express')
const SignInController = require('./controllers/SignInController')
const checkToken = require('./middlewares/checkToken')

const routes = Router()







routes.post('/signin', SignInController.enter)


module.exports = routes