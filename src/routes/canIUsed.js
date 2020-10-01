const Router = require('express') 

const routes = Router()
const checkToken = require('../middlewares/checkToken')

routes.get('/canIUsed', checkToken, (req, res) => {
    return res.status(200)
})

module.exports = routes