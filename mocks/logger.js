/* eslint-disable no-undef */
const logger = {
  debug: jest.fn(),
  log: jest.fn(),
  add: jest.fn(),
  error: jest.fn(),
  info: jest.fn()
}

jest.mock('winston', () => ({
  format: {
    colorize: jest.fn(),
    combine: jest.fn(),
    label: jest.fn(),
    timestamp: jest.fn(),
    printf: jest.fn(),
    errors: jest.fn(),
    splat: jest.fn(),
    json: jest.fn(),
    simple: jest.fn(),
    prettyPrint: jest.fn()
  },
  add: jest.fn(),
  createLogger: jest.fn().mockReturnValue(logger),
  transports: {
    Console: jest.fn(),
    File: jest.fn()
  }
}))
jest.mock('winston-loki')
