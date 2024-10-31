import { Controller, PingController } from '@/application/controllers'
import { ServerError } from '@/application/errors'
import { Validator } from '@/application/validation'
import { v4 as uuidv4 } from 'uuid'

describe('PingController', () => {
  let sut: PingController
  let sutAuthorizationToken: jest.Mock

  beforeAll(() => {
    sutAuthorizationToken = jest.fn()
    sutAuthorizationToken.mockResolvedValue({ uuid: uuidv4().toString() })
  })

  beforeEach(() => {
    sut = new PingController(sutAuthorizationToken)
  })

  it('should extend Controller', async () => {
    expect(sut).toBeInstanceOf(Controller)
  })

  it('should call Ping with correct input', async () => {
    await sut.handle({})
    expect(sutAuthorizationToken).toHaveBeenCalledWith({})
    expect(sutAuthorizationToken).toHaveBeenCalledTimes(1)
  })

  it('should build Validators correctly on save', async () => {
    const validators: Validator[] = sut.buildValidators()

    expect(validators).toEqual([])
  })

  it('should return 500 if fails new Error', async () => {
    sutAuthorizationToken = jest.fn()
    sutAuthorizationToken.mockRejectedValueOnce(new Error())

    sut = new PingController(sutAuthorizationToken)

    const httpResponse = await sut.handle({})

    expect(httpResponse).toEqual({
      statusCode: 500,
      data: new ServerError()
    })
  })
})
