import { setupForgotPasswordControllerUseCase, ForgotPasswordStoreUseCase } from '@/domain/use-cases'
import { mock, MockProxy } from 'jest-mock-extended'
import { FirebaseApp } from 'firebase/app'

jest.mock('firebase/auth', () => ({
  getAuth: jest.fn().mockReturnValue({}),
  sendPasswordResetEmail: jest.fn().mockResolvedValue({})
}))

describe('ForgotPasswordStoreUseCase', () => {
  let sut: ForgotPasswordStoreUseCase
  let sutFirebase: MockProxy<FirebaseApp>

  type Input = {
    email: string
  }

  const mockInput: Input = {
    email: 'foo@bar.com'
  }

  beforeAll(() => {
    sutFirebase = mock()
  })

  beforeEach(() => {
    sut = setupForgotPasswordControllerUseCase(sutFirebase)
  })

  describe('setupForgotPasswordControllerUseCase', () => {
    it('should request forgot password', async () => {
      const data = await sut(mockInput)
      expect(data).toEqual(undefined)
    })
  })
})
