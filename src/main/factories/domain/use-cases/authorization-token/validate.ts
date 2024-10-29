import { setupAuthorizationTokenValidate, AuthorizationTokenValidateUseCase } from '@/domain/use-cases'
import { makeAuthenticationMiddleware } from '@/main/factories/infra/gateways'

export const makeAuthorizationTokenValidateUseCase = (): AuthorizationTokenValidateUseCase => {
  return setupAuthorizationTokenValidate(
    makeAuthenticationMiddleware()
  )
}
