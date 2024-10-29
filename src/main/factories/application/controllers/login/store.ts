import { makeLoginStoreUseCase } from '@/main/factories/domain/use-cases'
import { LoginStoreController, Controller } from '@/application/controllers'
import { makeValidationController } from '@/main/factories/application/decorators'

export const makeLoginStoreController = (): Controller => {
  const controller = new LoginStoreController(makeLoginStoreUseCase())
  return makeValidationController(controller)
}
