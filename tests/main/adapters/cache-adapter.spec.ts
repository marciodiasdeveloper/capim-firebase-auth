import { Middleware } from '@/application/middlewares'
import { CacheGet, CacheSet } from '@/domain/contracts/gateways'
import { CacheAdapter } from '@/main/adapters'
import { mock, MockProxy } from 'jest-mock-extended'

describe('CacheAdapter', () => {
  let middleware: MockProxy<Middleware>
  let cache: MockProxy<CacheGet & CacheSet>
  let sut: CacheAdapter

  beforeAll(() => {
    middleware = mock<Middleware>()
    middleware.handle.mockResolvedValue({
      statusCode: 200,
      data: {
        emptyProp: '',
        nullProp: null,
        undefinedProp: undefined,
        prop: 'any_value'
      }
    })
    cache = mock<CacheGet & CacheSet>()
    cache.get.mockResolvedValue(undefined)
    cache.set.mockResolvedValue('OK')
  })

  beforeEach(() => {
    sut = new CacheAdapter(middleware, cache, 'key')
  })

  it('should call handle with correct request', async () => {
    await sut.handle({ any: 'any' })

    expect(middleware.handle).toHaveBeenCalledWith({ any: 'any' })
    expect(middleware.handle).toHaveBeenCalledTimes(1)
  })

  it('should not call handle cache request', async () => {
    cache.get.mockResolvedValueOnce('{}' as any)

    await sut.handle({ any: 'any' })
    expect(cache.get).toBeCalledTimes(1)
    expect(cache.set).toBeCalledTimes(0)
    expect(middleware.handle).toHaveBeenCalledTimes(0)
  })
  it('should set cache with cache empty', async () => {
    await sut.handle({ any: 'any' })
    expect(cache.get).toBeCalledTimes(1)
    expect(cache.set).toBeCalledTimes(1)
    expect(middleware.handle).toHaveBeenCalledTimes(1)
  })
  it('should validate error middleware', async () => {
    middleware.handle.mockRejectedValueOnce(new Error('any_error'))
    const res = await sut.handle({ any: 'any' })
    expect(cache.get).toBeCalledTimes(1)
    expect(cache.set).toBeCalledTimes(0)
    expect(middleware.handle).toHaveBeenCalledTimes(1)

    expect(res.statusCode).toBe(500)
  })
})
