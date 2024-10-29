import { HttpResponse, badRequest, notFound, unauthorized, forbidden } from '@/application/helpers'
import { validateError } from '@/application/errors/validate-error'
import { Validator } from '@/domain/contracts/gateways'

interface HttpRequest extends Record<string, unknown>{}
export abstract class Middleware {
  abstract perform (httpRequest: HttpRequest): Promise<HttpResponse>

  buildValidators (httpRequest: HttpRequest): Validator[] {
    return []
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      return await this.perform(httpRequest)
    } catch (error) {
      return validateError<Promise<HttpResponse>>(error as Error, {
        serverError: forbidden,
        unauthorized,
        badRequest,
        notFound
      }, httpRequest)
    }
  }
}
