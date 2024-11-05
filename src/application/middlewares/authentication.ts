import { HttpResponse, ok } from '@/application/helpers'
import { Middleware } from '@/application/middlewares/middleware'
import { ValidationBuilder as Builder } from '@/application/validation'
import { Validator } from '@/domain/contracts/gateways'
import { AuthorizationTokenValidateUseCase } from '@/domain/use-cases/authorization-token'

type HttpRequest = { authorization: string }
type Model = Error | {
  user: {
    displayName: string
    email: string
  }
}

export class AuthenticationMiddleware extends Middleware {
  constructor (private readonly authorizationTokenDecode: AuthorizationTokenValidateUseCase) {
    super()
  }

  async perform ({ authorization }: HttpRequest): Promise<HttpResponse<Model>> {
    const tokenDecoded = await this.authorizationTokenDecode({ token: authorization })

    console.log('tokenDecoded', tokenDecoded)

    return ok(tokenDecoded)
  }

  override buildValidators (data: HttpRequest): Validator[] {
    return [
      ...Builder.of({ value: data.authorization, fieldName: 'authorization' }).required().build()
    ]
  }
}
