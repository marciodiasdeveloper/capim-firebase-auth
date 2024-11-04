import { TasksUpdate } from '@/domain/contracts/gateways'
import { getAuth } from 'firebase/auth'

type Setup = (firebase: any) => TasksUpdateUseCase
type Input = TasksUpdate.Input
type Output = TasksUpdate.Output

export type TasksUpdateUseCase = (input: Input) => Promise<Output>

export const setupTasksUpdateUseCase: Setup = ({ firebase }) => async input => {
  const auth = getAuth(firebase)
  console.log(auth)
  return { token: 'any_token' }
}
