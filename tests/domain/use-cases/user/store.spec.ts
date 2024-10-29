// import { setupUserStore, UserStoreUseCase } from '@/domain/use-cases'
// import { v4 as uuidv4 } from 'uuid'
// import { mock, MockProxy } from 'jest-mock-extended'
// import { AuthEmailAlreadyInUse } from '@/application/errors'
// import { createUserWithEmailAndPassword } from 'firebase/auth'

// describe('UserStoreUseCase', () => {
//   let sut: UserStoreUseCase
//   let sutFirebase: MockProxy<any>

//   type Input = {
//     displayName: string
//     phoneNumber: string
//     password: string
//     email: string
//   }

//   const mockInput: Input = {
//     displayName: 'Foo bar',
//     phoneNumber: '+3337999999999',
//     email: 'foo@bar.com',
//     password: '123456'
//   }

//   beforeAll(() => {
//     sutFirebase = mock()
//     sutFirebase.getAuth.mockResolvedValue({})
//     sutFirebase.getFirestore.mockResolvedValue({})
//     sutFirebase.createUserWithEmailAndPassword.mockResolvedValue({
//       user: {
//         uid: uuidv4(),
//         email: mockInput.email,
//         getIdToken: async () => 'any_token',
//         emailVerified: true
//       }
//     })
//   })

//   beforeEach(() => {
//     sut = setupUserStore(sutFirebase)
//   })

//   describe('setupUserStore', () => {
//     it('should create new user', async () => {
//       const customer = await sut(mockInput)
//       console.log(customer)
//       expect(customer).toEqual({ token: 'any_token' })
//     })

//     it('deve lançar AuthEmailAlreadyInUse quando o email já estiver em uso', async () => {
//       class AuthError extends Error {
//         code: string
//         constructor (message: string, code: string) {
//           super(message)
//           this.code = code
//         }
//       }

//       const error = new AuthError('auth/email-already-in-use', 'auth/email-already-in-use')
//       sutFirebase.createUserWithEmailAndPassword.mockRejectedValue(error)

//       const firebase = sutFirebase
//       const userStoreUseCase = setupUserStore({ firebase })

//       await expect(userStoreUseCase(mockInput)).rejects.toThrow(AuthEmailAlreadyInUse)
//       expect(createUserWithEmailAndPassword).toHaveBeenCalledWith(firebase, mockInput.email, mockInput.password)
//     })
//   })
// })
describe(' TaskDeleteUseCase', () => {
  it('should delete a task', async () => {

  })
})
