import { makeTasksDeleteUseCase } from '@/main/factories/domain/use-cases'
import { TasksDeleteController, Controller } from '@/application/controllers'
import { makeValidationController } from '@/main/factories/application/decorators'

export const makeTasksDeleteController = (): Controller => {
  const controller = new TasksDeleteController(makeTasksDeleteUseCase())
  return makeValidationController(controller)
}
