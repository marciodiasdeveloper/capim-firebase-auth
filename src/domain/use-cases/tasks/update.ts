import { TasksUpdate } from '@/domain/contracts/gateways'

type Setup = (firebase: any) => TasksUpdateUseCase
type Input = TasksUpdate.Input
type Output = TasksUpdate.Output

export type TasksUpdateUseCase = (input: Input) => Promise<Output>

export const setupTasksUpdateUseCase: Setup = ({ firebase }) => async input => {
  return { token: 'some-token' }
}
