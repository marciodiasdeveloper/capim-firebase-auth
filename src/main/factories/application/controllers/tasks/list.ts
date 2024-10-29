import { makeTasksListUseCase } from '@/main/factories/domain/use-cases'
import { ForgotPasswordStoreController, Controller } from '@/application/controllers'
import { makeValidationController } from '@/main/factories/application/decorators'

export const makeTasksListController = (): Controller => {
  const controller = new ForgotPasswordStoreController(makeTasksListUseCase())
  return makeValidationController(controller)
}
