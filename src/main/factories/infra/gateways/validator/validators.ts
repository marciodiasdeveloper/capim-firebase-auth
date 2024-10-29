import { Validators } from '@/infra/gateways'

export const makeValidators = (): Validators => {
  return new Validators()
}
