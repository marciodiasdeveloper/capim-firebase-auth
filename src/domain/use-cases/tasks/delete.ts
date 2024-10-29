import { TasksDelete } from '@/domain/contracts/gateways'

type Setup = (firebase: any) => TasksDeleteUseCase
type Input = TasksDelete.Input
type Output = TasksDelete.Output

export type TasksDeleteUseCase = (input: Input) => Promise<Output>

export const setupTasksDeleteUseCase: Setup = ({ firebase }) => async input => {
  return { token: 'some-token' }
}
