import { Controller } from '@/application/controllers'
import { badRequest, HttpResponse } from '@/application/helpers'
import { Validator } from '@/domain/contracts/gateways'
import { Validators } from '@/infra/gateways'

export class ValidationController extends Controller {
  constructor (
    private readonly decorate: Controller,
    private readonly validators: Validators
  ) {
    super()
  }

  override buildValidators (httpRequest: Record<string, unknown>): Validator[] {
    return this.decorate.buildValidators(httpRequest)
  }

  async perform (httpRequest: Record<string, unknown>): Promise<HttpResponse> {
    const error = this.validate(httpRequest)

    if (error !== undefined) return badRequest(error)

    return await this.decorate.perform(httpRequest)
  }

  private validate (httpRequest: Record<string, unknown>): Error | undefined {
    const validators = this.buildValidators(httpRequest)

    return this.validators.compositeValidator({ validators }).validate()
  }
}
