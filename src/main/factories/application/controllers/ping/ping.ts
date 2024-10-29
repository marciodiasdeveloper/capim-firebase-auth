import { makePingUseCase } from '@/main/factories/domain/use-cases'
import { PingController, Controller } from '@/application/controllers'
import { makeValidationController } from '@/main/factories/application/decorators'

export const makePingController = (): Controller => {
  console.log('ping')
  const controller = new PingController(makePingUseCase())
  return makeValidationController(controller)
}
