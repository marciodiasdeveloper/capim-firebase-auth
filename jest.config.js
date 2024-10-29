module.exports = {
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts',
    '!<rootDir>/src/main/**',
    '!<rootDir>/src/**/index.ts',
    '!<rootDir>/src/infra/repos/postgres/migrations/**',
    '!<rootDir>/src/infra/repos/postgres/tenants/migrations/**',
    '!<rootDir>/src/infra/repos/postgres/tenants/entities/**'
  ],
  coverageDirectory: 'coverage',
  coverageProvider: 'babel',
  moduleNameMapper: {
    '@/tests/(.+)': '<rootDir>/tests/$1',
    '@/(.+)': '<rootDir>/src/$1',
    '^axios$': require.resolve('axios')
  },
  testMatch: ['**/*.spec.ts'],
  roots: [
    '<rootDir>/src',
    '<rootDir>/tests'
  ],
  transform: {
    '^.+\\.(t|j)sx?$': ['@swc/jest']
  },
  clearMocks: true,
  setupFiles: ['dotenv/config', './mocks/redis', './mocks/logger']
}
