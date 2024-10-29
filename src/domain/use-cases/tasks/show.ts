import { TasksShow } from '@/domain/contracts/gateways'

type Setup = (firebase: any) => TasksShowUseCase
type Input = TasksShow.Input
type Output = TasksShow.Output

export type TasksShowUseCase = (input: Input) => Promise<Output>

export const setupTasksShowUseCase: Setup = ({ firebase }) => async input => {
  return { token: 'some-token' }
}
