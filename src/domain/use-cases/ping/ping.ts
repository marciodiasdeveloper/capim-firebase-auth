import { Ping } from '@/domain/contracts/gateways'

type Setup = () => PingUseCase
type Input = any
type Output = Ping.Output

export type PingUseCase = (input: Input) => Promise<Output>

export const setupPingUseCase: Setup = () => async input => {
  return { message: 'pong' }
}
