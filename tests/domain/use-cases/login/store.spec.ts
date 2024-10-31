import { setupLoginStore, LoginStoreUseCase } from '@/domain/use-cases'
import { mock, MockProxy } from 'jest-mock-extended'
import { FirebaseApp } from 'firebase/app'

// jest.mock('firebase/app', () => {
//   const userCredentialMock = {
//     user: {
//       sendEmailVerification: jest.fn()
//     }
//   }
//   return {
//     auth: jest.fn().mockReturnThis(),
//     currentUser: {
//       email: 'test',
//       uid: '123',
//       emailVerified: true
//     },
//     signInWithEmailAndPassword: jest.fn(),
//     createUserWithEmailAndPassword: jest.fn(() => userCredentialMock),
//     sendPasswordResetEmail: jest.fn(),
//     signOut: jest.fn(),
//     onAuthStateChanged: jest.fn(),
//     initializeApp: jest.fn()
//   }
// })

jest.mock('firebase/auth', () => ({
  getAuth: jest.fn().mockReturnValue({
    // validateUser: jest.fn().mockReturnValue({
    //   email: 'myEmail@gmail.com',
    //   name: 'myName',
    //   sub: 'e87255a8-92f5-4de5-b295-6dc74c0a3ccb',
    //   roles: ['user', 'owner', 'admin'],
    //   lang: 'pt-BR',
    //   tenantId: '4cd086d1-cfc2-491a-8099-75c6d27dfe62'
    // })
  }),
  signInWithEmailAndPassword: jest.fn().mockResolvedValue({
    user: {
      getIdToken: jest.fn().mockResolvedValue('any_token'),
      getIdTokenResult: jest.fn().mockResolvedValue
    }
  })
}))

describe('LoginStoreUseCase', () => {
  let sut: LoginStoreUseCase
  let sutFirebase: MockProxy<FirebaseApp>

  type Input = {
    email: string
    password: string
  }

  const mockInput: Input = {
    email: 'foo@bar.com',
    password: '123456'
  }

  beforeAll(() => {
    sutFirebase = mock()
  })

  beforeEach(() => {
    sut = setupLoginStore(sutFirebase)
  })

  describe('setupLoginStore', () => {
    it('should login user', async () => {
      const data = await sut(mockInput)
      expect(data).toEqual({ token: 'any_token' })
    })
  })
})
