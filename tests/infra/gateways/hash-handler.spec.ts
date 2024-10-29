import { HashHandler } from '@/infra/gateways/hash-handler'

const update = jest.fn().mockReturnValue(Buffer.from(''))
const final = jest.fn().mockReturnValue(Buffer.from(''))

jest.mock('crypto', () => (
  {
    createCipheriv: () => ({
      update,
      final
    }),
    createDecipheriv: () => ({
      update,
      final
    })
  })
)
describe('HashHandler', () => {
  let salt: string
  let iv: string
  let sut: HashHandler

  beforeAll(() => {
    salt = 'any_salt'
    iv = 'any_iv'
  })

  beforeEach(() => {
    sut = new HashHandler(salt, iv)
  })

  it('should return encrypted hash hex', async () => {
    final.mockReturnValue(Buffer.from('1'))
    const encrpted = sut.encrypt({
      value: 'anyData'
    })

    expect(encrpted).toEqual({ value: '31' })
  })
  it('should return decrypted result', async () => {
    final.mockReturnValue(Buffer.from('1'))
    const decrypted = sut.decrypt({
      valueCrypted: '31'
    })

    expect(decrypted).toEqual({ value: '1' })
  })
})
