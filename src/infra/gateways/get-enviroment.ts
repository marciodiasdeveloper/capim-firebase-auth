import { GetEnvironment } from '@/domain/contracts/gateways'

export class Environment implements GetEnvironment {
  constructor (
    private readonly environment: string
  ){}

  getEnvironment (): GetEnvironment.Output{
    return this.environment
  }
}
