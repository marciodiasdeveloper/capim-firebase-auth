import { Express, json } from 'express'
import cors from 'cors'
import compression from 'compression'
// import swaggerExpres from 'swagger-ui-express'
// import swaggerFile from '@/infra/documentation/swagger.json'
import { setupSentry } from '@/main/factories/application/middlewares/sentry'

export const setupMiddlewares = (app: Express): void => {
  app.use(cors())
  app.use(json())
  app.use(compression())
  setupSentry(app)
  // app.use('/api/docs', swaggerExpres.serve, swaggerExpres.setup(swaggerFile))
  app.use((req, res, next) => {
    res.type('json')
    next()
  })
}
