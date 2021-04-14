const path = require('path')

const IN_TEST = process.env.NODE_ENV === 'test'

module.exports = {
  synchronize: IN_TEST,
  type: IN_TEST ? 'sqlite' : process.env.DB_TYPE,
  database: IN_TEST ? path.join(__dirname, 'sqlite.db') : undefined,
  url: IN_TEST ? undefined : process.env.DB_URL,
  entities: ['src/infra/database/models/**/*.js'],
  migrations: ['src/infra/database/migrations/**/*.js'],
  cli: {
    entitiesDir: 'src/infra/database/models',
    migrationsDir: 'src/infra/database/migrations'
  }
}
