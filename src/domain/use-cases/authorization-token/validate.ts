import { AuthorizationTokenValidate } from '@/domain/contracts/gateways'
import { AuthenticationError, ValidateAuthorization } from '@/domain/entities'
import { User } from '@/domain/contracts/authentication'

type Setup = (authorizationTokenValidate: AuthorizationTokenValidate) => AuthorizationTokenValidateUseCase

type Input = {
  token: string
}

type Output = {
  user: User
}

export type AuthorizationTokenValidateUseCase = (input: Input) => Promise<Output>

export const setupAuthorizationTokenValidate: Setup = (authorizationTokenValidate) => async input => {
  const validateToken = new ValidateAuthorization(input.token)

  const authorizationData = await authorizationTokenValidate.authorizeToken(validateToken.validateAuth())

  if (authorizationData?.email == null){
    throw new AuthenticationError()
  }

  return {
    user: {
      displayName: authorizationData.displayName,
      email: authorizationData.email
    }
  }
}
