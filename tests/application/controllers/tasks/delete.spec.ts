import { Controller, TasksDeleteController } from '@/application/controllers'
import { ServerError } from '@/application/errors'
import { RequiredString } from '@/application/validation'
import { AuthorizationTokenError } from '@/domain/entities'

import { v4 as uuidv4 } from 'uuid'

describe('TasksDeleteController', () => {
  let sut: TasksDeleteController
  let sutAuthorizationToken: jest.Mock

  const mockHttpRequestInput = {
    id: 'any_id'
  }

  beforeAll(() => {
    sutAuthorizationToken = jest.fn()
    sutAuthorizationToken.mockResolvedValue({ uuid: uuidv4().toString() })
  })

  beforeEach(() => {
    sut = new TasksDeleteController(sutAuthorizationToken)
  })

  it('should extend Controller', async () => {
    expect(sut).toBeInstanceOf(Controller)
  })
  it('should call Tasks with correct input', async () => {
    await sut.handle(mockHttpRequestInput)
    expect(sutAuthorizationToken).toHaveBeenCalledWith(mockHttpRequestInput)
    expect(sutAuthorizationToken).toHaveBeenCalledTimes(1)
  })

  it('should return 400 if AuthorizationTokenError fails', async () => {
    sutAuthorizationToken = jest.fn()
    sutAuthorizationToken.mockRejectedValueOnce(new AuthorizationTokenError())
    sut = new TasksDeleteController(sutAuthorizationToken)

    const httpResponse = await sut.handle(mockHttpRequestInput)

    expect(httpResponse).toEqual({
      statusCode: 400,
      data: new AuthorizationTokenError()
    })
  })

  it('should build Validators correctly on save', async () => {
    const validators = sut.buildValidators({
      id: ''
    })

    expect(validators).toEqual([
      new RequiredString('', 'id')
    ])
  })

  it('should return 500 if fails new Error', async () => {
    sutAuthorizationToken = jest.fn()
    sutAuthorizationToken.mockRejectedValueOnce(new Error())

    sut = new TasksDeleteController(sutAuthorizationToken)

    const httpResponse = await sut.handle(mockHttpRequestInput)

    expect(httpResponse).toEqual({
      statusCode: 500,
      data: new ServerError()
    })
  })
})
