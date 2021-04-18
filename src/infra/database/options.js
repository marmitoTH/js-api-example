const path = require('path')

const IN_TEST = process.env.NODE_ENV === 'test'

module.exports = {
  synchronize: IN_TEST,
  type: process.env.DB_TYPE,
  url: IN_TEST ? process.env.DB_TEST_URL : process.env.DB_URL,
  entities: [path.join(__dirname, 'models/**/*.js')],
  migrations: [path.join(__dirname, 'migrations/**/*.js')],
  cli: {
    entitiesDir: path.join(__dirname, 'models'),
    migrationsDir: path.join(__dirname, 'migrations')
  }
}
