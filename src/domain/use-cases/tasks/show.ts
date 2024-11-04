import { TasksShow } from '@/domain/contracts/gateways'
import { getAuth } from 'firebase/auth'

type Setup = (firebase: any) => TasksShowUseCase
type Input = TasksShow.Input
type Output = TasksShow.Output

export type TasksShowUseCase = (input: Input) => Promise<Output>

export const setupTasksShowUseCase: Setup = ({ firebase }) => async input => {
  const auth = getAuth(firebase)
  console.log(auth)
  return { token: 'any_token' }
}
