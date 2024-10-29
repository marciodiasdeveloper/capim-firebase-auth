import { Hash } from '@/infra/gateways'

describe('Hash', () => {
  let sut: Hash

  beforeEach(() => {
    sut = new Hash()
  })

  it('should return handle', async () => {
    const hash = sut.createHash()

    expect(hash).toBeTruthy()
  })
})
