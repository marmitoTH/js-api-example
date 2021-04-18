module.exports = {
  clearMocks: true,
  collectCoverageFrom: ['src/**'],
  coverageDirectory: '__tests__/coverage',
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/infra/database/migrations/',
    '/*.json'
  ],
  coverageProvider: 'v8',
  setupFiles: ['dotenv/config'],
  setupFilesAfterEnv: ['./__tests__/index'],
  testEnvironment: 'node',
  testMatch: ['**/__tests__/**/*.test.js']
}
