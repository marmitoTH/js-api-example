const IN_TEST = process.env.NODE_ENV === 'test'

module.exports = {
  synchronize: IN_TEST,
  type: process.env.DB_TYPE,
  url: IN_TEST ? process.env.DB_TEST_URL : process.env.DB_URL,
  entities: ['src/infra/database/models/**/*.js'],
  migrations: ['src/infra/database/migrations/**/*.js'],
  cli: {
    entitiesDir: 'src/infra/database/models',
    migrationsDir: 'src/infra/database/migrations'
  }
}
