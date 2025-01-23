import { CreateHash } from '@/domain/contracts/gateways'
import { v4 as uuid } from 'uuid'
export class Hash implements CreateHash {
  createHash (): CreateHash.Output {
    return `${uuid()}-${Date.now().toString()}-${(Math.random() * 1000).toString(36)}`
  }
}
