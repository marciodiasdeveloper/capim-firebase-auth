import { env } from '@/main/config/env'
import { Cache } from '@/infra/gateways'
import { makeLogger } from './logger'

export const makeCache = (): Cache => {
  return new Cache(
    env.redis.url,
    makeLogger()
  )
}
