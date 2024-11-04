import { TasksList } from '@/domain/contracts/gateways'
import { getAuth } from 'firebase/auth'

type Setup = (firebase: any) => TasksListUseCase
type Input = TasksList.Input
type Output = TasksList.Output

export type TasksListUseCase = (input: Input) => Promise<Output>

export const setupTasksListUseCase: Setup = ({ firebase }) => async input => {
  const auth = getAuth(firebase)
  console.log(auth)
  return { token: 'any_token' }
}
