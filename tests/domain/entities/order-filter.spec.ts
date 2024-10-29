import { OrderFilter } from '@/domain/entities'

describe('OrderFilter', () => {
  it('should default order', () => {
    const getUrl = new OrderFilter({}).validate()
    expect(getUrl).toEqual({
      order: 'ASC',
      orderBy: 'created_at'
    })
  })
  it('should order DESC', () => {
    const getUrl = new OrderFilter({
      order: 'DESC'
    }).validate()
    expect(getUrl).toEqual({
      order: 'DESC',
      orderBy: 'created_at'
    })
  })
  it('should order invalid', () => {
    const error = new Error('Invalid Order')
    const validate = new OrderFilter({
      order: 'invalid' as 'ASC'
    })
    expect(() => validate.validate()).toThrowError(error)
  })
})
