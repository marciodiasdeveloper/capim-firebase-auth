import { Controller, TasksStoreController } from '@/application/controllers'
import { ServerError } from '@/application/errors'
import { RequiredString } from '@/application/validation'
import { AuthorizationTokenError } from '@/domain/entities'

import { v4 as uuidv4 } from 'uuid'

describe('TasksStoreController', () => {
  let sut: TasksStoreController
  let sutAuthorizationToken: jest.Mock

  const mockHttpRequestInput = {
    title: 'any_title',
    description: 'any_description',
    status: 'any_status',
    dueDate: 'any_dueDate'
  }

  beforeAll(() => {
    sutAuthorizationToken = jest.fn()
    sutAuthorizationToken.mockResolvedValue({ uuid: uuidv4().toString() })
  })

  beforeEach(() => {
    sut = new TasksStoreController(sutAuthorizationToken)
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
    sut = new TasksStoreController(sutAuthorizationToken)

    const httpResponse = await sut.handle(mockHttpRequestInput)

    expect(httpResponse).toEqual({
      statusCode: 400,
      data: new AuthorizationTokenError()
    })
  })

  it('should build Validators correctly on save', async () => {
    const validators = sut.buildValidators({
      title: '',
      description: '',
      status: '',
      dueDate: ''
    })

    expect(validators).toEqual([
      new RequiredString('', 'title'),
      new RequiredString('', 'description'),
      new RequiredString('', 'status'),
      new RequiredString('', 'dueDate')
    ])
  })

  it('should return 500 if fails new Error', async () => {
    sutAuthorizationToken = jest.fn()
    sutAuthorizationToken.mockRejectedValueOnce(new Error())

    sut = new TasksStoreController(sutAuthorizationToken)

    const httpResponse = await sut.handle(mockHttpRequestInput)

    expect(httpResponse).toEqual({
      statusCode: 500,
      data: new ServerError()
    })
  })
})
