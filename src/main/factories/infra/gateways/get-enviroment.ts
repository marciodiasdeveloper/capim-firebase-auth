import { Environment } from '@/infra/gateways'
import { env } from '@/main/config/env'

export const makeEnvironment = (): Environment => {
  return new Environment(env.environment)
}
