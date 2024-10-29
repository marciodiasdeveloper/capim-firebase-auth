import { adaptExpressRoute as adapt } from '@/main/adapters'
import { makeUserStoreController } from '@/main/factories/application/controllers'
import { Router } from 'express'

export default (router: Router): void => {
  router.post('/user', adapt(makeUserStoreController()))
}
