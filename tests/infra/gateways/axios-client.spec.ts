import { AxiosHttpClient } from '@/infra/gateways'

import axios from 'axios'

jest.mock('axios')

describe('AxiosHttpClient', () => {
  let sut: AxiosHttpClient
  let fakeAxios: jest.Mocked<typeof axios>
  let url: string
  let params: object

  beforeAll(() => {
    url = 'any_url'
    params = { any: 'any' }
    fakeAxios = axios as jest.Mocked<typeof axios>
    fakeAxios.get.mockResolvedValue({
      status: 200,
      data: 'any_data'
    })
    fakeAxios.post.mockResolvedValue({
      status: 200,
      data: 'any_data'
    })
    fakeAxios.put.mockResolvedValue({
      status: 200,
      data: 'any_data'
    })
    fakeAxios.delete.mockResolvedValue({
      status: 200,
      data: 'any_data'
    })
  })

  beforeEach(() => {
    sut = new AxiosHttpClient()
  })

  describe('get', () => {
    it('should call get with correct input', async () => {
      await sut.get({ url, params })

      expect(fakeAxios.get).toHaveBeenCalledWith(url, { params })
      expect(fakeAxios.get).toHaveBeenCalledTimes(1)
    })

    it('should return data on success', async () => {
      const result = await sut.get({ url, params })

      expect(result).toEqual('any_data')
    })

    it('should rethrow if get throws', async () => {
      fakeAxios.get.mockRejectedValueOnce(new Error('http_error'))

      const promise = sut.get({ url, params })

      await expect(promise).rejects.toThrow(new Error('http_error'))
    })
  })

  describe('post', () => {
    it('should call post with correct input', async () => {
      await sut.post({ url, params, config: {} })

      expect(fakeAxios.post).toHaveBeenCalledWith(url, params, {})
      expect(fakeAxios.post).toHaveBeenCalledTimes(1)
    })

    it('should return data on success', async () => {
      const result = await sut.post({ url, params, config: {} })

      expect(result).toEqual('any_data')
    })

    it('should rethrow if post throws', async () => {
      fakeAxios.post.mockRejectedValueOnce(new Error('http_error'))

      const promise = sut.post({ url, params, config: {} })

      await expect(promise).rejects.toThrow(new Error('http_error'))
    })
  })
  describe('put', () => {
    it('should call put with correct input', async () => {
      await sut.put({ url, params, config: {} })

      expect(fakeAxios.put).toHaveBeenCalledWith(url, params, {})
      expect(fakeAxios.put).toHaveBeenCalledTimes(1)
    })

    it('should return data on success', async () => {
      const result = await sut.put({ url, params, config: {} })

      expect(result).toEqual('any_data')
    })

    it('should rethrow if put throws', async () => {
      fakeAxios.put.mockRejectedValueOnce(new Error('http_error'))

      const promise = sut.put({ url, params, config: {} })

      await expect(promise).rejects.toThrow(new Error('http_error'))
    })
  })
  describe('delete', () => {
    it('should call delete with correct indelete', async () => {
      await sut.delete({ url, params, config: {} })

      expect(fakeAxios.delete).toHaveBeenCalledWith(url, { params, headers: {} })
      expect(fakeAxios.delete).toHaveBeenCalledTimes(1)
    })

    it('should return data on success', async () => {
      const result = await sut.delete({ url, params, config: {} })

      expect(result).toEqual('any_data')
    })

    it('should rethrow if delete throws', async () => {
      fakeAxios.delete.mockRejectedValueOnce(new Error('http_error'))

      const promise = sut.delete({ url, params, config: {} })

      await expect(promise).rejects.toThrow(new Error('http_error'))
    })
  })
})
