import {
  setupPingUseCase,
  PingUseCase
} from '@/domain/use-cases'

export const makePingUseCase = (): PingUseCase => {
  return setupPingUseCase()
}
