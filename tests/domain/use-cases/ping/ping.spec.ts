
import { setupPingUseCase, PingUseCase } from '@/domain/use-cases'
describe(' TaskDeleteUseCase', () => {
  let sut: PingUseCase

  beforeEach(() => {
    sut = setupPingUseCase()
  })

  describe('setupPingUseCase', () => {
    it('should create a contact', async () => {
      const data = await sut({})
      expect(data).toBeDefined()
      expect(data).toEqual({ message: 'pong' })
    })
  })
})
