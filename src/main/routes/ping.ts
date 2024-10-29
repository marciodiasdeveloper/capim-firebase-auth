import { adaptExpressRoute as adapt } from '@/main/adapters'
import { makePingController } from '@/main/factories/application/controllers'
import { Router } from 'express'

export default (router: Router): void => {
  router.get('/ping', adapt(makePingController()))
}
