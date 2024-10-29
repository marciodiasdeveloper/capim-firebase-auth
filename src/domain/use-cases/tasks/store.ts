import { TasksStore } from '@/domain/contracts/gateways'
import { getAuth } from 'firebase/auth'

type Setup = (firebase: any) => TasksStoreUseCase
type Input = TasksStore.Input
type Output = TasksStore.Output

export type TasksStoreUseCase = (input: Input) => Promise<Output>

export const setupTasksStoreUseCase: Setup = ({ firebase }) => async input => {
  const auth = getAuth(firebase)
  console.log(auth)
  return { token: 'some-token' }
}
