import { Controller } from '@/application/controllers'
import { HttpResponse, okNoContent } from '@/application/helpers'
import { ForgotPasswordStore, Validator } from '@/domain/contracts/gateways'
import { ForgotPasswordStoreUseCase } from '@/domain/use-cases'
import { ValidationBuilder as Builder } from '@/application/validation'

type HttpRequest = ForgotPasswordStore.Input

type Model = Error | ForgotPasswordStore.Output

export class ForgotPasswordStoreController extends Controller {
  constructor (private readonly store: ForgotPasswordStoreUseCase) {
    super()
  }

  async perform (input: HttpRequest): Promise<HttpResponse<Model>> {
    await this.store(input)
    return okNoContent()
  }

  override buildValidators (input: HttpRequest): Validator[] {
    return [
      ...Builder.of({ value: input.email, fieldName: 'email' }).required().build()
    ]
  }
}
