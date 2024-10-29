import { Controller } from '@/application/controllers'
import { Methods, StatusCode } from '@/application/helpers'

import { RequestHandler } from 'express'

type Adapter = (controller: Controller) => RequestHandler

interface HttpRequest extends Record<string, unknown>{}

export const adaptExpressRoute: Adapter = controller => async (req, res) => {
  let httpRequest: HttpRequest = { ...req.body, ...req.locals, ...req.params }
  if (req.method === Methods.GET){
    httpRequest = { ...req.query, ...httpRequest }
  }

  const request = await controller.handle(httpRequest)

  if (request.data === undefined) {
    return res.status(request.statusCode).json()
  }

  const { statusCode, data } = request
  const json = [StatusCode.ok, StatusCode.created, StatusCode.noContent].includes(statusCode) ? data : { error: data.message }
  res.status(statusCode).json(json)
}
