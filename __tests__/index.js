const { Connection } = require('typeorm')
const database = require('../src/infra/database')

/** @type {Connection} */
let connection

beforeAll(async () => {
  connection = await database
})

beforeEach(async () => {
  await connection.synchronize(true)
})

afterAll(async () => {
  await connection.close()
})
