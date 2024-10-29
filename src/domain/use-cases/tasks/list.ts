import { TasksList } from '@/domain/contracts/gateways'

type Setup = (firebase: any) => TasksListUseCase
type Input = TasksList.Input
type Output = TasksList.Output

export type TasksListUseCase = (input: Input) => Promise<Output>

export const setupTasksListUseCase: Setup = ({ firebase }) => async input => {
  return { token: 'some-token' }
}
