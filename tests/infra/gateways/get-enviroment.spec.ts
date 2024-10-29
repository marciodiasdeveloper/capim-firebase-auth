import { Environment } from '@/infra/gateways'

describe('Enviroment', () => {
  let item: string
  let sut: Environment

  beforeAll(() => {
    item = 'enviroment'
  })

  beforeEach(() => {
    sut = new Environment(item)
  })

  it('should return enviroment variable', async () => {
    const encrpted = sut.getEnvironment()

    expect(encrpted).toEqual('enviroment')
  })
})
