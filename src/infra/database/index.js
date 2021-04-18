const options = require('./options')
const { createConnection } = require('typeorm')

module.exports = createConnection(options)
