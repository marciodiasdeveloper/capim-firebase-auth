import { adaptExpressRoute as adapt } from '@/main/adapters'
import { makeForgotPasswordStoreController } from '@/main/factories/application/controllers'
import { Router } from 'express'

export default (router: Router): void => {
  router.post('/forgot-password', adapt(makeForgotPasswordStoreController()))
}
