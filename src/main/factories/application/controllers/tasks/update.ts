import { makeTasksUpdateUseCase } from '@/main/factories/domain/use-cases'
import { TasksUpdateController, Controller } from '@/application/controllers'
import { makeValidationController } from '@/main/factories/application/decorators'

export const makeTasksUpdateController = (): Controller => {
  const controller = new TasksUpdateController(makeTasksUpdateUseCase())
  return makeValidationController(controller)
}
