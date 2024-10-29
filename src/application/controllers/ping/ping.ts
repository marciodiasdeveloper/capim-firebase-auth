import { Controller } from '@/application/controllers'
import { HttpResponse, ok } from '@/application/helpers'
import { Ping, Validator } from '@/domain/contracts/gateways'
import { PingUseCase } from '@/domain/use-cases'

type Model = Error | Ping.Output

export class PingController extends Controller {
  constructor (private readonly ping: PingUseCase) {
    super()
  }

  async perform (): Promise<HttpResponse<Model>> {
    const data = await this.ping({})
    return ok(data)
  }

  override buildValidators (): Validator[] {
    return []
  }
}
