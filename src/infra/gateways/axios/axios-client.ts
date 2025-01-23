import { HttpDeleteClient, HttpGetClient, HttpPostClient, HttpPutClient } from '@/infra/gateways'

import axios from 'axios'

type Input = HttpGetClient.Input

export class AxiosHttpClient implements HttpGetClient, HttpPostClient, HttpPutClient, HttpDeleteClient {
  async get ({ url, params, config }: Input): Promise<any> {
    const result = await axios.get(url, { params, headers: config })
    return result.data
  }

  async post ({ url, params, config }: HttpPostClient.Input): Promise<any> {
    const result = await axios.post(url, params, config)

    return result.data
  }

  async put ({ url, params, config }: HttpPutClient.Input): Promise<any> {
    const result = await axios.put(url, params, config)
    return result.data
  }

  async delete ({ url, params, config }: HttpDeleteClient.Input): Promise<any> {
    const result = await axios.delete(url, { params, headers: config })
    return result.data
  }
}
