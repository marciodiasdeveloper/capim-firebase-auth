import { Controller } from '@/application/controllers'
import { HttpResponse, ok } from '@/application/helpers'
import { LoginStore, Validator } from '@/domain/contracts/gateways'
import { LoginStoreUseCase } from '@/domain/use-cases'
import { ValidationBuilder as Builder } from '@/application/validation'

type HttpRequest = LoginStore.Input

type Model = Error | LoginStore.Output

export class LoginStoreController extends Controller {
  constructor (private readonly store: LoginStoreUseCase) {
    super()
  }

  async perform (input: HttpRequest): Promise<HttpResponse<Model>> {
    const data = await this.store(input)
    return ok(data)
  }

  override buildValidators (input: HttpRequest): Validator[] {
    return [
      ...Builder.of({ value: input.email, fieldName: 'email' }).required().build(),
      ...Builder.of({ value: input.password, fieldName: 'password' }).required().build()
    ]
  }
}
