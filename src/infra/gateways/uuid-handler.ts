import { UUIDGenerator } from '@/domain/contracts/gateways'

import { v4 } from 'uuid'

export class UUIDHandler implements UUIDGenerator {
  uuid (): UUIDGenerator.Output {
    return v4()
  }
}
