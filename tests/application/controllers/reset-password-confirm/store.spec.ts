import { Controller, ResetPasswordConfirmStoreController } from '@/application/controllers'
import { ServerError } from '@/application/errors'
import { RequiredString } from '@/application/validation'
import { AuthorizationTokenError } from '@/domain/entities'

import { v4 as uuidv4 } from 'uuid'

describe('ResetPasswordConfirmStoreController', () => {
  let sut: ResetPasswordConfirmStoreController
  let sutAuthorizationToken: jest.Mock

  const mockHttpRequestInput = {
    oobCode: 'any_oobCode',
    newPassword: 'any_password'
  }

  beforeAll(() => {
    sutAuthorizationToken = jest.fn()
    sutAuthorizationToken.mockResolvedValue({ uuid: uuidv4().toString() })
  })

  beforeEach(() => {
    sut = new ResetPasswordConfirmStoreController(sutAuthorizationToken)
  })

  it('should extend Controller', async () => {
    expect(sut).toBeInstanceOf(Controller)
  })
  it('should call Login with correct input', async () => {
    await sut.handle(mockHttpRequestInput)
    expect(sutAuthorizationToken).toHaveBeenCalledWith(mockHttpRequestInput)
    expect(sutAuthorizationToken).toHaveBeenCalledTimes(1)
  })

  it('should return 400 if AuthorizationTokenError fails', async () => {
    sutAuthorizationToken = jest.fn()
    sutAuthorizationToken.mockRejectedValueOnce(new AuthorizationTokenError())
    sut = new ResetPasswordConfirmStoreController(sutAuthorizationToken)

    const httpResponse = await sut.handle(mockHttpRequestInput)

    expect(httpResponse).toEqual({
      statusCode: 400,
      data: new AuthorizationTokenError()
    })
  })

  it('should build Validators correctly on save', async () => {
    const validators = sut.buildValidators({
      oobCode: '',
      newPassword: ''
    })

    expect(validators).toEqual([
      new RequiredString('', 'oobCode'),
      new RequiredString('', 'newPassword')
    ])
  })

  it('should return 500 if fails new Error', async () => {
    sutAuthorizationToken = jest.fn()
    sutAuthorizationToken.mockRejectedValueOnce(new Error())

    sut = new ResetPasswordConfirmStoreController(sutAuthorizationToken)

    const httpResponse = await sut.handle(mockHttpRequestInput)

    expect(httpResponse).toEqual({
      statusCode: 500,
      data: new ServerError()
    })
  })
})
