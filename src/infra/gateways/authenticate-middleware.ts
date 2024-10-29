import { AuthorizationTokenValidate } from '@/domain/contracts/gateways'

// import { ValidateUser } from 'library-auth'

export class AuthenticateMiddleware implements AuthorizationTokenValidate {
  async authorizeToken (input: AuthorizationTokenValidate.Input): Promise<AuthorizationTokenValidate.Output> {
    let result
    try {
      // const response = await new ValidateUser().validateUser({ ...input })
      result = {
        displayName: 'teste',
        email: 'email'
      }
    } catch (error) {
      console.log(error)
    }
    return result
  }
}
