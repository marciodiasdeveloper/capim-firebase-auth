import { Express } from 'express'

import * as Sentry from '@sentry/node'
import { env } from '@/main/config/env'

export const setupSentry = (app: Express): void => {
  if (env.sentry.dsn !== '' && process.env.NODE_ENV !== 'test') {
    Sentry.init({ dsn: env.sentry.dsn })
    app.use(Sentry.Handlers.requestHandler())
    app.use(Sentry.Handlers.errorHandler())
  }
}
