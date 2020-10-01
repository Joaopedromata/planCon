const express = require('express')
const cors = require('cors')
const account = require('./routes/account')
const location = require('./routes/location')
const product = require('./routes/product')
const storage = require('./routes/storage')
const canIUsed = require('./routes/canIUsed')

const app = express()

app.use(cors())
app.use(express.json())

app.use('/accounts', account)
app.use('/locations', location)
app.use('/products', product)
app.use('/storages', storage)



module.exports = app