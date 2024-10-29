import { Logger } from '@/infra/gateways'
import { env } from '@/main/config/env'

export const makeLogger = (): Logger => {
  return new Logger(env.appName, env.loki.url)
}
