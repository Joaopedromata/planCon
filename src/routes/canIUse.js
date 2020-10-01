const Router = require('express') 

const routes = Router()
const checkToken = require('../middlewares/checkToken')

routes.get('/caniuse', checkToken, (req, res) => {
    return res.status(200).json({ success: 'Now you can access the planCon' })
})

module.exports = routes