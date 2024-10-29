import { makeForgotPasswordStoreUseCase } from '@/main/factories/domain/use-cases'
import { ForgotPasswordStoreController, Controller } from '@/application/controllers'
import { makeValidationController } from '@/main/factories/application/decorators'

export const makeForgotPasswordStoreController = (): Controller => {
  const controller = new ForgotPasswordStoreController(makeForgotPasswordStoreUseCase())
  return makeValidationController(controller)
}
