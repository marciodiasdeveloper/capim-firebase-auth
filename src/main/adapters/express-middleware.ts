import { StatusCode } from '@/application/helpers'
import { Middleware } from '@/application/middlewares'

import { RequestHandler } from 'express'

type Adapter = (middleware: Middleware) => RequestHandler

export const adaptExpressMiddleware: Adapter = middleware => async (req, res, next) => {
  const { statusCode, data } = await middleware.handle({ ...req.headers, ...req.locals, ipAddress: req.headers['x-forwarded-for'] })
  if (statusCode === StatusCode.ok) {
    const validEntries = Object.entries(data).filter(([, value]) => value)
    req.locals = { ...req.locals, ...Object.fromEntries(validEntries) }
    next()
  } else {
    res.status(statusCode).json({ error: data.message })
  }
}
