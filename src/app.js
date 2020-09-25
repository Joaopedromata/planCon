const express = require('express')
const account = require('./routes/account')
const location = require('./routes/location')
const product = require('./routes/product')
const storage = require('./routes/storage')

const app = express()

app.use(express.json())

app.use('/accounts', account)
app.use('/locations', location)
app.use('/products', product)
app.use('/storages', storage)



module.exports = app