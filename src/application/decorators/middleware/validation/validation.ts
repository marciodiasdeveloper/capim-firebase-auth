import { Middleware } from '@/application/middlewares'
import { badRequest, HttpResponse } from '@/application/helpers'
import { Validator } from '@/domain/contracts/gateways'
import { Validators } from '@/infra/gateways'

interface Request extends Record<string, unknown>{
  // tenant: string
}

export class ValidationMiddleware extends Middleware {
  constructor (
    private readonly decorate: Middleware,
    private readonly validators: Validators
  ) {
    super()
  }

  override buildValidators (httpRequest: Request): Validator[] {
    return this.decorate.buildValidators(httpRequest)
  }

  async perform (httpRequest: Request): Promise<HttpResponse> {
    const error = this.validate(httpRequest)

    if (error !== undefined) return badRequest(error)
    return await this.decorate.perform(httpRequest)
  }

  private validate (httpRequest: Request): Error | undefined {
    const validators = this.buildValidators(httpRequest)

    return this.validators.compositeValidator({ validators }).validate()
  }
}
