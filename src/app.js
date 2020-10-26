const express = require('express')
const cors = require('cors')
const account = require('./routes/account')
const location = require('./routes/location')
const product = require('./routes/product')
const storage = require('./routes/storage')
const canIUse = require('./routes/canIUse')
const quantification = require('./routes/quantification')

const app = express()

app.use(cors())
app.use(express.json())

app.use('/accounts', account)
app.use('/locations', location)
app.use('/products', product)
app.use('/storages', storage)
app.use('/check', canIUse)
app.use('/quantifications', quantification)



module.exports = app