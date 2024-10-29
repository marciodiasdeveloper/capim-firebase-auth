import { makeTasksShowUseCase } from '@/main/factories/domain/use-cases'
import { TasksShowController, Controller } from '@/application/controllers'
import { makeValidationController } from '@/main/factories/application/decorators'

export const makeTasksShowController = (): Controller => {
  const controller = new TasksShowController(makeTasksShowUseCase())
  return makeValidationController(controller)
}
