import { makeTasksStoreUseCase } from '@/main/factories/domain/use-cases'
import { TasksStoreController, Controller } from '@/application/controllers'
import { makeValidationController } from '@/main/factories/application/decorators'

export const makeTasksStoreController = (): Controller => {
  const controller = new TasksStoreController(makeTasksStoreUseCase())
  return makeValidationController(controller)
}
