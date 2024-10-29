import { adaptExpressRoute as adapt } from '@/main/adapters'
import { makeResetPasswordConfirmStoreController } from '@/main/factories/application/controllers'
import { Router } from 'express'

export default (router: Router): void => {
  router.post('/reset-password-confirm', adapt(makeResetPasswordConfirmStoreController()))
}
