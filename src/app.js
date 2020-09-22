const express = require('express')
const routes = require('./routes')
const account = require('./routes/account')
const location = require('./routes/location')

const app = express()

app.use(express.json())

app.use('/account', account)
app.use('/location', location)


app.use(routes)


module.exports = app