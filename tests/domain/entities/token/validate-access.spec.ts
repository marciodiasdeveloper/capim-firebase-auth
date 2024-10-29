import { Access } from '@/domain/entities'
describe('Access', () => {
  let sut: Access

  beforeEach(() => {
    sut = new Access(
      {
        token: 'any_token'
      }
    )
  })

  it('should return successful when valid token', () => {
    const result = sut.validateToken()
    expect(result).toBe('successful')
  })

  it('should return a expired token', () => {
    const sut = new Access(
      {
        token: undefined
      }
    )

    expect(sut.validateToken()).toBe('failed')
  })
})
