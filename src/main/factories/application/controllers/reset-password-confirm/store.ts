import { makeLoginStoreUseCase } from '@/main/factories/domain/use-cases'
import { ResetPasswordConfirmStoreController, Controller } from '@/application/controllers'
import { makeValidationController } from '@/main/factories/application/decorators'

export const makeResetPasswordConfirmStoreController = (): Controller => {
  const controller = new ResetPasswordConfirmStoreController(makeLoginStoreUseCase())
  return makeValidationController(controller)
}
