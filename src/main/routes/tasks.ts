import { Router } from 'express'
import { auth } from '@/main/middlewares'
import { adaptExpressRoute as adapt } from '@/main/adapters'

import {
  makeTasksListController,
  makeTasksStoreController,
  makeTasksShowController,
  makeTasksUpdateController,
  makeTasksDeleteController
} from '@/main/factories/application/controllers'

export default (router: Router): void => {
  router.get('/tasks', auth({}), adapt(makeTasksListController()))
  router.post('/tasks', auth({}), adapt(makeTasksStoreController()))
  router.get('/tasks/{id}', auth({}), adapt(makeTasksShowController()))
  router.put('/tasks/{id}', auth({}), adapt(makeTasksUpdateController()))
  router.delete('/tasks/{id}', auth({}), adapt(makeTasksDeleteController()))
}
