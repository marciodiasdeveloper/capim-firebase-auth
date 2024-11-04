import { TasksDelete } from '@/domain/contracts/gateways'
import { getAuth } from 'firebase/auth'

type Setup = (firebase: any) => TasksDeleteUseCase
type Input = TasksDelete.Input
type Output = TasksDelete.Output

export type TasksDeleteUseCase = (input: Input) => Promise<Output>

export const setupTasksDeleteUseCase: Setup = ({ firebase }) => async input => {
  const auth = getAuth(firebase)
  console.log(auth)
  return { token: 'any_token' }
}
