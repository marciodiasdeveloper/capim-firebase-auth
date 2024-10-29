import { Controller } from '@/application/controllers'
import { HttpResponse, serverError } from '@/application/helpers'
import { Middleware } from '@/application/middlewares'
import { CacheGet, CacheSet } from '@/domain/contracts/gateways'

export class CacheAdapter {
  constructor (private readonly middleware: Middleware | Controller, private readonly cache: CacheGet & CacheSet, private readonly key: string) { }

  async handle (httpRequest: any): Promise<HttpResponse<Controller | Middleware> | HttpResponse<Error>> {
    try {
      const resultCache: HttpResponse<any> | undefined = await this.cache.get({ key: httpRequest[this.key] })
      if (resultCache != null) return resultCache
      const result = await this.middleware.handle(httpRequest)
      if (result.statusCode === 200) {
        await this.cache.set({ key: httpRequest[this.key], data: result })
      }
      return result
    } catch (error) {
      return serverError(error)
    }
  }
}
