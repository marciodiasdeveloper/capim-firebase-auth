import { setupResetPasswordConfimStore, ResetPasswordConfirmStoreUseCase } from '@/domain/use-cases'
import { mock, MockProxy } from 'jest-mock-extended'
import { FirebaseApp } from 'firebase/app'

jest.mock('firebase/auth', () => ({
  getAuth: jest.fn().mockReturnValue({}),
  confirmPasswordReset: jest.fn().mockResolvedValue({})
}))

describe('ResetPasswordConfirmStoreUseCase', () => {
  let sut: ResetPasswordConfirmStoreUseCase
  let sutFirebase: MockProxy<FirebaseApp>

  type Input = {
    oobCode: string
    newPassword: string
  }

  const mockInput: Input = {
    oobCode: 'any_oobCode',
    newPassword: 'any_new_password'
  }

  beforeAll(() => {
    sutFirebase = mock()
  })

  beforeEach(() => {
    sut = setupResetPasswordConfimStore(sutFirebase)
  })

  describe('setupResetPasswordConfimStore', () => {
    it('should request forgot password', async () => {
      const data = await sut(mockInput)
      expect(data).toEqual({})
    })
  })
})
