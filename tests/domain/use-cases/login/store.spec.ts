// import { setupLoginStore, LoginStoreUseCase } from '@/domain/use-cases'
// import { mock, MockProxy } from 'jest-mock-extended'
// import { FirebaseApp } from 'firebase/app'

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

// jest.mock('firebase/auth')

jest.mock('firebase/auth', () => {
  return {
    auth: jest.fn().mockReturnThis(),
    signInWithEmailAndPassword: jest.fn(async () => {
      return new Promise((resolve, reject) => {
        resolve(null)
      })
    }),
    getAuth: jest.fn()
  }
})

describe('LoginStoreUseCase', () => {
  // let sut: LoginStoreUseCase
  // let sutFirebase: MockProxy<FirebaseApp>

  // type Input = {
  //   email: string
  //   password: string
  // }

  // const mockInput: Input = {
  //   email: 'foo@bar.com',
  //   password: '123456'
  // }

  // beforeAll(() => {
  //   sutFirebase = mock()
  //   sutFirebase.getAuth.mockResolvedValue({})
  //   sutFirebase.signInWithEmailAndPassword.mockResolvedValue({})
  // })

  // beforeEach(() => {
  //   sut = setupLoginStore(sutFirebase)
  // })

  describe('setupLoginStore', () => {
    it('should create new user', async () => {
      // const customer = await sut(mockInput)
      // console.log(customer)
      // expect(customer).toEqual({ token: 'any_token' })
    })
  })
})
