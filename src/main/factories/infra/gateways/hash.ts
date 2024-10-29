import { Hash } from '@/infra/gateways'

export const makeHash = (): Hash => {
  return new Hash()
}
