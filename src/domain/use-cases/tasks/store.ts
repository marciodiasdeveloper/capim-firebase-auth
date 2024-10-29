import { TasksStore } from '@/domain/contracts/gateways'

type Setup = (firebase: any) => TasksStoreUseCase
type Input = TasksStore.Input
type Output = TasksStore.Output

export type TasksStoreUseCase = (input: Input) => Promise<Output>

export const setupTasksStoreUseCase: Setup = ({ firebase }) => async input => {
  return { token: 'some-token' }
}
