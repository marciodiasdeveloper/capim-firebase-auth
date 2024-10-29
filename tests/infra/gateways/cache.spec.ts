import { Cache } from '@/infra/gateways'

jest.mock('ioredis', () => {
  return function () {
    return {
      get: jest.fn().mockResolvedValueOnce(undefined).mockResolvedValueOnce('cache'),
      set: jest.fn().mockResolvedValue('OK'),
      del: jest.fn().mockResolvedValueOnce(0).mockResolvedValueOnce(1),
      exists: jest.fn().mockResolvedValueOnce(0).mockResolvedValueOnce(1)
    }
  }
})
describe('Cache', () => {
  let sut: Cache
  let url: string

  beforeAll(() => {
    url = 'any_url'
    sut = new Cache(url)
  })
  describe('get', () => {
    it('should call get with key cache not exists', async () => {
      const cacheget = await sut.get({
        key: 'aaa'
      })
      expect(cacheget).toEqual(undefined)
    })
    it('should call get with key cache exists', async () => {
      const cacheget = await sut.get({
        key: 'aaa'
      })
      expect(cacheget).toEqual('cache')
    })
  })
  describe('set', () => {
    it('must call set with key and data', async () => {
      const result = await sut.set({ key: 'aaa', data: 'cache' })

      expect(result).toEqual('OK')
    })
    it('must call set with key and data and timestamp', async () => {
      const result = await sut.set({ key: 'aaa', data: 'cache', milliseconds: 10 })

      expect(result).toEqual('OK')
    })
  })

  describe('delete', () => {
    it('must call delete with key and data not exists', async () => {
      const result = await sut.delete({ key: 'aaa' })

      expect(result).toEqual(0)
    })
    it('must call delete with key and data', async () => {
      const result = await sut.delete({ key: 'aaa' })

      expect(result).toEqual(1)
    })
  })

  describe('has', () => {
    it('must call has with key and data not exists', async () => {
      const result = await sut.has({ key: 'aaa' })

      expect(result).toEqual(false)
    })
    it('must call has with key and data', async () => {
      const result = await sut.has({ key: 'aaa' })

      expect(result).toEqual(true)
    })
  })
})
