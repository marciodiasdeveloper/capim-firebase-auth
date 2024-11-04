import { setupTasksDeleteUseCase, TasksDeleteUseCase } from '@/domain/use-cases'
import { mock, MockProxy } from 'jest-mock-extended'
import { FirebaseApp } from 'firebase/app'

jest.mock('firebase/auth', () => ({
  getAuth: jest.fn().mockReturnValue({ })
}))

describe('TasksDeleteUseCase', () => {
  let sut: TasksDeleteUseCase
  let sutFirebase: MockProxy<FirebaseApp>

  type Input = {
    id: string
  }

  const mockInput: Input = {
    id: 'any_id'
  }

  beforeAll(() => {
    sutFirebase = mock()
  })

  beforeEach(() => {
    sut = setupTasksDeleteUseCase(sutFirebase)
  })

  describe('setupTasksDeleteUseCase', () => {
    it('should login user', async () => {
      const data = await sut(mockInput)
      expect(data).toEqual({ token: 'any_token' })
    })
  })
})
