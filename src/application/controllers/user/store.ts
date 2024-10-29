import { Controller } from '@/application/controllers'
import { HttpResponse, ok } from '@/application/helpers'
import { UserStore, Validator } from '@/domain/contracts/gateways'
import { UserStoreUseCase } from '@/domain/use-cases'
import { ValidationBuilder as Builder } from '@/application/validation'

type HttpRequest = UserStore.Input
type Model = Error | UserStore.Output

export class UserStoreController extends Controller {
  constructor (private readonly store: UserStoreUseCase) {
    super()
  }

  async perform (input: HttpRequest): Promise<HttpResponse<Model>> {
    const data = await this.store(input)
    return ok(data)
  }

  override buildValidators (input: HttpRequest): Validator[] {
    return [
      ...Builder.of({ value: input.displayName, fieldName: 'displayName' }).required().build(),
      ...Builder.of({ value: input.phoneNumber, fieldName: 'phoneNumber' }).required().build(),
      ...Builder.of({ value: input.email, fieldName: 'email' }).required().build(),
      ...Builder.of({ value: input.password, fieldName: 'password' }).required().build()
    ]
  }
}
