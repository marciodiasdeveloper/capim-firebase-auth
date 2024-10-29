import { UniqueId } from '@/infra/gateways'

import { set, reset } from 'mockdate'

describe('UniqueId', () => {
  let sut: UniqueId

  beforeAll(() => {
    set(new Date(2021, 9, 3, 10, 10, 10))
    sut = new UniqueId()
  })

  afterAll(() => {
    reset()
  })

  it('should create a unique id', () => {
    const uuid = sut.uuid()

    expect(uuid).toBe('20211003101010')
  })
})
