require('express-async-errors')

const express = require('express')
const router = require('./router')
const errorHandler = require('./middlewares/errorHandler')

const app = express()

app.use(express.json())
app.use(router)
app.use(errorHandler)

module.exports = app
