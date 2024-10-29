import { badRequest, HttpResponse, serverError, unauthorized, notFound } from '@/application/helpers'
import { validateError } from '@/application/errors/validate-error'
import { Validator } from '@/domain/contracts/gateways'

interface HttpRequest extends Record<string, unknown>{}
export abstract class Controller {
  abstract perform (httpRequest: HttpRequest): Promise<HttpResponse>

  buildValidators (httpRequest: HttpRequest): Validator[] {
    return []
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      return await this.perform(httpRequest)
    } catch (error) {
      return validateError<Promise<HttpResponse>>(error as Error, {
        serverError,
        unauthorized,
        badRequest,
        notFound
      }, httpRequest)
    }
  }
}
