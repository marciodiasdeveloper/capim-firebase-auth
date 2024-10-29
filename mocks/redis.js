
/* eslint-disable no-undef */
jest.mock('ioredis', () => {
  return function () {
    return {
      get: jest.fn().mockResolvedValue(undefined),
      set: jest.fn().mockResolvedValue('OK'),
      del: jest.fn().mockResolvedValueOnce(0).mockResolvedValueOnce(1),
      exists: jest.fn().mockResolvedValueOnce(0).mockResolvedValueOnce(1)
    }
  }
})
