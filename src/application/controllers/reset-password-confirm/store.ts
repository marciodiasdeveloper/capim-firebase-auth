import { Controller } from '@/application/controllers'
import { HttpResponse, ok } from '@/application/helpers'
import { ResetPasswordConfirmStore, Validator } from '@/domain/contracts/gateways'
import { ResetPasswordConfirmStoreUseCase } from '@/domain/use-cases'
import { ValidationBuilder as Builder } from '@/application/validation'

type HttpRequest = ResetPasswordConfirmStore.Input

type Model = Error | ResetPasswordConfirmStore.Output

export class ResetPasswordConfirmStoreController extends Controller {
  constructor (private readonly store: ResetPasswordConfirmStoreUseCase) {
    super()
  }

  async perform (input: HttpRequest): Promise<HttpResponse<Model>> {
    const data = await this.store(input)
    return ok(data)
  }

  override buildValidators (input: HttpRequest): Validator[] {
    return [
      ...Builder.of({ value: input.oobCode, fieldName: 'oobCode' }).required().build(),
      ...Builder.of({ value: input.newPassword, fieldName: 'newPassword' }).required().build()
    ]
  }
}
