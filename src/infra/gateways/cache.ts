import { CacheGet, CacheSet, CacheDelete, CacheHas, LogFailure } from '@/domain/contracts/gateways'
import RedisClient from 'ioredis'

const TIME_TO_EXPIRE = 1500
const KEY_EXISTS = 1

export class Cache implements CacheGet, CacheSet, CacheDelete, CacheHas {
  private readonly redis: RedisClient

  constructor (url: string, private readonly logger: LogFailure) {
    this.redis = new RedisClient(url)
  }

  async has (input: CacheHas.Input): Promise<boolean> {
    try {
      return await this.redis.exists(input.key) === KEY_EXISTS
    } catch (error) {
      this.logger.error(error as Error, input)
    }
  }

  async get ({ key }: CacheGet.Input): Promise<CacheGet.Output> {
    try {
      return await this.redis.get(key)
    } catch (error) {
      this.logger.error(error as Error, { key })
    }
  }

  async set ({ key, data, milliseconds = TIME_TO_EXPIRE }: CacheSet.Input): Promise<'OK' | undefined> {
    try {
      return await this.redis.set(key, data, 'EX', milliseconds)
    } catch (error) {
      this.logger.error(error as Error, { key, data, milliseconds })
    }
  }

  async delete ({ key }: CacheDelete.Input): Promise<CacheDelete.Output> {
    try {
      return this.redis.del(key)
    } catch (error) {
      this.logger.error(error as Error, { key })
    }
  }
}
