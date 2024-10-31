import { v4 as uuidv4 } from 'uuid'
import { setupUserStore, UserStoreUseCase } from '@/domain/use-cases'
import { mock, MockProxy } from 'jest-mock-extended'
import { FirebaseApp } from 'firebase/app'
import { setDoc } from 'firebase/firestore'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { AuthEmailAlreadyInUse } from '@/application/errors/firebase'

jest.mock('firebase/auth', () => ({
  getAuth: jest.fn().mockReturnValue({
    currentUser: {
      getIdToken: jest.fn().mockResolvedValue('any_token')
    }
  }),
  createUserWithEmailAndPassword: jest.fn().mockResolvedValue({
    user: {
      uid: uuidv4().toString(),
      email: 'foo@bar.com',
      emailVerified: true,
      getIdToken: jest.fn().mockResolvedValue('any_token')
    }
  }),
  updateProfile: jest.fn().mockResolvedValue({})
}))

jest.mock('firebase/firestore', () => ({
  getFirestore: jest.fn().mockResolvedValue({}),
  doc: jest.fn().mockReturnValue({}),
  setDoc: jest.fn().mockResolvedValue({})
}))

describe('UserStoreUseCase', () => {
  let sut: UserStoreUseCase
  let sutFirebase: MockProxy<FirebaseApp>

  type Input = {
    displayName: string
    phoneNumber: string
    password: string
    email: string
  }

  const mockInput: Input = {
    displayName: 'Foo bar',
    phoneNumber: '+3337999999999',
    email: 'foo@bar.com',
    password: '123456'
  }

  beforeAll((): void => {
    sutFirebase = mock()
  })

  beforeEach((): void => {
    sut = setupUserStore(sutFirebase)
  })

  describe('setupUserStore', () => {
    it('should create new user and return token', async () => {
      const customer = await sut(mockInput)

      expect(customer).toEqual({ token: 'any_token' })

      // Verifica se as funções foram chamadas corretamente
      expect(createUserWithEmailAndPassword).toHaveBeenCalledWith(
        expect.anything(),
        mockInput.email,
        mockInput.password
      )
      expect(updateProfile).toHaveBeenCalledWith(
        expect.anything(),
        { displayName: mockInput.displayName }
      )
      expect(setDoc).toHaveBeenCalledWith(
        expect.anything(),
        expect.objectContaining({
          email: mockInput.email,
          displayName: mockInput.displayName,
          phoneNumber: mockInput.phoneNumber,
          createdAt: expect.any(String)
        })
      )
    })

    it('should throw AuthEmailAlreadyInUse when email is already in use', async () => {
      const error = {
        code: 'auth/email-already-in-use'
      };

      (createUserWithEmailAndPassword as jest.Mock).mockRejectedValue(error)

      await expect(sut(mockInput)).rejects.toThrow(AuthEmailAlreadyInUse)
    })
  })
})
